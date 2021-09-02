function t(t, e, r, n) {
  Object.defineProperty(t, e, {
    get: r,
    set: n,
    enumerable: !0,
    configurable: !0,
  });
}
function e(t) {
  return t && t.__esModule ? t.default : t;
}
var r =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  n = {},
  o = {},
  i = r.parcelRequire3a11;
null == i &&
  (((i = function (t) {
    if (t in n) return n[t].exports;
    if (t in o) {
      var e = o[t];
      delete o[t];
      var r = { id: t, exports: {} };
      return (n[t] = r), e.call(r.exports, r, r.exports), r.exports;
    }
    var i = new Error("Cannot find module '" + t + "'");
    throw ((i.code = 'MODULE_NOT_FOUND'), i);
  }).register = function (t, e) {
    o[t] = e;
  }),
  (r.parcelRequire3a11 = i)),
  i.register('7PhYn', function (e, r) {
    var n, o;
    t(
      e.exports,
      'register',
      () => n,
      t => (n = t)
    ),
      t(
        e.exports,
        'resolve',
        () => o,
        t => (o = t)
      );
    var i = {};
    (n = function (t) {
      for (var e = Object.keys(t), r = 0; r < e.length; r++) i[e[r]] = t[e[r]];
    }),
      (o = function (t) {
        var e = i[t];
        if (null == e) throw new Error('Could not resolve bundle with id ' + t);
        return e;
      });
  }),
  i('7PhYn').register(
    JSON.parse('{"brTCj":"index.8526c742.js","kvrLk":"icons.9801e6f1.svg"}')
  );
var a = (function (t) {
  var e,
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = 'function' == typeof Symbol ? Symbol : {},
    i = o.iterator || '@@iterator',
    a = o.asyncIterator || '@@asyncIterator',
    u = o.toStringTag || '@@toStringTag';
  function c(t, e, r) {
    return (
      Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    c({}, '');
  } catch (t) {
    c = function (t, e, r) {
      return (t[e] = r);
    };
  }
  function s(t, e, r, n) {
    var o = e && e.prototype instanceof g ? e : g,
      i = Object.create(o.prototype),
      a = new T(n || []);
    return (
      (i._invoke = (function (t, e, r) {
        var n = l;
        return function (o, i) {
          if (n === p) throw new Error('Generator is already running');
          if (n === d) {
            if ('throw' === o) throw i;
            return I();
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var u = _(a, r);
              if (u) {
                if (u === v) continue;
                return u;
              }
            }
            if ('next' === r.method) r.sent = r._sent = r.arg;
            else if ('throw' === r.method) {
              if (n === l) throw ((n = d), r.arg);
              r.dispatchException(r.arg);
            } else 'return' === r.method && r.abrupt('return', r.arg);
            n = p;
            var c = f(t, e, r);
            if ('normal' === c.type) {
              if (((n = r.done ? d : h), c.arg === v)) continue;
              return { value: c.arg, done: r.done };
            }
            'throw' === c.type &&
              ((n = d), (r.method = 'throw'), (r.arg = c.arg));
          }
        };
      })(t, r, a)),
      i
    );
  }
  function f(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  t.wrap = s;
  var l = 'suspendedStart',
    h = 'suspendedYield',
    p = 'executing',
    d = 'completed',
    v = {};
  function g() {}
  function y() {}
  function m() {}
  var b = {};
  c(b, i, function () {
    return this;
  });
  var w = Object.getPrototypeOf,
    x = w && w(w(R([])));
  x && x !== r && n.call(x, i) && (b = x);
  var E = (m.prototype = g.prototype = Object.create(b));
  function A(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      c(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function S(t, e) {
    function r(o, i, a, u) {
      var c = f(t[o], t, i);
      if ('throw' !== c.type) {
        var s = c.arg,
          l = s.value;
        return l && 'object' == typeof l && n.call(l, '__await')
          ? e.resolve(l.__await).then(
              function (t) {
                r('next', t, a, u);
              },
              function (t) {
                r('throw', t, a, u);
              }
            )
          : e.resolve(l).then(
              function (t) {
                (s.value = t), a(s);
              },
              function (t) {
                return r('throw', t, a, u);
              }
            );
      }
      u(c.arg);
    }
    var o;
    this._invoke = function (t, n) {
      function i() {
        return new e(function (e, o) {
          r(t, n, e, o);
        });
      }
      return (o = o ? o.then(i, i) : i());
    };
  }
  function _(t, r) {
    var n = t.iterator[r.method];
    if (n === e) {
      if (((r.delegate = null), 'throw' === r.method)) {
        if (
          t.iterator.return &&
          ((r.method = 'return'), (r.arg = e), _(t, r), 'throw' === r.method)
        )
          return v;
        (r.method = 'throw'),
          (r.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          ));
      }
      return v;
    }
    var o = f(n, t.iterator, r.arg);
    if ('throw' === o.type)
      return (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), v;
    var i = o.arg;
    return i
      ? i.done
        ? ((r[t.resultName] = i.value),
          (r.next = t.nextLoc),
          'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
          (r.delegate = null),
          v)
        : i
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        v);
  }
  function k(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function O(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function T(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      t.forEach(k, this),
      this.reset(!0);
  }
  function R(t) {
    if (t) {
      var r = t[i];
      if (r) return r.call(t);
      if ('function' == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var o = -1,
          a = function r() {
            for (; ++o < t.length; )
              if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
            return (r.value = e), (r.done = !0), r;
          };
        return (a.next = a);
      }
    }
    return { next: I };
  }
  function I() {
    return { value: e, done: !0 };
  }
  return (
    (y.prototype = m),
    c(E, 'constructor', m),
    c(m, 'constructor', y),
    (y.displayName = c(m, u, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return (
        !!e && (e === y || 'GeneratorFunction' === (e.displayName || e.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, m)
          : ((t.__proto__ = m), c(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(E)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    A(S.prototype),
    c(S.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = S),
    (t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new S(s(e, r, n, o), i);
      return t.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    A(E),
    c(E, u, 'Generator'),
    c(E, i, function () {
      return this;
    }),
    c(E, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (t) {
      var e = [];
      for (var r in t) e.push(r);
      return (
        e.reverse(),
        function r() {
          for (; e.length; ) {
            var n = e.pop();
            if (n in t) return (r.value = n), (r.done = !1), r;
          }
          return (r.done = !0), r;
        }
      );
    }),
    (t.values = R),
    (T.prototype = {
      constructor: T,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(O),
          !t)
        )
          for (var r in this)
            't' === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = e);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var r = this;
        function o(n, o) {
          return (
            (u.type = 'throw'),
            (u.arg = t),
            (r.next = n),
            o && ((r.method = 'next'), (r.arg = e)),
            !!o
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            u = a.completion;
          if ('root' === a.tryLoc) return o('end');
          if (a.tryLoc <= this.prev) {
            var c = n.call(a, 'catchLoc'),
              s = n.call(a, 'finallyLoc');
            if (c && s) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (c) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!s) throw new Error('try statement without catch or finally');
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, 'finallyLoc') &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          v
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), O(r), v;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ('throw' === n.type) {
              var o = n.arg;
              O(r);
            }
            return o;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (t, r, n) {
        return (
          (this.delegate = { iterator: R(t), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = e),
          v
        );
      },
    }),
    t
  );
})({});
try {
  regeneratorRuntime = a;
} catch (t) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = a)
    : Function('r', 'regeneratorRuntime = r')(a);
}
const u = async function (t, e) {
    try {
      const n = e
          ? fetch(t, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(e),
            })
          : fetch(t),
        o = await Promise.race([
          n,
          ((r = 10),
          new Promise(function (t, e) {
            setTimeout(function () {
              e(new Error(`Request took too long! Timeout after ${r} second`));
            }, 1e3 * r);
          })),
        ]),
        i = await o.json();
      if (!o.ok) throw new Error(`${i.message} (${o.status})`);
      return i;
    } catch (t) {
      throw t;
    }
    var r;
  },
  c = {
    recipe: {},
    search: { query: '', results: [], page: 1, resultsPerPage: 10 },
    bookmarks: [],
  },
  s = function (t) {
    const { recipe: e } = t.data;
    return {
      id: e.id,
      title: e.title,
      publisher: e.publisher,
      sourceUrl: e.source_url,
      image: e.image_url,
      servings: e.servings,
      cookingTime: e.cooking_time,
      ingredients: e.ingredients,
      ...(e.key && { key: e.key }),
    };
  },
  f = function (t = c.search.page) {
    c.search.page = t;
    const e = (t - 1) * c.search.resultsPerPage,
      r = t * c.search.resultsPerPage;
    return c.search.results.slice(e, r);
  },
  l = function () {
    localStorage.setItem('bookmarks', JSON.stringify(c.bookmarks));
  },
  h = function (t) {
    c.bookmarks.push(t),
      t.id === c.recipe.id && (c.recipe.bookmarked = !0),
      l();
  };
!(function () {
  const t = localStorage.getItem('bookmarks');
  t && (c.bookmarks = JSON.parse(t));
})();
var p, d, v, g;
i.register('kVZsc', function (e, r) {
  var n;
  t(
    e.exports,
    'getBundleURL',
    () => n,
    t => (n = t)
  );
  var o = {};
  function i(t) {
    return (
      ('' + t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/'
    );
  }
  n = function (t) {
    var e = o[t];
    return (
      e ||
        ((e = (function () {
          try {
            throw new Error();
          } catch (e) {
            var t = ('' + e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
            if (t) return i(t[2]);
          }
          return '/';
        })()),
        (o[t] = e)),
      e
    );
  };
}),
  (p = i('kVZsc').getBundleURL('brTCj') + i('7PhYn').resolve('kvrLk'));
class y {
  _data;
  render(t, e = !0) {
    if (!t || (Array.isArray(t) && 0 === t.length)) return this.renderError();
    this._data = t;
    const r = this._generateMarkup();
    if (!e) return r;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
  update(t) {
    this._data = t;
    const e = this._generateMarkup(),
      r = document.createRange().createContextualFragment(e),
      n = Array.from(r.querySelectorAll('*')),
      o = Array.from(this._parentElement.querySelectorAll('*'));
    n.forEach((t, e) => {
      const r = o[e];
      t.isEqualNode(r) ||
        '' === t.firstChild?.nodeValue.trim() ||
        (r.textContent = t.textContent),
        t.isEqualNode(r) ||
          Array.from(t.attributes).forEach(t =>
            r.setAttribute(t.name, t.value)
          );
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const t = `\n      <div class="spinner">\n        <svg>\n          <use href="${e(
      p
    )}#icon-loader"></use>\n        </svg>\n      </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
  renderError(t = this._errorMessage) {
    const r = `\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${e(
      p
    )}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${t}</p>\n      </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
  renderMessage(t = this._message) {
    const r = `\n      <div class="message">\n        <div>\n          <svg>\n            <use href="${e(
      p
    )}#icon-smile"></use>\n          </svg>\n        </div>\n        <p>${t}</p>\n      </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
}
(Fraction = function (t, e) {
  if (void 0 !== t && e)
    'number' == typeof t && 'number' == typeof e
      ? ((this.numerator = t), (this.denominator = e))
      : 'string' == typeof t &&
        'string' == typeof e &&
        ((this.numerator = parseInt(t)), (this.denominator = parseInt(e)));
  else if (void 0 === e)
    if (((num = t), 'number' == typeof num))
      (this.numerator = num), (this.denominator = 1);
    else if ('string' == typeof num) {
      var r,
        n,
        o = num.split(' ');
      if (
        (o[0] && (r = o[0]),
        o[1] && (n = o[1]),
        r % 1 == 0 && n && n.match('/'))
      )
        return new Fraction(r).add(new Fraction(n));
      if (!r || n) return;
      if ('string' == typeof r && r.match('/')) {
        var i = r.split('/');
        (this.numerator = i[0]), (this.denominator = i[1]);
      } else {
        if ('string' == typeof r && r.match('.'))
          return new Fraction(parseFloat(r));
        (this.numerator = parseInt(r)), (this.denominator = 1);
      }
    }
  this.normalize();
}),
  (Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  }),
  (Fraction.prototype.toString = function () {
    if ('NaN' === this.denominator) return 'NaN';
    var t =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      e = this.numerator % this.denominator,
      r = this.denominator,
      n = [];
    return (
      0 != t && n.push(t),
      0 != e && n.push((0 === t ? e : Math.abs(e)) + '/' + r),
      n.length > 0 ? n.join(' ') : 0
    );
  }),
  (Fraction.prototype.rescale = function (t) {
    return (this.numerator *= t), (this.denominator *= t), this;
  }),
  (Fraction.prototype.add = function (t) {
    var e = this.clone();
    return (
      (t = t instanceof Fraction ? t.clone() : new Fraction(t)),
      (td = e.denominator),
      e.rescale(t.denominator),
      t.rescale(td),
      (e.numerator += t.numerator),
      e.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (t) {
    var e = this.clone();
    return (
      (t = t instanceof Fraction ? t.clone() : new Fraction(t)),
      (td = e.denominator),
      e.rescale(t.denominator),
      t.rescale(td),
      (e.numerator -= t.numerator),
      e.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (t) {
    var e = this.clone();
    if (t instanceof Fraction)
      (e.numerator *= t.numerator), (e.denominator *= t.denominator);
    else {
      if ('number' != typeof t) return e.multiply(new Fraction(t));
      e.numerator *= t;
    }
    return e.normalize();
  }),
  (Fraction.prototype.divide = function (t) {
    var e = this.clone();
    if (t instanceof Fraction)
      (e.numerator *= t.denominator), (e.denominator *= t.numerator);
    else {
      if ('number' != typeof t) return e.divide(new Fraction(t));
      e.denominator *= t;
    }
    return e.normalize();
  }),
  (Fraction.prototype.equals = function (t) {
    t instanceof Fraction || (t = new Fraction(t));
    var e = this.clone().normalize();
    t = t.clone().normalize();
    return e.numerator === t.numerator && e.denominator === t.denominator;
  }),
  (Fraction.prototype.normalize =
    ((v = function (t) {
      return (
        'number' == typeof t &&
        ((t > 0 && t % 1 > 0 && t % 1 < 1) ||
          (t < 0 && t % -1 < 0 && t % -1 > -1))
      );
    }),
    (g = function (t, e) {
      if (e) {
        var r = Math.pow(10, e);
        return Math.round(t * r) / r;
      }
      return Math.round(t);
    }),
    function () {
      if (v(this.denominator)) {
        var t = g(this.denominator, 9),
          e = Math.pow(10, t.toString().split('.')[1].length);
        (this.denominator = Math.round(this.denominator * e)),
          (this.numerator *= e);
      }
      v(this.numerator) &&
        ((t = g(this.numerator, 9)),
        (e = Math.pow(10, t.toString().split('.')[1].length)),
        (this.numerator = Math.round(this.numerator * e)),
        (this.denominator *= e));
      var r = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= r),
        (this.denominator /= r),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (t, e) {
    var r = [],
      n = Fraction.primeFactors(t),
      o = Fraction.primeFactors(e);
    return (
      n.forEach(function (t) {
        var e = o.indexOf(t);
        e >= 0 && (r.push(t), o.splice(e, 1));
      }),
      0 === r.length
        ? 1
        : (function () {
            var t,
              e = r[0];
            for (t = 1; t < r.length; t++) e *= r[t];
            return e;
          })()
    );
  }),
  (Fraction.primeFactors = function (t) {
    for (var e = Math.abs(t), r = [], n = 2; n * n <= e; )
      e % n == 0 ? (r.push(n), (e /= n)) : n++;
    return 1 != e && r.push(e), r;
  }),
  (d = Fraction);
var m = new (class extends y {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';
  addHandlerRender(t) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, t));
  }
  addHandlerUpdateServings(t) {
    this._parentElement.addEventListener('click', function (e) {
      const r = e.target.closest('.btn--update-servings');
      if (!r) return;
      const { updateTo: n } = r.dataset;
      +n > 0 && t(+n);
    });
  }
  addHandlerAddBookmark(t) {
    this._parentElement.addEventListener('click', function (e) {
      e.target.closest('.btn--bookmark') && t();
    });
  }
  _generateMarkup() {
    return `\n      <figure class="recipe__fig">\n        <img src="${
      this._data.image
    }" alt="${
      this._data.title
    }" class="recipe__img" crossorigin/>\n        <h1 class="recipe__title">\n          <span>${
      this._data.title
    }</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${e(
      p
    )}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${
      this._data.cookingTime
    }</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${e(
      p
    )}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${
      this._data.servings
    }</span>\n          <span class="recipe__info-text">servings</span>\n\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${
      this._data.servings - 1
    }">\n              <svg>\n                <use href="${e(
      p
    )}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${
      this._data.servings + 1
    }">\n              <svg>\n                <use href="${e(
      p
    )}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n\n        <div class="recipe__user-generated ${
      this._data.key ? '' : 'hidden'
    }">\n          <svg>\n            <use href="${e(
      p
    )}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${e(
      p
    )}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients
      .map(this._generateMarkupIngredient)
      .join(
        ''
      )}\n      </div>\n\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${
      this._data.publisher
    }</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${
      this._data.sourceUrl
    }"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${e(
      p
    )}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `;
  }
  _generateMarkupIngredient(t) {
    return `\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${e(
      p
    )}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${
      t.quantity ? new d(t.quantity).toString() : ''
    }</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${
      t.unit
    }</span>\n        ${t.description}\n      </div>\n    </li>\n  `;
  }
})();
var b = new (class {
  _parentEl = document.querySelector('.search');
  getQuery() {
    const t = this._parentEl.querySelector('.search__field').value;
    return this._clearInput(), t;
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(t) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault(), t();
    });
  }
})();
var w = new (class extends y {
  _parentElement = '';
  _generateMarkup() {
    const t = window.location.hash.slice(1);
    return `\n      <li class="preview">\n        <a class="preview__link ${
      this._data.id === t ? 'preview__link--active' : ''
    }" href="#${
      this._data.id
    }">\n          <figure class="preview__fig">\n            <img src="${
      this._data.image
    }" alt="${
      this._data.title
    }" crossorigin/>\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${
      this._data.title
    }</h4>\n            <p class="preview__publisher">${
      this._data.publisher
    }</p>\n            <div class="preview__user-generated ${
      this._data.key ? '' : 'hidden'
    }">\n              <svg>\n              <use href="${e(
      p
    )}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>\n    `;
  }
})();
var x = new (class extends y {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
  _generateMarkup() {
    return this._data.map(t => w.render(t, !1)).join('');
  }
})();
var E = new (class extends y {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(t) {
    this._parentElement.addEventListener('click', function (e) {
      const r = e.target.closest('.btn--inline');
      if (!r) return;
      const n = +r.dataset.goto;
      t(n);
    });
  }
  _generateMarkup() {
    const t = this._data.page,
      r = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return 1 === t && r > 1
      ? `\n        <button data-goto="${
          t + 1
        }" class="btn--inline pagination__btn--next">\n          <span>Page ${
          t + 1
        }</span>\n          <svg class="search__icon">\n            <use href="${e(
          p
        )}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `
      : t === r && r > 1
      ? `\n        <button data-goto="${
          t - 1
        }" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${e(
          p
        )}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${
          t - 1
        }</span>\n        </button>\n      `
      : t < r
      ? `\n        <button data-goto="${
          t - 1
        }" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${e(
          p
        )}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${
          t - 1
        }</span>\n        </button>\n        <button data-goto="${
          t + 1
        }" class="btn--inline pagination__btn--next">\n          <span>Page ${
          t + 1
        }</span>\n          <svg class="search__icon">\n            <use href="${e(
          p
        )}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `
      : '';
  }
})();
var A = new (class extends y {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  addHandlerRender(t) {
    window.addEventListener('load', t);
  }
  _generateMarkup() {
    return this._data.map(t => w.render(t, !1)).join('');
  }
})();
var S,
  _ = new (class extends y {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded :)';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor() {
      super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
    }
    toggleWindow() {
      this._overlay.classList.toggle('hidden'),
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
      this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
      this._btnClose.addEventListener('click', this.toggleWindow.bind(this)),
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerUpload(t) {
      this._parentElement.addEventListener('submit', function (e) {
        e.preventDefault();
        const r = [...new FormData(this)],
          n = Object.fromEntries(r);
        t(n);
      });
    }
    _generateMarkup() {}
  })();
i.register('ek4B6', function (t, e) {
  var n = function (t) {
    return t && t.Math == Math && t;
  };
  t.exports =
    n('object' == typeof globalThis && globalThis) ||
    n('object' == typeof window && window) ||
    n('object' == typeof self && self) ||
    n('object' == typeof r && r) ||
    (function () {
      return this;
    })() ||
    Function('return this')();
});
var k,
  O,
  T,
  R,
  I = i('ek4B6');
O = !(T = function (t) {
  try {
    return !!t();
  } catch (t) {
    return !0;
  }
})(function () {
  return (
    7 !=
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var M = {}.propertyIsEnumerable,
  j = Object.getOwnPropertyDescriptor,
  L = j && !M.call({ 1: 2 }, 1);
R = L
  ? function (t) {
      var e = j(this, t);
      return !!e && e.enumerable;
    }
  : M;
var P;
P = function (t, e) {
  return {
    enumerable: !(1 & t),
    configurable: !(2 & t),
    writable: !(4 & t),
    value: e,
  };
};
var F,
  N,
  U = {},
  B = {}.toString;
N = function (t) {
  return B.call(t).slice(8, -1);
};
var C = ''.split;
U = T(function () {
  return !Object('z').propertyIsEnumerable(0);
})
  ? function (t) {
      return 'String' == N(t) ? C.call(t, '') : Object(t);
    }
  : Object;
var $;
($ = function (t) {
  if (null == t) throw TypeError("Can't call method on " + t);
  return t;
}),
  (F = function (t) {
    return U($(t));
  });
var D, q, z;
z = function (t) {
  return 'object' == typeof t ? null !== t : 'function' == typeof t;
};
var W,
  Y = {},
  H =
    ((I = i('ek4B6')),
    function (t) {
      return 'function' == typeof t ? t : void 0;
    });
W = function (t, e) {
  return arguments.length < 2 ? H(I[t]) : I[t] && I[t][e];
};
I = i('ek4B6');
var V,
  G,
  J,
  X = {};
X = W('navigator', 'userAgent') || '';
var K,
  Z,
  Q = I.process,
  tt = I.Deno,
  et = (Q && Q.versions) || (tt && tt.version),
  rt = et && et.v8;
rt
  ? (Z = (K = rt.split('.'))[0] < 4 ? 1 : K[0] + K[1])
  : X &&
    (!(K = X.match(/Edge\/(\d+)/)) || K[1] >= 74) &&
    (K = X.match(/Chrome\/(\d+)/)) &&
    (Z = K[1]),
  (J = Z && +Z),
  (V =
    (G =
      !!Object.getOwnPropertySymbols &&
      !T(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && J && J < 41)
        );
      })) &&
    !Symbol.sham &&
    'symbol' == typeof Symbol.iterator),
  (Y = V
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        var e = W('Symbol');
        return 'function' == typeof e && Object(t) instanceof e;
      });
var nt;
nt = function (t, e) {
  var r, n;
  if (
    'string' === e &&
    'function' == typeof (r = t.toString) &&
    !z((n = r.call(t)))
  )
    return n;
  if ('function' == typeof (r = t.valueOf) && !z((n = r.call(t)))) return n;
  if (
    'string' !== e &&
    'function' == typeof (r = t.toString) &&
    !z((n = r.call(t)))
  )
    return n;
  throw TypeError("Can't convert object to primitive value");
};
var ot, it;
I = i('ek4B6');
var at,
  ut = {};
(I = i('ek4B6')), (I = i('ek4B6'));
at = function (t, e) {
  try {
    Object.defineProperty(I, t, { value: e, configurable: !0, writable: !0 });
  } catch (r) {
    I[t] = e;
  }
  return e;
};
var ct = I['__core-js_shared__'] || at('__core-js_shared__', {});
(ut = ct),
  (it = function (t, e) {
    return ut[t] || (ut[t] = void 0 !== e ? e : {});
  })('versions', []).push({
    version: '3.16.2',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
  });
var st,
  ft = {};
st = function (t) {
  return Object($(t));
};
var lt = {}.hasOwnProperty;
ft =
  Object.hasOwn ||
  function (t, e) {
    return lt.call(st(t), e);
  };
var ht,
  pt = 0,
  dt = Math.random();
ht = function (t) {
  return (
    'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++pt + dt).toString(36)
  );
};
var vt = it('wks'),
  gt = I.Symbol,
  yt = V ? gt : (gt && gt.withoutSetter) || ht,
  mt = (ot = function (t) {
    return (
      (ft(vt, t) && (G || 'string' == typeof vt[t])) ||
        (G && ft(gt, t) ? (vt[t] = gt[t]) : (vt[t] = yt('Symbol.' + t))),
      vt[t]
    );
  })('toPrimitive');
(q = function (t, e) {
  if (!z(t) || Y(t)) return t;
  var r,
    n = t[mt];
  if (void 0 !== n) {
    if ((void 0 === e && (e = 'default'), (r = n.call(t, e)), !z(r) || Y(r)))
      return r;
    throw TypeError("Can't convert object to primitive value");
  }
  return void 0 === e && (e = 'number'), nt(t, e);
}),
  (D = function (t) {
    var e = q(t, 'string');
    return Y(e) ? e : String(e);
  });
var bt,
  wt,
  xt = (I = i('ek4B6')).document,
  Et = z(xt) && z(xt.createElement);
(wt = function (t) {
  return Et ? xt.createElement(t) : {};
}),
  (bt =
    !O &&
    !T(function () {
      return (
        7 !=
        Object.defineProperty(wt('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var At,
  St,
  _t = Object.getOwnPropertyDescriptor,
  kt = (k = O
    ? _t
    : function (t, e) {
        if (((t = F(t)), (e = D(e)), bt))
          try {
            return _t(t, e);
          } catch (t) {}
        if (ft(t, e)) return P(!R.call(t, e), t[e]);
      }),
  Ot = {};
St = function (t) {
  if (!z(t)) throw TypeError(String(t) + ' is not an object');
  return t;
};
var Tt = Object.defineProperty;
(At = O
  ? Tt
  : function (t, e, r) {
      if ((St(t), (e = D(e)), St(r), bt))
        try {
          return Tt(t, e, r);
        } catch (t) {}
      if ('get' in r || 'set' in r) throw TypeError('Accessors not supported');
      return 'value' in r && (t[e] = r.value), t;
    }),
  (Ot = O
    ? function (t, e, r) {
        return At(t, e, P(1, r));
      }
    : function (t, e, r) {
        return (t[e] = r), t;
      });
I = i('ek4B6');
var Rt,
  It = {},
  Mt = Function.toString;
'function' != typeof ut.inspectSource &&
  (ut.inspectSource = function (t) {
    return Mt.call(t);
  }),
  (It = ut.inspectSource);
var jt,
  Lt,
  Pt = (I = i('ek4B6')).WeakMap;
Lt = 'function' == typeof Pt && /native code/.test(It(Pt));
I = i('ek4B6');
var Ft,
  Nt = it('keys');
Ft = function (t) {
  return Nt[t] || (Nt[t] = ht(t));
};
var Ut = {};
Ut = {};
var Bt,
  Ct,
  $t,
  Dt = I.WeakMap;
if (Lt || ut.state) {
  var qt = ut.state || (ut.state = new Dt()),
    zt = qt.get,
    Wt = qt.has,
    Yt = qt.set;
  (Bt = function (t, e) {
    if (Wt.call(qt, t)) throw new TypeError('Object already initialized');
    return (e.facade = t), Yt.call(qt, t, e), e;
  }),
    (Ct = function (t) {
      return zt.call(qt, t) || {};
    }),
    ($t = function (t) {
      return Wt.call(qt, t);
    });
} else {
  var Ht = Ft('state');
  (Ut[Ht] = !0),
    (Bt = function (t, e) {
      if (ft(t, Ht)) throw new TypeError('Object already initialized');
      return (e.facade = t), Ot(t, Ht, e), e;
    }),
    (Ct = function (t) {
      return ft(t, Ht) ? t[Ht] : {};
    }),
    ($t = function (t) {
      return ft(t, Ht);
    });
}
var Vt = (jt = {
    set: Bt,
    get: Ct,
    has: $t,
    enforce: function (t) {
      return $t(t) ? Ct(t) : Bt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!z(e) || (r = Ct(e)).type !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required');
        return r;
      };
    },
  }).get,
  Gt = jt.enforce,
  Jt = String(String).split('String');
(Rt = function (t, e, r, n) {
  var o,
    i = !!n && !!n.unsafe,
    a = !!n && !!n.enumerable,
    u = !!n && !!n.noTargetGet;
  'function' == typeof r &&
    ('string' != typeof e || ft(r, 'name') || Ot(r, 'name', e),
    (o = Gt(r)).source || (o.source = Jt.join('string' == typeof e ? e : ''))),
    t !== I
      ? (i ? !u && t[e] && (a = !0) : delete t[e], a ? (t[e] = r) : Ot(t, e, r))
      : a
      ? (t[e] = r)
      : at(e, r);
})(Function.prototype, 'toString', function () {
  return ('function' == typeof this && Vt(this).source) || It(this);
});
var Xt,
  Kt,
  Zt,
  Qt,
  te,
  ee,
  re = {},
  ne = Math.ceil,
  oe = Math.floor;
ee = function (t) {
  return isNaN((t = +t)) ? 0 : (t > 0 ? oe : ne)(t);
};
var ie = Math.min;
te = function (t) {
  return t > 0 ? ie(ee(t), 9007199254740991) : 0;
};
var ae,
  ue = Math.max,
  ce = Math.min;
ae = function (t, e) {
  var r = ee(t);
  return r < 0 ? ue(r + e, 0) : ce(r, e);
};
var se = function (t) {
    return function (e, r, n) {
      var o,
        i = F(e),
        a = te(i.length),
        u = ae(n, a);
      if (t && r != r) {
        for (; a > u; ) if ((o = i[u++]) != o) return !0;
      } else
        for (; a > u; u++) if ((t || u in i) && i[u] === r) return t || u || 0;
      return !t && -1;
    };
  },
  fe = (Qt = { includes: se(!0), indexOf: se(!1) }).indexOf;
Zt = function (t, e) {
  var r,
    n = F(t),
    o = 0,
    i = [];
  for (r in n) !ft(Ut, r) && ft(n, r) && i.push(r);
  for (; e.length > o; ) ft(n, (r = e[o++])) && (~fe(i, r) || i.push(r));
  return i;
};
var le,
  he = {},
  pe = (he = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ]).concat('length', 'prototype');
(Kt =
  Object.getOwnPropertyNames ||
  function (t) {
    return Zt(t, pe);
  }),
  (le = Object.getOwnPropertySymbols),
  (re =
    W('Reflect', 'ownKeys') ||
    function (t) {
      var e = Kt(St(t)),
        r = le;
      return r ? e.concat(r(t)) : e;
    }),
  (Xt = function (t, e) {
    for (var r = re(e), n = At, o = k, i = 0; i < r.length; i++) {
      var a = r[i];
      ft(t, a) || n(t, a, o(e, a));
    }
  });
var de = {},
  ve = /#|\.prototype\./,
  ge = function (t, e) {
    var r = me[ye(t)];
    return r == we || (r != be && ('function' == typeof e ? T(e) : !!e));
  },
  ye = (ge.normalize = function (t) {
    return String(t).replace(ve, '.').toLowerCase();
  }),
  me = (ge.data = {}),
  be = (ge.NATIVE = 'N'),
  we = (ge.POLYFILL = 'P');
(de = ge),
  (S = function (t, e) {
    var r,
      n,
      o,
      i,
      a,
      u = t.target,
      c = t.global,
      s = t.stat;
    if ((r = c ? I : s ? I[u] || at(u, {}) : (I[u] || {}).prototype))
      for (n in e) {
        if (
          ((i = e[n]),
          (o = t.noTargetGet ? (a = kt(r, n)) && a.value : r[n]),
          !de(c ? n : u + (s ? '.' : '#') + n, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Xt(i, o);
        }
        (t.sham || (o && o.sham)) && Ot(i, 'sham', !0), Rt(r, n, i, t);
      }
  });
I = i('ek4B6');
var xe = {};
xe =
  Array.isArray ||
  function (t) {
    return 'Array' == N(t);
  };
var Ee;
Ee = function (t) {
  if (Y(t)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(t);
};
var Ae = {},
  Se = {},
  _e = {};
(_e =
  Object.keys ||
  function (t) {
    return Zt(t, he);
  }),
  (Se = O
    ? Object.defineProperties
    : function (t, e) {
        St(t);
        for (var r, n = _e(e), o = n.length, i = 0; o > i; )
          At(t, (r = n[i++]), e[r]);
        return t;
      });
var ke = {};
ke = W('document', 'documentElement');
var Oe,
  Te,
  Re = Ft('IE_PROTO'),
  Ie = function () {},
  Me = function (t) {
    return '<script>' + t + '</script>';
  },
  je = function (t) {
    t.write(Me('')), t.close();
    var e = t.parentWindow.Object;
    return (t = null), e;
  },
  Le = function () {
    try {
      Oe = new ActiveXObject('htmlfile');
    } catch (t) {}
    var t, e;
    Le =
      'undefined' != typeof document
        ? document.domain && Oe
          ? je(Oe)
          : (((e = wt('iframe')).style.display = 'none'),
            ke.appendChild(e),
            (e.src = String('javascript:')),
            (t = e.contentWindow.document).open(),
            t.write(Me('document.F=Object')),
            t.close(),
            t.F)
        : je(Oe);
    for (var r = he.length; r--; ) delete Le.prototype[he[r]];
    return Le();
  };
(Ut[Re] = !0),
  (Ae =
    Object.create ||
    function (t, e) {
      var r;
      return (
        null !== t
          ? ((Ie.prototype = St(t)),
            (r = new Ie()),
            (Ie.prototype = null),
            (r[Re] = t))
          : (r = Le()),
        void 0 === e ? r : Se(r, e)
      );
    });
var Pe,
  Fe = Kt,
  Ne = {}.toString,
  Ue =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [];
(Te = function (t) {
  return Ue && '[object Window]' == Ne.call(t)
    ? (function (t) {
        try {
          return Fe(t);
        } catch (t) {
          return Ue.slice();
        }
      })(t)
    : Fe(F(t));
}),
  (Pe = ot);
var Be;
i.register('1UHYC', function (t, e) {
  var r = i('ek4B6');
  t.exports = r;
});
var Ce = i('1UHYC'),
  $e = At;
Be = function (t) {
  var e = Ce.Symbol || (Ce.Symbol = {});
  ft(e, t) || $e(e, t, { value: Pe(t) });
};
var De,
  qe = At,
  ze = ot('toStringTag');
De = function (t, e, r) {
  t &&
    !ft((t = r ? t : t.prototype), ze) &&
    qe(t, ze, { configurable: !0, value: e });
};
var We, Ye, He;
(He = function (t) {
  if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
  return t;
}),
  (Ye = function (t, e, r) {
    if ((He(t), void 0 === e)) return t;
    switch (r) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (r) {
          return t.call(e, r);
        };
      case 2:
        return function (r, n) {
          return t.call(e, r, n);
        };
      case 3:
        return function (r, n, o) {
          return t.call(e, r, n, o);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  });
var Ve,
  Ge,
  Je = ot('species');
(Ge = function (t) {
  var e;
  return (
    xe(t) &&
      ('function' != typeof (e = t.constructor) ||
      (e !== Array && !xe(e.prototype))
        ? z(e) && null === (e = e[Je]) && (e = void 0)
        : (e = void 0)),
    void 0 === e ? Array : e
  );
}),
  (Ve = function (t, e) {
    return new (Ge(t))(0 === e ? 0 : e);
  });
var Xe = [].push,
  Ke = function (t) {
    var e = 1 == t,
      r = 2 == t,
      n = 3 == t,
      o = 4 == t,
      i = 6 == t,
      a = 7 == t,
      u = 5 == t || i;
    return function (c, s, f, l) {
      for (
        var h,
          p,
          d = st(c),
          v = U(d),
          g = Ye(s, f, 3),
          y = te(v.length),
          m = 0,
          b = l || Ve,
          w = e ? b(c, y) : r || a ? b(c, 0) : void 0;
        y > m;
        m++
      )
        if ((u || m in v) && ((p = g((h = v[m]), m, d)), t))
          if (e) w[m] = p;
          else if (p)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return h;
              case 6:
                return m;
              case 2:
                Xe.call(w, h);
            }
          else
            switch (t) {
              case 4:
                return !1;
              case 7:
                Xe.call(w, h);
            }
      return i ? -1 : n || o ? o : w;
    };
  },
  Ze = (We = {
    forEach: Ke(0),
    map: Ke(1),
    filter: Ke(2),
    some: Ke(3),
    every: Ke(4),
    find: Ke(5),
    findIndex: Ke(6),
    filterReject: Ke(7),
  }).forEach,
  Qe = Ft('hidden'),
  tr = ot('toPrimitive'),
  er = jt.set,
  rr = jt.getterFor('Symbol'),
  nr = Object.prototype,
  or = I.Symbol,
  ir = W('JSON', 'stringify'),
  ar = k,
  ur = At,
  cr = Te,
  sr = R,
  fr = it('symbols'),
  lr = it('op-symbols'),
  hr = it('string-to-symbol-registry'),
  pr = it('symbol-to-string-registry'),
  dr = it('wks'),
  vr = I.QObject,
  gr = !vr || !vr.prototype || !vr.prototype.findChild,
  yr =
    O &&
    T(function () {
      return (
        7 !=
        Ae(
          ur({}, 'a', {
            get: function () {
              return ur(this, 'a', { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (t, e, r) {
          var n = ar(nr, e);
          n && delete nr[e], ur(t, e, r), n && t !== nr && ur(nr, e, n);
        }
      : ur,
  mr = function (t, e) {
    var r = (fr[t] = Ae(or.prototype));
    return (
      er(r, { type: 'Symbol', tag: t, description: e }),
      O || (r.description = e),
      r
    );
  },
  br = function (t, e, r) {
    t === nr && br(lr, e, r), St(t);
    var n = D(e);
    return (
      St(r),
      ft(fr, n)
        ? (r.enumerable
            ? (ft(t, Qe) && t[Qe][n] && (t[Qe][n] = !1),
              (r = Ae(r, { enumerable: P(0, !1) })))
            : (ft(t, Qe) || ur(t, Qe, P(1, {})), (t[Qe][n] = !0)),
          yr(t, n, r))
        : ur(t, n, r)
    );
  },
  wr = function (t, e) {
    St(t);
    var r = F(e),
      n = _e(r).concat(Sr(r));
    return (
      Ze(n, function (e) {
        (O && !xr.call(r, e)) || br(t, e, r[e]);
      }),
      t
    );
  },
  xr = function (t) {
    var e = D(t),
      r = sr.call(this, e);
    return (
      !(this === nr && ft(fr, e) && !ft(lr, e)) &&
      (!(r || !ft(this, e) || !ft(fr, e) || (ft(this, Qe) && this[Qe][e])) || r)
    );
  },
  Er = function (t, e) {
    var r = F(t),
      n = D(e);
    if (r !== nr || !ft(fr, n) || ft(lr, n)) {
      var o = ar(r, n);
      return (
        !o || !ft(fr, n) || (ft(r, Qe) && r[Qe][n]) || (o.enumerable = !0), o
      );
    }
  },
  Ar = function (t) {
    var e = cr(F(t)),
      r = [];
    return (
      Ze(e, function (t) {
        ft(fr, t) || ft(Ut, t) || r.push(t);
      }),
      r
    );
  },
  Sr = function (t) {
    var e = t === nr,
      r = cr(e ? lr : F(t)),
      n = [];
    return (
      Ze(r, function (t) {
        !ft(fr, t) || (e && !ft(nr, t)) || n.push(fr[t]);
      }),
      n
    );
  };
if (
  (G ||
    (Rt(
      (or = function () {
        if (this instanceof or) throw TypeError('Symbol is not a constructor');
        var t =
            arguments.length && void 0 !== arguments[0]
              ? Ee(arguments[0])
              : void 0,
          e = ht(t),
          r = function (t) {
            this === nr && r.call(lr, t),
              ft(this, Qe) && ft(this[Qe], e) && (this[Qe][e] = !1),
              yr(this, e, P(1, t));
          };
        return O && gr && yr(nr, e, { configurable: !0, set: r }), mr(e, t);
      }).prototype,
      'toString',
      function () {
        return rr(this).tag;
      }
    ),
    Rt(or, 'withoutSetter', function (t) {
      return mr(ht(t), t);
    }),
    (R = xr),
    (At = br),
    (k = Er),
    (Kt = Te = Ar),
    (le = Sr),
    (Pe = function (t) {
      return mr(ot(t), t);
    }),
    O &&
      (ur(or.prototype, 'description', {
        configurable: !0,
        get: function () {
          return rr(this).description;
        },
      }),
      Rt(nr, 'propertyIsEnumerable', xr, { unsafe: !0 }))),
  S({ global: !0, wrap: !0, forced: !G, sham: !G }, { Symbol: or }),
  Ze(_e(dr), function (t) {
    Be(t);
  }),
  S(
    { target: 'Symbol', stat: !0, forced: !G },
    {
      for: function (t) {
        var e = Ee(t);
        if (ft(hr, e)) return hr[e];
        var r = or(e);
        return (hr[e] = r), (pr[r] = e), r;
      },
      keyFor: function (t) {
        if (!Y(t)) throw TypeError(t + ' is not a symbol');
        if (ft(pr, t)) return pr[t];
      },
      useSetter: function () {
        gr = !0;
      },
      useSimple: function () {
        gr = !1;
      },
    }
  ),
  S(
    { target: 'Object', stat: !0, forced: !G, sham: !O },
    {
      create: function (t, e) {
        return void 0 === e ? Ae(t) : wr(Ae(t), e);
      },
      defineProperty: br,
      defineProperties: wr,
      getOwnPropertyDescriptor: Er,
    }
  ),
  S(
    { target: 'Object', stat: !0, forced: !G },
    { getOwnPropertyNames: Ar, getOwnPropertySymbols: Sr }
  ),
  S(
    {
      target: 'Object',
      stat: !0,
      forced: T(function () {
        le(1);
      }),
    },
    {
      getOwnPropertySymbols: function (t) {
        return le(st(t));
      },
    }
  ),
  ir)
) {
  var _r =
    !G ||
    T(function () {
      var t = or();
      return (
        '[null]' != ir([t]) || '{}' != ir({ a: t }) || '{}' != ir(Object(t))
      );
    });
  S(
    { target: 'JSON', stat: !0, forced: _r },
    {
      stringify: function (t, e, r) {
        for (var n, o = [t], i = 1; arguments.length > i; )
          o.push(arguments[i++]);
        if (((n = e), (z(e) || void 0 !== t) && !Y(t)))
          return (
            xe(e) ||
              (e = function (t, e) {
                if (('function' == typeof n && (e = n.call(this, t, e)), !Y(e)))
                  return e;
              }),
            (o[1] = e),
            ir.apply(null, o)
          );
      },
    }
  );
}
or.prototype[tr] || Ot(or.prototype, tr, or.prototype.valueOf),
  De(or, 'Symbol'),
  (Ut[Qe] = !0);
I = i('ek4B6');
var kr = At,
  Or = I.Symbol;
if (
  O &&
  'function' == typeof Or &&
  (!('description' in Or.prototype) || void 0 !== Or().description)
) {
  var Tr = {},
    Rr = function () {
      var t =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        e = this instanceof Rr ? new Or(t) : void 0 === t ? Or() : Or(t);
      return '' === t && (Tr[e] = !0), e;
    };
  Xt(Rr, Or);
  var Ir = (Rr.prototype = Or.prototype);
  Ir.constructor = Rr;
  var Mr = Ir.toString,
    jr = 'Symbol(test)' == String(Or('test')),
    Lr = /^Symbol\((.*)\)[^)]+$/;
  kr(Ir, 'description', {
    configurable: !0,
    get: function () {
      var t = z(this) ? this.valueOf() : this,
        e = Mr.call(t);
      if (ft(Tr, t)) return '';
      var r = jr ? e.slice(7, -1) : e.replace(Lr, '$1');
      return '' === r ? void 0 : r;
    },
  }),
    S({ global: !0, forced: !0 }, { Symbol: Rr });
}
Be('asyncIterator'),
  Be('hasInstance'),
  Be('isConcatSpreadable'),
  Be('iterator'),
  Be('match'),
  Be('matchAll'),
  Be('replace'),
  Be('search'),
  Be('species'),
  Be('split'),
  Be('toPrimitive'),
  Be('toStringTag'),
  Be('unscopables');
var Pr,
  Fr = {};
Pr = !T(function () {
  function t() {}
  return (
    (t.prototype.constructor = null),
    Object.getPrototypeOf(new t()) !== t.prototype
  );
});
var Nr = Ft('IE_PROTO'),
  Ur = Object.prototype;
Fr = Pr
  ? Object.getPrototypeOf
  : function (t) {
      return (
        (t = st(t)),
        ft(t, Nr)
          ? t[Nr]
          : 'function' == typeof t.constructor && t instanceof t.constructor
          ? t.constructor.prototype
          : t instanceof Object
          ? Ur
          : null
      );
    };
var Br,
  Cr = {};
(Br = function (t) {
  if (!z(t) && null !== t)
    throw TypeError("Can't set " + String(t) + ' as a prototype');
  return t;
}),
  (Cr =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var t,
            e = !1,
            r = {};
          try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(r, []),
              (e = r instanceof Array);
          } catch (t) {}
          return function (r, n) {
            return St(r), Br(n), e ? t.call(r, n) : (r.__proto__ = n), r;
          };
        })()
      : void 0));
var $r,
  Dr,
  qr = {};
qr = {};
var zr = ot('iterator'),
  Wr = Array.prototype;
Dr = function (t) {
  return void 0 !== t && (qr.Array === t || Wr[zr] === t);
};
var Yr,
  Hr,
  Vr = {},
  Gr = {};
(Gr[ot('toStringTag')] = 'z'), (Hr = '[object z]' === String(Gr));
var Jr = ot('toStringTag'),
  Xr =
    'Arguments' ==
    N(
      (function () {
        return arguments;
      })()
    );
Vr = Hr
  ? N
  : function (t) {
      var e, r, n;
      return void 0 === t
        ? 'Undefined'
        : null === t
        ? 'Null'
        : 'string' ==
          typeof (r = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), Jr))
        ? r
        : Xr
        ? N(e)
        : 'Object' == (n = N(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : n;
    };
var Kr = ot('iterator');
Yr = function (t) {
  if (null != t) return t[Kr] || t['@@iterator'] || qr[Vr(t)];
};
var Zr;
Zr = function (t) {
  var e = t.return;
  if (void 0 !== e) return St(e.call(t)).value;
};
var Qr = function (t, e) {
  (this.stopped = t), (this.result = e);
};
$r = function (t, e, r) {
  var n,
    o,
    i,
    a,
    u,
    c,
    s,
    f = r && r.that,
    l = !(!r || !r.AS_ENTRIES),
    h = !(!r || !r.IS_ITERATOR),
    p = !(!r || !r.INTERRUPTED),
    d = Ye(e, f, 1 + l + p),
    v = function (t) {
      return n && Zr(n), new Qr(!0, t);
    },
    g = function (t) {
      return l
        ? (St(t), p ? d(t[0], t[1], v) : d(t[0], t[1]))
        : p
        ? d(t, v)
        : d(t);
    };
  if (h) n = t;
  else {
    if ('function' != typeof (o = Yr(t)))
      throw TypeError('Target is not iterable');
    if (Dr(o)) {
      for (i = 0, a = te(t.length); a > i; i++)
        if ((u = g(t[i])) && u instanceof Qr) return u;
      return new Qr(!1);
    }
    n = o.call(t);
  }
  for (c = n.next; !(s = c.call(n)).done; ) {
    try {
      u = g(s.value);
    } catch (t) {
      throw (Zr(n), t);
    }
    if ('object' == typeof u && u && u instanceof Qr) return u;
  }
  return new Qr(!1);
};
var tn = function (t, e) {
  var r = this;
  if (!(r instanceof tn)) return new tn(t, e);
  Cr && (r = Cr(new Error(void 0), Fr(r))),
    void 0 !== e && Ot(r, 'message', Ee(e));
  var n = [];
  return $r(t, n.push, { that: n }), Ot(r, 'errors', n), r;
};
(tn.prototype = Ae(Error.prototype, {
  constructor: P(5, tn),
  message: P(5, ''),
  name: P(5, 'AggregateError'),
})),
  S({ global: !0 }, { AggregateError: tn });
var en;
en = function (t, e, r) {
  var n = D(e);
  n in t ? At(t, n, P(0, r)) : (t[n] = r);
};
var rn,
  nn = ot('species');
rn = function (t) {
  return (
    J >= 51 ||
    !T(function () {
      var e = [];
      return (
        ((e.constructor = {})[nn] = function () {
          return { foo: 1 };
        }),
        1 !== e[t](Boolean).foo
      );
    })
  );
};
var on = ot('isConcatSpreadable'),
  an =
    J >= 51 ||
    !T(function () {
      var t = [];
      return (t[on] = !1), t.concat()[0] !== t;
    }),
  un = rn('concat'),
  cn = function (t) {
    if (!z(t)) return !1;
    var e = t[on];
    return void 0 !== e ? !!e : xe(t);
  };
S(
  { target: 'Array', proto: !0, forced: !an || !un },
  {
    concat: function (t) {
      var e,
        r,
        n,
        o,
        i,
        a = st(this),
        u = Ve(a, 0),
        c = 0;
      for (e = -1, n = arguments.length; e < n; e++)
        if (cn((i = -1 === e ? a : arguments[e]))) {
          if (c + (o = te(i.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          for (r = 0; r < o; r++, c++) r in i && en(u, c, i[r]);
        } else {
          if (c >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          en(u, c++, i);
        }
      return (u.length = c), u;
    },
  }
);
var sn = {},
  fn = Math.min;
sn =
  [].copyWithin ||
  function (t, e) {
    var r = st(this),
      n = te(r.length),
      o = ae(t, n),
      i = ae(e, n),
      a = arguments.length > 2 ? arguments[2] : void 0,
      u = fn((void 0 === a ? n : ae(a, n)) - i, n - o),
      c = 1;
    for (
      i < o && o < i + u && ((c = -1), (i += u - 1), (o += u - 1));
      u-- > 0;

    )
      i in r ? (r[o] = r[i]) : delete r[o], (o += c), (i += c);
    return r;
  };
var ln,
  hn = ot('unscopables'),
  pn = Array.prototype;
null == pn[hn] && At(pn, hn, { configurable: !0, value: Ae(null) }),
  (ln = function (t) {
    pn[hn][t] = !0;
  }),
  S({ target: 'Array', proto: !0 }, { copyWithin: sn }),
  ln('copyWithin');
var dn,
  vn = We.every,
  gn = (dn = function (t, e) {
    var r = [][t];
    return (
      !!r &&
      T(function () {
        r.call(
          null,
          e ||
            function () {
              throw 1;
            },
          1
        );
      })
    );
  })('every');
S(
  { target: 'Array', proto: !0, forced: !gn },
  {
    every: function (t) {
      return vn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var yn;
S(
  { target: 'Array', proto: !0 },
  {
    fill: (yn = function (t) {
      for (
        var e = st(this),
          r = te(e.length),
          n = arguments.length,
          o = ae(n > 1 ? arguments[1] : void 0, r),
          i = n > 2 ? arguments[2] : void 0,
          a = void 0 === i ? r : ae(i, r);
        a > o;

      )
        e[o++] = t;
      return e;
    }),
  }
),
  ln('fill');
var mn = We.filter,
  bn = rn('filter');
S(
  { target: 'Array', proto: !0, forced: !bn },
  {
    filter: function (t) {
      return mn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var wn = We.find,
  xn = !0;
'find' in [] &&
  Array(1).find(function () {
    xn = !1;
  }),
  S(
    { target: 'Array', proto: !0, forced: xn },
    {
      find: function (t) {
        return wn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  ln('find');
var En = We.findIndex,
  An = !0;
'findIndex' in [] &&
  Array(1).findIndex(function () {
    An = !1;
  }),
  S(
    { target: 'Array', proto: !0, forced: An },
    {
      findIndex: function (t) {
        return En(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  ln('findIndex');
var Sn = {},
  _n = function (t, e, r, n, o, i, a, u) {
    for (var c, s = o, f = 0, l = !!a && Ye(a, u, 3); f < n; ) {
      if (f in r) {
        if (((c = l ? l(r[f], f, e) : r[f]), i > 0 && xe(c)))
          s = _n(t, e, c, te(c.length), s, i - 1) - 1;
        else {
          if (s >= 9007199254740991)
            throw TypeError('Exceed the acceptable array length');
          t[s] = c;
        }
        s++;
      }
      f++;
    }
    return s;
  };
(Sn = _n),
  S(
    { target: 'Array', proto: !0 },
    {
      flat: function () {
        var t = arguments.length ? arguments[0] : void 0,
          e = st(this),
          r = te(e.length),
          n = Ve(e, 0);
        return (n.length = Sn(n, e, e, r, 0, void 0 === t ? 1 : ee(t))), n;
      },
    }
  ),
  S(
    { target: 'Array', proto: !0 },
    {
      flatMap: function (t) {
        var e,
          r = st(this),
          n = te(r.length);
        return (
          He(t),
          ((e = Ve(r, 0)).length = Sn(
            e,
            r,
            r,
            n,
            0,
            1,
            t,
            arguments.length > 1 ? arguments[1] : void 0
          )),
          e
        );
      },
    }
  );
var kn,
  On = We.forEach,
  Tn = dn('forEach');
S(
  {
    target: 'Array',
    proto: !0,
    forced:
      [].forEach !=
      (kn = Tn
        ? [].forEach
        : function (t) {
            return On(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }),
  },
  { forEach: kn }
);
var Rn, In;
(In = function (t, e, r, n) {
  try {
    return n ? e(St(r)[0], r[1]) : e(r);
  } catch (e) {
    throw (Zr(t), e);
  }
}),
  (Rn = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u = st(t),
      c = 'function' == typeof this ? this : Array,
      s = arguments.length,
      f = s > 1 ? arguments[1] : void 0,
      l = void 0 !== f,
      h = Yr(u),
      p = 0;
    if (
      (l && (f = Ye(f, s > 2 ? arguments[2] : void 0, 2)),
      null == h || (c == Array && Dr(h)))
    )
      for (r = new c((e = te(u.length))); e > p; p++)
        (a = l ? f(u[p], p) : u[p]), en(r, p, a);
    else
      for (i = (o = h.call(u)).next, r = new c(); !(n = i.call(o)).done; p++)
        (a = l ? In(o, f, [n.value, p], !0) : n.value), en(r, p, a);
    return (r.length = p), r;
  });
var Mn,
  jn = ot('iterator'),
  Ln = !1;
try {
  var Pn = 0,
    Fn = {
      next: function () {
        return { done: !!Pn++ };
      },
      return: function () {
        Ln = !0;
      },
    };
  (Fn[jn] = function () {
    return this;
  }),
    Array.from(Fn, function () {
      throw 2;
    });
} catch (t) {}
var Nn = !(Mn = function (t, e) {
  if (!e && !Ln) return !1;
  var r = !1;
  try {
    var n = {};
    (n[jn] = function () {
      return {
        next: function () {
          return { done: (r = !0) };
        },
      };
    }),
      t(n);
  } catch (t) {}
  return r;
})(function (t) {
  Array.from(t);
});
S({ target: 'Array', stat: !0, forced: Nn }, { from: Rn });
var Un = Qt.includes;
S(
  { target: 'Array', proto: !0 },
  {
    includes: function (t) {
      return Un(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  ln('includes');
var Bn = Qt.indexOf,
  Cn = [].indexOf,
  $n = !!Cn && 1 / [1].indexOf(1, -0) < 0,
  Dn = dn('indexOf');
S(
  { target: 'Array', proto: !0, forced: $n || !Dn },
  {
    indexOf: function (t) {
      return $n
        ? Cn.apply(this, arguments) || 0
        : Bn(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  S({ target: 'Array', stat: !0 }, { isArray: xe });
var qn,
  zn,
  Wn,
  Yn,
  Hn,
  Vn,
  Gn,
  Jn = ot('iterator'),
  Xn = !1;
[].keys &&
  ('next' in (Gn = [].keys())
    ? (Vn = Fr(Fr(Gn))) !== Object.prototype && (Hn = Vn)
    : (Xn = !0));
var Kn =
  null == Hn ||
  T(function () {
    var t = {};
    return Hn[Jn].call(t) !== t;
  });
Kn && (Hn = {}),
  ft(Hn, Jn) ||
    Ot(Hn, Jn, function () {
      return this;
    });
var Zn = (Yn = { IteratorPrototype: Hn, BUGGY_SAFARI_ITERATORS: Xn })
    .IteratorPrototype,
  Qn = function () {
    return this;
  };
Wn = function (t, e, r) {
  var n = e + ' Iterator';
  return (
    (t.prototype = Ae(Zn, { next: P(1, r) })), De(t, n, !1), (qr[n] = Qn), t
  );
};
var to = Yn.IteratorPrototype,
  eo = Yn.BUGGY_SAFARI_ITERATORS,
  ro = ot('iterator'),
  no = function () {
    return this;
  };
zn = function (t, e, r, n, o, i, a) {
  Wn(r, e, n);
  var u,
    c,
    s,
    f = function (t) {
      if (t === o && v) return v;
      if (!eo && t in p) return p[t];
      switch (t) {
        case 'keys':
        case 'values':
        case 'entries':
          return function () {
            return new r(this, t);
          };
      }
      return function () {
        return new r(this);
      };
    },
    l = e + ' Iterator',
    h = !1,
    p = t.prototype,
    d = p[ro] || p['@@iterator'] || (o && p[o]),
    v = (!eo && d) || f(o),
    g = ('Array' == e && p.entries) || d;
  if (
    (g &&
      ((u = Fr(g.call(new t()))),
      to !== Object.prototype &&
        u.next &&
        (Fr(u) !== to &&
          (Cr ? Cr(u, to) : 'function' != typeof u[ro] && Ot(u, ro, no)),
        De(u, l, !0))),
    'values' == o &&
      d &&
      'values' !== d.name &&
      ((h = !0),
      (v = function () {
        return d.call(this);
      })),
    p[ro] !== v && Ot(p, ro, v),
    (qr[e] = v),
    o &&
      ((c = {
        values: f('values'),
        keys: i ? v : f('keys'),
        entries: f('entries'),
      }),
      a))
  )
    for (s in c)
      eo || h || !(s in p)
        ? Rt(p, s, c[s])
        : S({ target: e, proto: !0, forced: eo || h }, c);
  return c;
};
var oo = jt.set,
  io = jt.getterFor('Array Iterator');
(qn = zn(
  Array,
  'Array',
  function (t, e) {
    oo(this, { type: 'Array Iterator', target: F(t), index: 0, kind: e });
  },
  function () {
    var t = io(this),
      e = t.target,
      r = t.kind,
      n = t.index++;
    return !e || n >= e.length
      ? ((t.target = void 0), { value: void 0, done: !0 })
      : 'keys' == r
      ? { value: n, done: !1 }
      : 'values' == r
      ? { value: e[n], done: !1 }
      : { value: [n, e[n]], done: !1 };
  },
  'values'
)),
  (qr.Arguments = qr.Array),
  ln('keys'),
  ln('values'),
  ln('entries');
var ao = [].join,
  uo = U != Object,
  co = dn('join', ',');
S(
  { target: 'Array', proto: !0, forced: uo || !co },
  {
    join: function (t) {
      return ao.call(F(this), void 0 === t ? ',' : t);
    },
  }
);
var so = {},
  fo = Math.min,
  lo = [].lastIndexOf,
  ho = !!lo && 1 / [1].lastIndexOf(1, -0) < 0,
  po = dn('lastIndexOf');
S(
  {
    target: 'Array',
    proto: !0,
    forced:
      (so =
        ho || !po
          ? function (t) {
              if (ho) return lo.apply(this, arguments) || 0;
              var e = F(this),
                r = te(e.length),
                n = r - 1;
              for (
                arguments.length > 1 && (n = fo(n, ee(arguments[1]))),
                  n < 0 && (n = r + n);
                n >= 0;
                n--
              )
                if (n in e && e[n] === t) return n || 0;
              return -1;
            }
          : lo) !== [].lastIndexOf,
  },
  { lastIndexOf: so }
);
var vo = We.map,
  go = rn('map');
S(
  { target: 'Array', proto: !0, forced: !go },
  {
    map: function (t) {
      return vo(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var yo = T(function () {
  function t() {}
  return !(Array.of.call(t) instanceof t);
});
S(
  { target: 'Array', stat: !0, forced: yo },
  {
    of: function () {
      for (
        var t = 0,
          e = arguments.length,
          r = new ('function' == typeof this ? this : Array)(e);
        e > t;

      )
        en(r, t, arguments[t++]);
      return (r.length = e), r;
    },
  }
);
var mo,
  bo,
  wo = function (t) {
    return function (e, r, n, o) {
      He(r);
      var i = st(e),
        a = U(i),
        u = te(i.length),
        c = t ? u - 1 : 0,
        s = t ? -1 : 1;
      if (n < 2)
        for (;;) {
          if (c in a) {
            (o = a[c]), (c += s);
            break;
          }
          if (((c += s), t ? c < 0 : u <= c))
            throw TypeError('Reduce of empty array with no initial value');
        }
      for (; t ? c >= 0 : u > c; c += s) c in a && (o = r(o, a[c], c, i));
      return o;
    };
  },
  xo = (mo = { left: wo(!1), right: wo(!0) }).left;
I = i('ek4B6');
bo = 'process' == N(I.process);
var Eo = dn('reduce');
S(
  { target: 'Array', proto: !0, forced: !Eo || (!bo && J > 79 && J < 83) },
  {
    reduce: function (t) {
      return xo(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
var Ao = mo.right,
  So = dn('reduceRight');
S(
  { target: 'Array', proto: !0, forced: !So || (!bo && J > 79 && J < 83) },
  {
    reduceRight: function (t) {
      return Ao(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
var _o = [].reverse,
  ko = [1, 2];
S(
  { target: 'Array', proto: !0, forced: String(ko) === String(ko.reverse()) },
  {
    reverse: function () {
      return xe(this) && (this.length = this.length), _o.call(this);
    },
  }
);
var Oo = rn('slice'),
  To = ot('species'),
  Ro = [].slice,
  Io = Math.max;
S(
  { target: 'Array', proto: !0, forced: !Oo },
  {
    slice: function (t, e) {
      var r,
        n,
        o,
        i = F(this),
        a = te(i.length),
        u = ae(t, a),
        c = ae(void 0 === e ? a : e, a);
      if (
        xe(i) &&
        ('function' != typeof (r = i.constructor) ||
        (r !== Array && !xe(r.prototype))
          ? z(r) && null === (r = r[To]) && (r = void 0)
          : (r = void 0),
        r === Array || void 0 === r)
      )
        return Ro.call(i, u, c);
      for (
        n = new (void 0 === r ? Array : r)(Io(c - u, 0)), o = 0;
        u < c;
        u++, o++
      )
        u in i && en(n, o, i[u]);
      return (n.length = o), n;
    },
  }
);
var Mo = We.some,
  jo = dn('some');
S(
  { target: 'Array', proto: !0, forced: !jo },
  {
    some: function (t) {
      return Mo(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Lo = {},
  Po = Math.floor,
  Fo = function (t, e) {
    var r = t.length,
      n = Po(r / 2);
    return r < 8 ? No(t, e) : Uo(Fo(t.slice(0, n), e), Fo(t.slice(n), e), e);
  },
  No = function (t, e) {
    for (var r, n, o = t.length, i = 1; i < o; ) {
      for (n = i, r = t[i]; n && e(t[n - 1], r) > 0; ) t[n] = t[--n];
      n !== i++ && (t[n] = r);
    }
    return t;
  },
  Uo = function (t, e, r) {
    for (var n = t.length, o = e.length, i = 0, a = 0, u = []; i < n || a < o; )
      i < n && a < o
        ? u.push(r(t[i], e[a]) <= 0 ? t[i++] : e[a++])
        : u.push(i < n ? t[i++] : e[a++]);
    return u;
  };
Lo = Fo;
var Bo,
  Co = X.match(/firefox\/(\d+)/i);
Bo = !!Co && +Co[1];
var $o;
$o = /MSIE|Trident/.test(X);
var Do,
  qo = X.match(/AppleWebKit\/(\d+)\./);
Do = !!qo && +qo[1];
var zo = [],
  Wo = zo.sort,
  Yo = T(function () {
    zo.sort(void 0);
  }),
  Ho = T(function () {
    zo.sort(null);
  }),
  Vo = dn('sort'),
  Go = !T(function () {
    if (J) return J < 70;
    if (!(Bo && Bo > 3)) {
      if ($o) return !0;
      if (Do) return Do < 603;
      var t,
        e,
        r,
        n,
        o = '';
      for (t = 65; t < 76; t++) {
        switch (((e = String.fromCharCode(t)), t)) {
          case 66:
          case 69:
          case 70:
          case 72:
            r = 3;
            break;
          case 68:
          case 71:
            r = 4;
            break;
          default:
            r = 2;
        }
        for (n = 0; n < 47; n++) zo.push({ k: e + n, v: r });
      }
      for (
        zo.sort(function (t, e) {
          return e.v - t.v;
        }),
          n = 0;
        n < zo.length;
        n++
      )
        (e = zo[n].k.charAt(0)), o.charAt(o.length - 1) !== e && (o += e);
      return 'DGBEFHACIJK' !== o;
    }
  });
S(
  { target: 'Array', proto: !0, forced: Yo || !Ho || !Vo || !Go },
  {
    sort: function (t) {
      void 0 !== t && He(t);
      var e = st(this);
      if (Go) return void 0 === t ? Wo.call(e) : Wo.call(e, t);
      var r,
        n,
        o = [],
        i = te(e.length);
      for (n = 0; n < i; n++) n in e && o.push(e[n]);
      for (
        r = (o = Lo(
          o,
          (function (t) {
            return function (e, r) {
              return void 0 === r
                ? -1
                : void 0 === e
                ? 1
                : void 0 !== t
                ? +t(e, r) || 0
                : Ee(e) > Ee(r)
                ? 1
                : -1;
            };
          })(t)
        )).length,
          n = 0;
        n < r;

      )
        e[n] = o[n++];
      for (; n < i; ) delete e[n++];
      return e;
    },
  }
);
var Jo,
  Xo = ot('species');
(Jo = function (t) {
  var e = W(t),
    r = At;
  O &&
    e &&
    !e[Xo] &&
    r(e, Xo, {
      configurable: !0,
      get: function () {
        return this;
      },
    });
})('Array');
var Ko = rn('splice'),
  Zo = Math.max,
  Qo = Math.min;
S(
  { target: 'Array', proto: !0, forced: !Ko },
  {
    splice: function (t, e) {
      var r,
        n,
        o,
        i,
        a,
        u,
        c = st(this),
        s = te(c.length),
        f = ae(t, s),
        l = arguments.length;
      if (
        (0 === l
          ? (r = n = 0)
          : 1 === l
          ? ((r = 0), (n = s - f))
          : ((r = l - 2), (n = Qo(Zo(ee(e), 0), s - f))),
        s + r - n > 9007199254740991)
      )
        throw TypeError('Maximum allowed length exceeded');
      for (o = Ve(c, n), i = 0; i < n; i++) (a = f + i) in c && en(o, i, c[a]);
      if (((o.length = n), r < n)) {
        for (i = f; i < s - n; i++)
          (u = i + r), (a = i + n) in c ? (c[u] = c[a]) : delete c[u];
        for (i = s; i > s - n + r; i--) delete c[i - 1];
      } else if (r > n)
        for (i = s - n; i > f; i--)
          (u = i + r - 1), (a = i + n - 1) in c ? (c[u] = c[a]) : delete c[u];
      for (i = 0; i < r; i++) c[i + f] = arguments[i + 2];
      return (c.length = s - n + r), o;
    },
  }
),
  ln('flat'),
  ln('flatMap');
var ti, ei;
(I = i('ek4B6')), (I = i('ek4B6'));
ei = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView;
var ri;
ri = function (t, e, r) {
  for (var n in e) Rt(t, n, e[n], r);
  return t;
};
var ni;
ni = function (t, e, r) {
  if (!(t instanceof e))
    throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
  return t;
};
var oi;
oi = function (t) {
  if (void 0 === t) return 0;
  var e = ee(t),
    r = te(e);
  if (e !== r) throw RangeError('Wrong length or index');
  return r;
};
var ii,
  ai = Math.abs,
  ui = Math.pow,
  ci = Math.floor,
  si = Math.log,
  fi = Math.LN2;
ii = {
  pack: function (t, e, r) {
    var n,
      o,
      i,
      a = new Array(r),
      u = 8 * r - e - 1,
      c = (1 << u) - 1,
      s = c >> 1,
      f = 23 === e ? ui(2, -24) - ui(2, -77) : 0,
      l = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
      h = 0;
    for (
      (t = ai(t)) != t || t === 1 / 0
        ? ((o = t != t ? 1 : 0), (n = c))
        : ((n = ci(si(t) / fi)),
          t * (i = ui(2, -n)) < 1 && (n--, (i *= 2)),
          (t += n + s >= 1 ? f / i : f * ui(2, 1 - s)) * i >= 2 &&
            (n++, (i /= 2)),
          n + s >= c
            ? ((o = 0), (n = c))
            : n + s >= 1
            ? ((o = (t * i - 1) * ui(2, e)), (n += s))
            : ((o = t * ui(2, s - 1) * ui(2, e)), (n = 0)));
      e >= 8;
      a[h++] = 255 & o, o /= 256, e -= 8
    );
    for (n = (n << e) | o, u += e; u > 0; a[h++] = 255 & n, n /= 256, u -= 8);
    return (a[--h] |= 128 * l), a;
  },
  unpack: function (t, e) {
    var r,
      n = t.length,
      o = 8 * n - e - 1,
      i = (1 << o) - 1,
      a = i >> 1,
      u = o - 7,
      c = n - 1,
      s = t[c--],
      f = 127 & s;
    for (s >>= 7; u > 0; f = 256 * f + t[c], c--, u -= 8);
    for (
      r = f & ((1 << -u) - 1), f >>= -u, u += e;
      u > 0;
      r = 256 * r + t[c], c--, u -= 8
    );
    if (0 === f) f = 1 - a;
    else {
      if (f === i) return r ? NaN : s ? -1 / 0 : 1 / 0;
      (r += ui(2, e)), (f -= a);
    }
    return (s ? -1 : 1) * r * ui(2, f - e);
  },
};
var li = Kt,
  hi = At,
  pi = jt.get,
  di = jt.set,
  vi = I.ArrayBuffer,
  gi = vi,
  yi = I.DataView,
  mi = yi && yi.prototype,
  bi = Object.prototype,
  wi = I.RangeError,
  xi = ii.pack,
  Ei = ii.unpack,
  Ai = function (t) {
    return [255 & t];
  },
  Si = function (t) {
    return [255 & t, (t >> 8) & 255];
  },
  _i = function (t) {
    return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
  },
  ki = function (t) {
    return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
  },
  Oi = function (t) {
    return xi(t, 23, 4);
  },
  Ti = function (t) {
    return xi(t, 52, 8);
  },
  Ri = function (t, e) {
    hi(t.prototype, e, {
      get: function () {
        return pi(this)[e];
      },
    });
  },
  Ii = function (t, e, r, n) {
    var o = oi(r),
      i = pi(t);
    if (o + e > i.byteLength) throw wi('Wrong index');
    var a = pi(i.buffer).bytes,
      u = o + i.byteOffset,
      c = a.slice(u, u + e);
    return n ? c : c.reverse();
  },
  Mi = function (t, e, r, n, o, i) {
    var a = oi(r),
      u = pi(t);
    if (a + e > u.byteLength) throw wi('Wrong index');
    for (
      var c = pi(u.buffer).bytes, s = a + u.byteOffset, f = n(+o), l = 0;
      l < e;
      l++
    )
      c[s + l] = f[i ? l : e - l - 1];
  };
if (ei) {
  if (
    !T(function () {
      vi(1);
    }) ||
    !T(function () {
      new vi(-1);
    }) ||
    T(function () {
      return new vi(), new vi(1.5), new vi(NaN), 'ArrayBuffer' != vi.name;
    })
  ) {
    for (
      var ji,
        Li = ((gi = function (t) {
          return ni(this, gi), new vi(oi(t));
        }).prototype = vi.prototype),
        Pi = li(vi),
        Fi = 0;
      Pi.length > Fi;

    )
      (ji = Pi[Fi++]) in gi || Ot(gi, ji, vi[ji]);
    Li.constructor = gi;
  }
  Cr && Fr(mi) !== bi && Cr(mi, bi);
  var Ni = new yi(new gi(2)),
    Ui = mi.setInt8;
  Ni.setInt8(0, 2147483648),
    Ni.setInt8(1, 2147483649),
    (!Ni.getInt8(0) && Ni.getInt8(1)) ||
      ri(
        mi,
        {
          setInt8: function (t, e) {
            Ui.call(this, t, (e << 24) >> 24);
          },
          setUint8: function (t, e) {
            Ui.call(this, t, (e << 24) >> 24);
          },
        },
        { unsafe: !0 }
      );
} else
  (gi = function (t) {
    ni(this, gi, 'ArrayBuffer');
    var e = oi(t);
    di(this, { bytes: yn.call(new Array(e), 0), byteLength: e }),
      O || (this.byteLength = e);
  }),
    (yi = function (t, e, r) {
      ni(this, yi, 'DataView'), ni(t, gi, 'DataView');
      var n = pi(t).byteLength,
        o = ee(e);
      if (o < 0 || o > n) throw wi('Wrong offset');
      if (o + (r = void 0 === r ? n - o : te(r)) > n) throw wi('Wrong length');
      di(this, { buffer: t, byteLength: r, byteOffset: o }),
        O || ((this.buffer = t), (this.byteLength = r), (this.byteOffset = o));
    }),
    O &&
      (Ri(gi, 'byteLength'),
      Ri(yi, 'buffer'),
      Ri(yi, 'byteLength'),
      Ri(yi, 'byteOffset')),
    ri(yi.prototype, {
      getInt8: function (t) {
        return (Ii(this, 1, t)[0] << 24) >> 24;
      },
      getUint8: function (t) {
        return Ii(this, 1, t)[0];
      },
      getInt16: function (t) {
        var e = Ii(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return (((e[1] << 8) | e[0]) << 16) >> 16;
      },
      getUint16: function (t) {
        var e = Ii(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return (e[1] << 8) | e[0];
      },
      getInt32: function (t) {
        return ki(Ii(this, 4, t, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (t) {
        return (
          ki(Ii(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        );
      },
      getFloat32: function (t) {
        return Ei(
          Ii(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
          23
        );
      },
      getFloat64: function (t) {
        return Ei(
          Ii(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
          52
        );
      },
      setInt8: function (t, e) {
        Mi(this, 1, t, Ai, e);
      },
      setUint8: function (t, e) {
        Mi(this, 1, t, Ai, e);
      },
      setInt16: function (t, e) {
        Mi(this, 2, t, Si, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (t, e) {
        Mi(this, 2, t, Si, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (t, e) {
        Mi(this, 4, t, _i, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (t, e) {
        Mi(this, 4, t, _i, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (t, e) {
        Mi(this, 4, t, Oi, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (t, e) {
        Mi(this, 8, t, Ti, e, arguments.length > 2 ? arguments[2] : void 0);
      },
    });
De(gi, 'ArrayBuffer'), De(yi, 'DataView');
var Bi = (ti = { ArrayBuffer: gi, DataView: yi }).ArrayBuffer,
  Ci = I.ArrayBuffer;
S({ global: !0, forced: Ci !== Bi }, { ArrayBuffer: Bi }), Jo('ArrayBuffer');
I = i('ek4B6');
var $i,
  Di,
  qi,
  zi,
  Wi = At,
  Yi = I.Int8Array,
  Hi = Yi && Yi.prototype,
  Vi = I.Uint8ClampedArray,
  Gi = Vi && Vi.prototype,
  Ji = Yi && Fr(Yi),
  Xi = Hi && Fr(Hi),
  Ki = Object.prototype,
  Zi = Ki.isPrototypeOf,
  Qi = ot('toStringTag'),
  ta = ht('TYPED_ARRAY_TAG'),
  ea = ht('TYPED_ARRAY_CONSTRUCTOR'),
  ra = ei && !!Cr && 'Opera' !== Vr(I.opera),
  na = !1,
  oa = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8,
  },
  ia = { BigInt64Array: 8, BigUint64Array: 8 },
  aa = function (t) {
    if (!z(t)) return !1;
    var e = Vr(t);
    return ft(oa, e) || ft(ia, e);
  };
for (Di in oa) (zi = (qi = I[Di]) && qi.prototype) ? Ot(zi, ea, qi) : (ra = !1);
for (Di in ia) (zi = (qi = I[Di]) && qi.prototype) && Ot(zi, ea, qi);
if (
  (!ra || 'function' != typeof Ji || Ji === Function.prototype) &&
  ((Ji = function () {
    throw TypeError('Incorrect invocation');
  }),
  ra)
)
  for (Di in oa) I[Di] && Cr(I[Di], Ji);
if ((!ra || !Xi || Xi === Ki) && ((Xi = Ji.prototype), ra))
  for (Di in oa) I[Di] && Cr(I[Di].prototype, Xi);
if ((ra && Fr(Gi) !== Xi && Cr(Gi, Xi), O && !ft(Xi, Qi)))
  for (Di in ((na = !0),
  Wi(Xi, Qi, {
    get: function () {
      return z(this) ? this[ta] : void 0;
    },
  }),
  oa))
    I[Di] && Ot(I[Di], ta, Di);
S(
  {
    target: 'ArrayBuffer',
    stat: !0,
    forced: !($i = {
      NATIVE_ARRAY_BUFFER_VIEWS: ra,
      TYPED_ARRAY_CONSTRUCTOR: ea,
      TYPED_ARRAY_TAG: na && ta,
      aTypedArray: function (t) {
        if (aa(t)) return t;
        throw TypeError('Target is not a typed array');
      },
      aTypedArrayConstructor: function (t) {
        if (Cr && !Zi.call(Ji, t))
          throw TypeError('Target is not a typed array constructor');
        return t;
      },
      exportTypedArrayMethod: function (t, e, r) {
        if (O) {
          if (r)
            for (var n in oa) {
              var o = I[n];
              if (o && ft(o.prototype, t))
                try {
                  delete o.prototype[t];
                } catch (t) {}
            }
          (Xi[t] && !r) || Rt(Xi, t, r ? e : (ra && Hi[t]) || e);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var n, o;
        if (O) {
          if (Cr) {
            if (r)
              for (n in oa)
                if ((o = I[n]) && ft(o, t))
                  try {
                    delete o[t];
                  } catch (t) {}
            if (Ji[t] && !r) return;
            try {
              return Rt(Ji, t, r ? e : (ra && Ji[t]) || e);
            } catch (t) {}
          }
          for (n in oa) !(o = I[n]) || (o[t] && !r) || Rt(o, t, e);
        }
      },
      isView: function (t) {
        if (!z(t)) return !1;
        var e = Vr(t);
        return 'DataView' === e || ft(oa, e) || ft(ia, e);
      },
      isTypedArray: aa,
      TypedArray: Ji,
      TypedArrayPrototype: Xi,
    }).NATIVE_ARRAY_BUFFER_VIEWS,
  },
  { isView: $i.isView }
);
var ua,
  ca = ot('species');
ua = function (t, e) {
  var r,
    n = St(t).constructor;
  return void 0 === n || null == (r = St(n)[ca]) ? e : He(r);
};
var sa = ti.ArrayBuffer,
  fa = ti.DataView,
  la = sa.prototype.slice,
  ha = T(function () {
    return !new sa(2).slice(1, void 0).byteLength;
  });
S(
  { target: 'ArrayBuffer', proto: !0, unsafe: !0, forced: ha },
  {
    slice: function (t, e) {
      if (void 0 !== la && void 0 === e) return la.call(St(this), t);
      for (
        var r = St(this).byteLength,
          n = ae(t, r),
          o = ae(void 0 === e ? r : e, r),
          i = new (ua(this, sa))(te(o - n)),
          a = new fa(this),
          u = new fa(i),
          c = 0;
        n < o;

      )
        u.setUint8(c++, a.getUint8(n++));
      return i;
    },
  }
),
  S({ global: !0, forced: !ei }, { DataView: ti.DataView });
var pa = T(function () {
    return 120 !== new Date(16e11).getYear();
  }),
  da = Date.prototype.getFullYear;
S(
  { target: 'Date', proto: !0, forced: pa },
  {
    getYear: function () {
      return da.call(this) - 1900;
    },
  }
),
  S(
    { target: 'Date', stat: !0 },
    {
      now: function () {
        return new Date().getTime();
      },
    }
  );
var va = Date.prototype.getTime,
  ga = Date.prototype.setFullYear;
S(
  { target: 'Date', proto: !0 },
  {
    setYear: function (t) {
      va.call(this);
      var e = ee(t),
        r = 0 <= e && e <= 99 ? e + 1900 : e;
      return ga.call(this, r);
    },
  }
),
  S({ target: 'Date', proto: !0 }, { toGMTString: Date.prototype.toUTCString });
var ya, ma, ba;
ba = function (t) {
  var e = Ee($(this)),
    r = '',
    n = ee(t);
  if (n < 0 || n == 1 / 0) throw RangeError('Wrong number of repetitions');
  for (; n > 0; n >>>= 1, e += e) 1 & n && (r += e);
  return r;
};
var wa = Math.ceil,
  xa = function (t) {
    return function (e, r, n) {
      var o,
        i,
        a = Ee($(e)),
        u = a.length,
        c = void 0 === n ? ' ' : Ee(n),
        s = te(r);
      return s <= u || '' == c
        ? a
        : ((i = ba.call(c, wa((o = s - u) / c.length))).length > o &&
            (i = i.slice(0, o)),
          t ? a + i : i + a);
    };
  },
  Ea = (ma = { start: xa(!1), end: xa(!0) }).start,
  Aa = Math.abs,
  Sa = Date.prototype,
  _a = Sa.getTime,
  ka = Sa.toISOString;
(ya =
  T(function () {
    return '0385-07-25T07:06:39.999Z' != ka.call(new Date(-50000000000001));
  }) ||
  !T(function () {
    ka.call(new Date(NaN));
  })
    ? function () {
        if (!isFinite(_a.call(this))) throw RangeError('Invalid time value');
        var t = this,
          e = t.getUTCFullYear(),
          r = t.getUTCMilliseconds(),
          n = e < 0 ? '-' : e > 9999 ? '+' : '';
        return (
          n +
          Ea(Aa(e), n ? 6 : 4, 0) +
          '-' +
          Ea(t.getUTCMonth() + 1, 2, 0) +
          '-' +
          Ea(t.getUTCDate(), 2, 0) +
          'T' +
          Ea(t.getUTCHours(), 2, 0) +
          ':' +
          Ea(t.getUTCMinutes(), 2, 0) +
          ':' +
          Ea(t.getUTCSeconds(), 2, 0) +
          '.' +
          Ea(r, 3, 0) +
          'Z'
        );
      }
    : ka),
  S(
    { target: 'Date', proto: !0, forced: Date.prototype.toISOString !== ya },
    { toISOString: ya }
  );
var Oa = T(function () {
  return (
    null !== new Date(NaN).toJSON() ||
    1 !==
      Date.prototype.toJSON.call({
        toISOString: function () {
          return 1;
        },
      })
  );
});
S(
  { target: 'Date', proto: !0, forced: Oa },
  {
    toJSON: function (t) {
      var e = st(this),
        r = q(e, 'number');
      return 'number' != typeof r || isFinite(r) ? e.toISOString() : null;
    },
  }
);
var Ta;
Ta = function (t) {
  if ((St(this), 'string' === t || 'default' === t)) t = 'string';
  else if ('number' !== t) throw TypeError('Incorrect hint');
  return nt(this, t);
};
var Ra = ot('toPrimitive'),
  Ia = Date.prototype;
Ra in Ia || Ot(Ia, Ra, Ta);
var Ma = Date.prototype,
  ja = Ma.toString,
  La = Ma.getTime;
'Invalid Date' != String(new Date(NaN)) &&
  Rt(Ma, 'toString', function () {
    var t = La.call(this);
    return t == t ? ja.call(this) : 'Invalid Date';
  });
var Pa = /[\w*+\-./@]/,
  Fa = function (t, e) {
    for (var r = t.toString(16); r.length < e; ) r = '0' + r;
    return r;
  };
S(
  { global: !0 },
  {
    escape: function (t) {
      for (var e, r, n = Ee(t), o = '', i = n.length, a = 0; a < i; )
        (e = n.charAt(a++)),
          Pa.test(e)
            ? (o += e)
            : (o +=
                (r = e.charCodeAt(0)) < 256
                  ? '%' + Fa(r, 2)
                  : '%u' + Fa(r, 4).toUpperCase());
      return o;
    },
  }
);
var Na = {},
  Ua = [].slice,
  Ba = {},
  Ca = function (t, e, r) {
    if (!(e in Ba)) {
      for (var n = [], o = 0; o < e; o++) n[o] = 'a[' + o + ']';
      Ba[e] = Function('C,a', 'return new C(' + n.join(',') + ')');
    }
    return Ba[e](t, r);
  };
(Na =
  Function.bind ||
  function (t) {
    var e = He(this),
      r = Ua.call(arguments, 1),
      n = function () {
        var o = r.concat(Ua.call(arguments));
        return this instanceof n ? Ca(e, o.length, o) : e.apply(t, o);
      };
    return z(e.prototype) && (n.prototype = e.prototype), n;
  }),
  S({ target: 'Function', proto: !0 }, { bind: Na });
var $a = ot('hasInstance'),
  Da = Function.prototype;
$a in Da ||
  At(Da, $a, {
    value: function (t) {
      if ('function' != typeof this || !z(t)) return !1;
      if (!z(this.prototype)) return t instanceof this;
      for (; (t = Fr(t)); ) if (this.prototype === t) return !0;
      return !1;
    },
  });
var qa = At,
  za = Function.prototype,
  Wa = za.toString,
  Ya = /^\s*function ([^ (]*)/;
O &&
  !('name' in za) &&
  qa(za, 'name', {
    configurable: !0,
    get: function () {
      try {
        return Wa.call(this).match(Ya)[1];
      } catch (t) {
        return '';
      }
    },
  });
I = i('ek4B6');
S({ global: !0 }, { globalThis: I });
var Ha = W('JSON', 'stringify'),
  Va = /[\uD800-\uDFFF]/g,
  Ga = /^[\uD800-\uDBFF]$/,
  Ja = /^[\uDC00-\uDFFF]$/,
  Xa = function (t, e, r) {
    var n = r.charAt(e - 1),
      o = r.charAt(e + 1);
    return (Ga.test(t) && !Ja.test(o)) || (Ja.test(t) && !Ga.test(n))
      ? '\\u' + t.charCodeAt(0).toString(16)
      : t;
  },
  Ka = T(function () {
    return (
      '"\\udf06\\ud834"' !== Ha('\udf06\ud834') || '"\\udead"' !== Ha('\udead')
    );
  });
Ha &&
  S(
    { target: 'JSON', stat: !0, forced: Ka },
    {
      stringify: function (t, e, r) {
        var n = Ha.apply(null, arguments);
        return 'string' == typeof n ? n.replace(Va, Xa) : n;
      },
    }
  );
I = i('ek4B6');
De(I.JSON, 'JSON', !0);
I = i('ek4B6');
var Za,
  Qa,
  tu,
  eu = At;
tu = !T(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});
var ru = !1,
  nu = ht('meta'),
  ou = 0,
  iu =
    Object.isExtensible ||
    function () {
      return !0;
    },
  au = function (t) {
    eu(t, nu, { value: { objectID: 'O' + ou++, weakData: {} } });
  },
  uu = (Qa = {
    enable: function () {
      (uu.enable = function () {}), (ru = !0);
      var t = Kt,
        e = [].splice,
        r = {};
      (r[nu] = 1),
        t(r).length &&
          ((Kt = function (r) {
            for (var n = t(r), o = 0, i = n.length; o < i; o++)
              if (n[o] === nu) {
                e.call(n, o, 1);
                break;
              }
            return n;
          }),
          S(
            { target: 'Object', stat: !0, forced: !0 },
            { getOwnPropertyNames: Te }
          ));
    },
    fastKey: function (t, e) {
      if (!z(t))
        return 'symbol' == typeof t
          ? t
          : ('string' == typeof t ? 'S' : 'P') + t;
      if (!ft(t, nu)) {
        if (!iu(t)) return 'F';
        if (!e) return 'E';
        au(t);
      }
      return t[nu].objectID;
    },
    getWeakData: function (t, e) {
      if (!ft(t, nu)) {
        if (!iu(t)) return !0;
        if (!e) return !1;
        au(t);
      }
      return t[nu].weakData;
    },
    onFreeze: function (t) {
      return tu && ru && iu(t) && !ft(t, nu) && au(t), t;
    },
  });
Ut[nu] = !0;
var cu;
(cu = function (t, e, r) {
  var n, o;
  return (
    Cr &&
      'function' == typeof (n = e.constructor) &&
      n !== r &&
      z((o = n.prototype)) &&
      o !== r.prototype &&
      Cr(t, o),
    t
  );
}),
  (Za = function (t, e, r) {
    var n = -1 !== t.indexOf('Map'),
      o = -1 !== t.indexOf('Weak'),
      i = n ? 'set' : 'add',
      a = I[t],
      u = a && a.prototype,
      c = a,
      s = {},
      f = function (t) {
        var e = u[t];
        Rt(
          u,
          t,
          'add' == t
            ? function (t) {
                return e.call(this, 0 === t ? 0 : t), this;
              }
            : 'delete' == t
            ? function (t) {
                return !(o && !z(t)) && e.call(this, 0 === t ? 0 : t);
              }
            : 'get' == t
            ? function (t) {
                return o && !z(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
              }
            : 'has' == t
            ? function (t) {
                return !(o && !z(t)) && e.call(this, 0 === t ? 0 : t);
              }
            : function (t, r) {
                return e.call(this, 0 === t ? 0 : t, r), this;
              }
        );
      };
    if (
      de(
        t,
        'function' != typeof a ||
          !(
            o ||
            (u.forEach &&
              !T(function () {
                new a().entries().next();
              }))
          )
      )
    )
      (c = r.getConstructor(e, t, n, i)), Qa.enable();
    else if (de(t, !0)) {
      var l = new c(),
        h = l[i](o ? {} : -0, 1) != l,
        p = T(function () {
          l.has(1);
        }),
        d = Mn(function (t) {
          new a(t);
        }),
        v =
          !o &&
          T(function () {
            for (var t = new a(), e = 5; e--; ) t[i](e, e);
            return !t.has(-0);
          });
      d ||
        (((c = e(function (e, r) {
          ni(e, c, t);
          var o = cu(new a(), e, c);
          return null != r && $r(r, o[i], { that: o, AS_ENTRIES: n }), o;
        })).prototype = u),
        (u.constructor = c)),
        (p || v) && (f('delete'), f('has'), n && f('get')),
        (v || h) && f(i),
        o && u.clear && delete u.clear;
    }
    return (
      (s[t] = c),
      S({ global: !0, forced: c != a }, s),
      De(c, t),
      o || r.setStrong(c, t, n),
      c
    );
  });
var su,
  fu = At,
  lu = Qa.fastKey,
  hu = jt.set,
  pu = jt.getterFor;
Za(
  'Map',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  (su = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
          ni(t, o, e),
            hu(t, {
              type: e,
              index: Ae(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            O || (t.size = 0),
            null != i && $r(i, t[n], { that: t, AS_ENTRIES: r });
        }),
        i = pu(e),
        a = function (t, e, r) {
          var n,
            o,
            a = i(t),
            c = u(t, e);
          return (
            c
              ? (c.value = r)
              : ((a.last = c = {
                  index: (o = lu(e, !0)),
                  key: e,
                  value: r,
                  previous: (n = a.last),
                  next: void 0,
                  removed: !1,
                }),
                a.first || (a.first = c),
                n && (n.next = c),
                O ? a.size++ : t.size++,
                'F' !== o && (a.index[o] = c)),
            t
          );
        },
        u = function (t, e) {
          var r,
            n = i(t),
            o = lu(e);
          if ('F' !== o) return n.index[o];
          for (r = n.first; r; r = r.next) if (r.key == e) return r;
        };
      return (
        ri(o.prototype, {
          clear: function () {
            for (var t = i(this), e = t.index, r = t.first; r; )
              (r.removed = !0),
                r.previous && (r.previous = r.previous.next = void 0),
                delete e[r.index],
                (r = r.next);
            (t.first = t.last = void 0), O ? (t.size = 0) : (this.size = 0);
          },
          delete: function (t) {
            var e = this,
              r = i(e),
              n = u(e, t);
            if (n) {
              var o = n.next,
                a = n.previous;
              delete r.index[n.index],
                (n.removed = !0),
                a && (a.next = o),
                o && (o.previous = a),
                r.first == n && (r.first = o),
                r.last == n && (r.last = a),
                O ? r.size-- : e.size--;
            }
            return !!n;
          },
          forEach: function (t) {
            for (
              var e,
                r = i(this),
                n = Ye(t, arguments.length > 1 ? arguments[1] : void 0, 3);
              (e = e ? e.next : r.first);

            )
              for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
          },
          has: function (t) {
            return !!u(this, t);
          },
        }),
        ri(
          o.prototype,
          r
            ? {
                get: function (t) {
                  var e = u(this, t);
                  return e && e.value;
                },
                set: function (t, e) {
                  return a(this, 0 === t ? 0 : t, e);
                },
              }
            : {
                add: function (t) {
                  return a(this, (t = 0 === t ? 0 : t), t);
                },
              }
        ),
        O &&
          fu(o.prototype, 'size', {
            get: function () {
              return i(this).size;
            },
          }),
        o
      );
    },
    setStrong: function (t, e, r) {
      var n = e + ' Iterator',
        o = pu(e),
        i = pu(n);
      zn(
        t,
        e,
        function (t, e) {
          hu(this, { type: n, target: t, state: o(t), kind: e, last: void 0 });
        },
        function () {
          for (var t = i(this), e = t.kind, r = t.last; r && r.removed; )
            r = r.previous;
          return t.target && (t.last = r = r ? r.next : t.state.first)
            ? 'keys' == e
              ? { value: r.key, done: !1 }
              : 'values' == e
              ? { value: r.value, done: !1 }
              : { value: [r.key, r.value], done: !1 }
            : ((t.target = void 0), { value: void 0, done: !0 });
        },
        r ? 'entries' : 'values',
        !r,
        !0
      ),
        Jo(e);
    },
  })
);
var du = {},
  vu = Math.log;
du =
  Math.log1p ||
  function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : vu(1 + t);
  };
var gu = Math.acosh,
  yu = Math.log,
  mu = Math.sqrt,
  bu = Math.LN2,
  wu = !gu || 710 != Math.floor(gu(Number.MAX_VALUE)) || gu(1 / 0) != 1 / 0;
S(
  { target: 'Math', stat: !0, forced: wu },
  {
    acosh: function (t) {
      return (t = +t) < 1
        ? NaN
        : t > 94906265.62425156
        ? yu(t) + bu
        : du(t - 1 + mu(t - 1) * mu(t + 1));
    },
  }
);
var xu = Math.asinh,
  Eu = Math.log,
  Au = Math.sqrt;
S(
  { target: 'Math', stat: !0, forced: !(xu && 1 / xu(0) > 0) },
  {
    asinh: function t(e) {
      return isFinite((e = +e)) && 0 != e
        ? e < 0
          ? -t(-e)
          : Eu(e + Au(e * e + 1))
        : e;
    },
  }
);
var Su = Math.atanh,
  _u = Math.log;
S(
  { target: 'Math', stat: !0, forced: !(Su && 1 / Su(-0) < 0) },
  {
    atanh: function (t) {
      return 0 == (t = +t) ? t : _u((1 + t) / (1 - t)) / 2;
    },
  }
);
var ku = {};
ku =
  Math.sign ||
  function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
  };
var Ou = Math.abs,
  Tu = Math.pow;
S(
  { target: 'Math', stat: !0 },
  {
    cbrt: function (t) {
      return ku((t = +t)) * Tu(Ou(t), 1 / 3);
    },
  }
);
Math.floor, Math.log, Math.LOG2E;
S(
  { target: 'Math', stat: !0 },
  {
    clz32: function (t) {
      return 0, 32;
    },
  }
);
var Ru = {},
  Iu = Math.expm1,
  Mu = Math.exp;
Ru =
  !Iu ||
  Iu(10) > 22025.465794806718 ||
  Iu(10) < 22025.465794806718 ||
  -2e-17 != Iu(-2e-17)
    ? function (t) {
        return 0 == (t = +t)
          ? t
          : t > -1e-6 && t < 1e-6
          ? t + (t * t) / 2
          : Mu(t) - 1;
      }
    : Iu;
var ju = Math.cosh,
  Lu = Math.abs,
  Pu = Math.E;
S(
  { target: 'Math', stat: !0, forced: !ju || ju(710) === 1 / 0 },
  {
    cosh: function (t) {
      var e = Ru(Lu(t) - 1) + 1;
      return (e + 1 / (e * Pu * Pu)) * (Pu / 2);
    },
  }
),
  S({ target: 'Math', stat: !0, forced: Ru != Math.expm1 }, { expm1: Ru });
var Fu,
  Nu = Math.abs,
  Uu = Math.pow,
  Bu = Uu(2, -52),
  Cu = Uu(2, -23),
  $u = Uu(2, 127) * (2 - Cu),
  Du = Uu(2, -126);
(Fu =
  Math.fround ||
  function (t) {
    var e,
      r,
      n = Nu(t),
      o = ku(t);
    return n < Du
      ? o * (n / Du / Cu + 1 / Bu - 1 / Bu) * Du * Cu
      : (r = (e = (1 + Cu / Bu) * n) - (e - n)) > $u || r != r
      ? o * (1 / 0)
      : o * r;
  }),
  S({ target: 'Math', stat: !0 }, { fround: Fu });
var qu = Math.hypot,
  zu = Math.abs,
  Wu = Math.sqrt,
  Yu = !!qu && qu(1 / 0, NaN) !== 1 / 0;
S(
  { target: 'Math', stat: !0, forced: Yu },
  {
    hypot: function (t, e) {
      for (var r, n, o = 0, i = 0, a = arguments.length, u = 0; i < a; )
        u < (r = zu(arguments[i++]))
          ? ((o = o * (n = u / r) * n + 1), (u = r))
          : (o += r > 0 ? (n = r / u) * n : r);
      return u === 1 / 0 ? 1 / 0 : u * Wu(o);
    },
  }
);
var Hu = Math.imul,
  Vu = T(function () {
    return -5 != Hu(4294967295, 5) || 2 != Hu.length;
  });
S(
  { target: 'Math', stat: !0, forced: Vu },
  {
    imul: function (t, e) {
      var r = 65535,
        n = +t,
        o = +e,
        i = r & n,
        a = r & o;
      return (
        0 |
        (i * a + ((((r & (n >>> 16)) * a + i * (r & (o >>> 16))) << 16) >>> 0))
      );
    },
  }
);
var Gu = Math.log,
  Ju = Math.LOG10E;
S(
  { target: 'Math', stat: !0 },
  {
    log10: function (t) {
      return Gu(t) * Ju;
    },
  }
),
  S({ target: 'Math', stat: !0 }, { log1p: du });
var Xu = Math.log,
  Ku = Math.LN2;
S(
  { target: 'Math', stat: !0 },
  {
    log2: function (t) {
      return Xu(t) / Ku;
    },
  }
),
  S({ target: 'Math', stat: !0 }, { sign: ku });
var Zu = Math.abs,
  Qu = Math.exp,
  tc = Math.E,
  ec = T(function () {
    return -2e-17 != Math.sinh(-2e-17);
  });
S(
  { target: 'Math', stat: !0, forced: ec },
  {
    sinh: function (t) {
      return Zu((t = +t)) < 1
        ? (Ru(t) - Ru(-t)) / 2
        : (Qu(t - 1) - Qu(-t - 1)) * (tc / 2);
    },
  }
);
var rc = Math.exp;
S(
  { target: 'Math', stat: !0 },
  {
    tanh: function (t) {
      var e = Ru((t = +t)),
        r = Ru(-t);
      return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (rc(t) + rc(-t));
    },
  }
),
  De(Math, 'Math', !0);
var nc = Math.ceil,
  oc = Math.floor;
S(
  { target: 'Math', stat: !0 },
  {
    trunc: function (t) {
      return (t > 0 ? oc : nc)(t);
    },
  }
);
I = i('ek4B6');
var ic,
  ac = Kt,
  uc = k,
  cc = At;
var sc = RegExp(
    '^[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*'
  ),
  fc = RegExp(
    '[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*$'
  ),
  lc = function (t) {
    return function (e) {
      var r = Ee($(e));
      return (
        1 & t && (r = r.replace(sc, '')), 2 & t && (r = r.replace(fc, '')), r
      );
    };
  },
  hc = (ic = { start: lc(1), end: lc(2), trim: lc(3) }).trim,
  pc = I.Number,
  dc = pc.prototype,
  vc = 'Number' == N(Ae(dc)),
  gc = function (t) {
    if (Y(t)) throw TypeError('Cannot convert a Symbol value to a number');
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c,
      s = q(t, 'number');
    if ('string' == typeof s && s.length > 2)
      if (43 === (e = (s = hc(s)).charCodeAt(0)) || 45 === e) {
        if (88 === (r = s.charCodeAt(2)) || 120 === r) return NaN;
      } else if (48 === e) {
        switch (s.charCodeAt(1)) {
          case 66:
          case 98:
            (n = 2), (o = 49);
            break;
          case 79:
          case 111:
            (n = 8), (o = 55);
            break;
          default:
            return +s;
        }
        for (a = (i = s.slice(2)).length, u = 0; u < a; u++)
          if ((c = i.charCodeAt(u)) < 48 || c > o) return NaN;
        return parseInt(i, n);
      }
    return +s;
  };
if (de('Number', !pc(' 0o1') || !pc('0b1') || pc('+0x1'))) {
  for (
    var yc,
      mc = function (t) {
        var e = arguments.length < 1 ? 0 : t,
          r = this;
        return r instanceof mc &&
          (vc
            ? T(function () {
                dc.valueOf.call(r);
              })
            : 'Number' != N(r))
          ? cu(new pc(gc(e)), r, mc)
          : gc(e);
      },
      bc = O
        ? ac(pc)
        : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
            ','
          ),
      wc = 0;
    bc.length > wc;
    wc++
  )
    ft(pc, (yc = bc[wc])) && !ft(mc, yc) && cc(mc, yc, uc(pc, yc));
  (mc.prototype = dc), (dc.constructor = mc), Rt(I, 'Number', mc);
}
S({ target: 'Number', stat: !0 }, { EPSILON: Math.pow(2, -52) });
var xc,
  Ec = (I = i('ek4B6')).isFinite;
(xc =
  Number.isFinite ||
  function (t) {
    return 'number' == typeof t && Ec(t);
  }),
  S({ target: 'Number', stat: !0 }, { isFinite: xc });
var Ac,
  Sc = Math.floor;
S(
  { target: 'Number', stat: !0 },
  {
    isInteger: (Ac = function (t) {
      return !z(t) && isFinite(t) && Sc(t) === t;
    }),
  }
),
  S(
    { target: 'Number', stat: !0 },
    {
      isNaN: function (t) {
        return t != t;
      },
    }
  );
var _c = Math.abs;
S(
  { target: 'Number', stat: !0 },
  {
    isSafeInteger: function (t) {
      return Ac(t) && _c(t) <= 9007199254740991;
    },
  }
),
  S({ target: 'Number', stat: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 }),
  S({ target: 'Number', stat: !0 }, { MIN_SAFE_INTEGER: -9007199254740991 });
I = i('ek4B6');
var kc,
  Oc = ic.trim,
  Tc = I.parseFloat;
(kc =
  1 / Tc('\t\n\v\f\r                　\u2028\u2029\ufeff-0') != -1 / 0
    ? function (t) {
        var e = Oc(Ee(t)),
          r = Tc(e);
        return 0 === r && '-' == e.charAt(0) ? -0 : r;
      }
    : Tc),
  S(
    { target: 'Number', stat: !0, forced: Number.parseFloat != kc },
    { parseFloat: kc }
  );
I = i('ek4B6');
var Rc,
  Ic = ic.trim,
  Mc = I.parseInt,
  jc = /^[+-]?0[Xx]/;
(Rc =
  8 !== Mc('\t\n\v\f\r                　\u2028\u2029\ufeff08') ||
  22 !== Mc('\t\n\v\f\r                　\u2028\u2029\ufeff0x16')
    ? function (t, e) {
        var r = Ic(Ee(t));
        return Mc(r, e >>> 0 || (jc.test(r) ? 16 : 10));
      }
    : Mc),
  S(
    { target: 'Number', stat: !0, forced: Number.parseInt != Rc },
    { parseInt: Rc }
  );
var Lc;
Lc = function (t) {
  if ('number' != typeof t && 'Number' != N(t))
    throw TypeError('Incorrect invocation');
  return +t;
};
var Pc = (1).toFixed,
  Fc = Math.floor,
  Nc = function (t, e, r) {
    return 0 === e ? r : e % 2 == 1 ? Nc(t, e - 1, r * t) : Nc(t * t, e / 2, r);
  },
  Uc = function (t, e, r) {
    for (var n = -1, o = r; ++n < 6; )
      (o += e * t[n]), (t[n] = o % 1e7), (o = Fc(o / 1e7));
  },
  Bc = function (t, e) {
    for (var r = 6, n = 0; --r >= 0; )
      (n += t[r]), (t[r] = Fc(n / e)), (n = (n % e) * 1e7);
  },
  Cc = function (t) {
    for (var e = 6, r = ''; --e >= 0; )
      if ('' !== r || 0 === e || 0 !== t[e]) {
        var n = String(t[e]);
        r = '' === r ? n : r + ba.call('0', 7 - n.length) + n;
      }
    return r;
  },
  $c =
    (Pc &&
      ('0.000' !== (8e-5).toFixed(3) ||
        '1' !== (0.9).toFixed(0) ||
        '1.25' !== (1.255).toFixed(2) ||
        '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
    !T(function () {
      Pc.call({});
    });
S(
  { target: 'Number', proto: !0, forced: $c },
  {
    toFixed: function (t) {
      var e,
        r,
        n,
        o,
        i = Lc(this),
        a = ee(t),
        u = [0, 0, 0, 0, 0, 0],
        c = '',
        s = '0';
      if (a < 0 || a > 20) throw RangeError('Incorrect fraction digits');
      if (i != i) return 'NaN';
      if (i <= -1e21 || i >= 1e21) return String(i);
      if ((i < 0 && ((c = '-'), (i = -i)), i > 1e-21))
        if (
          ((r =
            (e =
              (function (t) {
                for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
                for (; r >= 2; ) (e += 1), (r /= 2);
                return e;
              })(i * Nc(2, 69, 1)) - 69) < 0
              ? i * Nc(2, -e, 1)
              : i / Nc(2, e, 1)),
          (r *= 4503599627370496),
          (e = 52 - e) > 0)
        ) {
          for (Uc(u, 0, r), n = a; n >= 7; ) Uc(u, 1e7, 0), (n -= 7);
          for (Uc(u, Nc(10, n, 1), 0), n = e - 1; n >= 23; )
            Bc(u, 8388608), (n -= 23);
          Bc(u, 1 << n), Uc(u, 1, 1), Bc(u, 2), (s = Cc(u));
        } else Uc(u, 0, r), Uc(u, 1 << -e, 0), (s = Cc(u) + ba.call('0', a));
      return (s =
        a > 0
          ? c +
            ((o = s.length) <= a
              ? '0.' + ba.call('0', a - o) + s
              : s.slice(0, o - a) + '.' + s.slice(o - a))
          : c + s);
    },
  }
);
var Dc = (1).toPrecision,
  qc =
    T(function () {
      return '1' !== Dc.call(1, void 0);
    }) ||
    !T(function () {
      Dc.call({});
    });
S(
  { target: 'Number', proto: !0, forced: qc },
  {
    toPrecision: function (t) {
      return void 0 === t ? Dc.call(Lc(this)) : Dc.call(Lc(this), t);
    },
  }
);
var zc = {},
  Wc = Object.assign,
  Yc = Object.defineProperty;
(zc =
  !Wc ||
  T(function () {
    if (
      O &&
      1 !==
        Wc(
          { b: 1 },
          Wc(
            Yc({}, 'a', {
              enumerable: !0,
              get: function () {
                Yc(this, 'b', { value: 3, enumerable: !1 });
              },
            }),
            { b: 2 }
          )
        ).b
    )
      return !0;
    var t = {},
      e = {},
      r = Symbol(),
      n = 'abcdefghijklmnopqrst';
    return (
      (t[r] = 7),
      n.split('').forEach(function (t) {
        e[t] = t;
      }),
      7 != Wc({}, t)[r] || _e(Wc({}, e)).join('') != n
    );
  })
    ? function (t, e) {
        for (var r = st(t), n = arguments.length, o = 1, i = le, a = R; n > o; )
          for (
            var u,
              c = U(arguments[o++]),
              s = i ? _e(c).concat(i(c)) : _e(c),
              f = s.length,
              l = 0;
            f > l;

          )
            (u = s[l++]), (O && !a.call(c, u)) || (r[u] = c[u]);
        return r;
      }
    : Wc),
  S(
    { target: 'Object', stat: !0, forced: Object.assign !== zc },
    { assign: zc }
  ),
  S({ target: 'Object', stat: !0, sham: !O }, { create: Ae });
var Hc;
I = i('ek4B6');
(Hc = !T(function () {
  if (!(Do && Do < 535)) {
    var t = Math.random();
    __defineSetter__.call(null, t, function () {}), delete I[t];
  }
})),
  O &&
    S(
      { target: 'Object', proto: !0, forced: Hc },
      {
        __defineGetter__: function (t, e) {
          At(st(this), t, { get: He(e), enumerable: !0, configurable: !0 });
        },
      }
    ),
  S(
    { target: 'Object', stat: !0, forced: !O, sham: !O },
    { defineProperties: Se }
  ),
  S(
    { target: 'Object', stat: !0, forced: !O, sham: !O },
    { defineProperty: At }
  ),
  O &&
    S(
      { target: 'Object', proto: !0, forced: Hc },
      {
        __defineSetter__: function (t, e) {
          At(st(this), t, { set: He(e), enumerable: !0, configurable: !0 });
        },
      }
    );
var Vc,
  Gc = R,
  Jc = function (t) {
    return function (e) {
      for (var r, n = F(e), o = _e(n), i = o.length, a = 0, u = []; i > a; )
        (r = o[a++]), (O && !Gc.call(n, r)) || u.push(t ? [r, n[r]] : n[r]);
      return u;
    };
  },
  Xc = (Vc = { entries: Jc(!0), values: Jc(!1) }).entries;
S(
  { target: 'Object', stat: !0 },
  {
    entries: function (t) {
      return Xc(t);
    },
  }
);
var Kc = Qa.onFreeze,
  Zc = Object.freeze,
  Qc = T(function () {
    Zc(1);
  });
S(
  { target: 'Object', stat: !0, forced: Qc, sham: !tu },
  {
    freeze: function (t) {
      return Zc && z(t) ? Zc(Kc(t)) : t;
    },
  }
),
  S(
    { target: 'Object', stat: !0 },
    {
      fromEntries: function (t) {
        var e = {};
        return (
          $r(
            t,
            function (t, r) {
              en(e, t, r);
            },
            { AS_ENTRIES: !0 }
          ),
          e
        );
      },
    }
  );
var ts = k,
  es = T(function () {
    ts(1);
  });
S(
  { target: 'Object', stat: !0, forced: !O || es, sham: !O },
  {
    getOwnPropertyDescriptor: function (t, e) {
      return ts(F(t), e);
    },
  }
),
  S(
    { target: 'Object', stat: !0, sham: !O },
    {
      getOwnPropertyDescriptors: function (t) {
        for (
          var e, r, n = F(t), o = k, i = re(n), a = {}, u = 0;
          i.length > u;

        )
          void 0 !== (r = o(n, (e = i[u++]))) && en(a, e, r);
        return a;
      },
    }
  );
var rs = Te,
  ns = T(function () {
    return !Object.getOwnPropertyNames(1);
  });
S({ target: 'Object', stat: !0, forced: ns }, { getOwnPropertyNames: rs });
var os = T(function () {
  Fr(1);
});
S(
  { target: 'Object', stat: !0, forced: os, sham: !Pr },
  {
    getPrototypeOf: function (t) {
      return Fr(st(t));
    },
  }
);
var is = {};
(is =
  Object.is ||
  function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
  }),
  S({ target: 'Object', stat: !0 }, { is: is });
var as = Object.isExtensible,
  us = T(function () {
    as(1);
  });
S(
  { target: 'Object', stat: !0, forced: us },
  {
    isExtensible: function (t) {
      return !!z(t) && (!as || as(t));
    },
  }
);
var cs = Object.isFrozen,
  ss = T(function () {
    cs(1);
  });
S(
  { target: 'Object', stat: !0, forced: ss },
  {
    isFrozen: function (t) {
      return !z(t) || (!!cs && cs(t));
    },
  }
);
var fs = Object.isSealed,
  ls = T(function () {
    fs(1);
  });
S(
  { target: 'Object', stat: !0, forced: ls },
  {
    isSealed: function (t) {
      return !z(t) || (!!fs && fs(t));
    },
  }
);
var hs = T(function () {
  _e(1);
});
S(
  { target: 'Object', stat: !0, forced: hs },
  {
    keys: function (t) {
      return _e(st(t));
    },
  }
);
var ps = k;
O &&
  S(
    { target: 'Object', proto: !0, forced: Hc },
    {
      __lookupGetter__: function (t) {
        var e,
          r = st(this),
          n = D(t);
        do {
          if ((e = ps(r, n))) return e.get;
        } while ((r = Fr(r)));
      },
    }
  );
var ds = k;
O &&
  S(
    { target: 'Object', proto: !0, forced: Hc },
    {
      __lookupSetter__: function (t) {
        var e,
          r = st(this),
          n = D(t);
        do {
          if ((e = ds(r, n))) return e.set;
        } while ((r = Fr(r)));
      },
    }
  );
var vs = Qa.onFreeze,
  gs = Object.preventExtensions,
  ys = T(function () {
    gs(1);
  });
S(
  { target: 'Object', stat: !0, forced: ys, sham: !tu },
  {
    preventExtensions: function (t) {
      return gs && z(t) ? gs(vs(t)) : t;
    },
  }
);
var ms = Qa.onFreeze,
  bs = Object.seal,
  ws = T(function () {
    bs(1);
  });
S(
  { target: 'Object', stat: !0, forced: ws, sham: !tu },
  {
    seal: function (t) {
      return bs && z(t) ? bs(ms(t)) : t;
    },
  }
),
  S({ target: 'Object', stat: !0 }, { setPrototypeOf: Cr });
var xs;
(xs = Hr
  ? {}.toString
  : function () {
      return '[object ' + Vr(this) + ']';
    }),
  Hr || Rt(Object.prototype, 'toString', xs, { unsafe: !0 });
var Es = Vc.values;
S(
  { target: 'Object', stat: !0 },
  {
    values: function (t) {
      return Es(t);
    },
  }
),
  S({ global: !0, forced: parseFloat != kc }, { parseFloat: kc }),
  S({ global: !0, forced: parseInt != Rc }, { parseInt: Rc });
I = i('ek4B6');
var As = {};
I = i('ek4B6');
As = I.Promise;
var Ss, _s;
I = i('ek4B6');
_s = /(?:ipad|iphone|ipod).*applewebkit/i.test(X);
var ks,
  Os,
  Ts,
  Rs,
  Is = I.setImmediate,
  Ms = I.clearImmediate,
  js = I.process,
  Ls = I.MessageChannel,
  Ps = I.Dispatch,
  Fs = 0,
  Ns = {};
try {
  ks = I.location;
} catch (t) {}
var Us = function (t) {
    if (Ns.hasOwnProperty(t)) {
      var e = Ns[t];
      delete Ns[t], e();
    }
  },
  Bs = function (t) {
    return function () {
      Us(t);
    };
  },
  Cs = function (t) {
    Us(t.data);
  },
  $s = function (t) {
    I.postMessage(String(t), ks.protocol + '//' + ks.host);
  };
(Is && Ms) ||
  ((Is = function (t) {
    for (var e = [], r = arguments.length, n = 1; r > n; )
      e.push(arguments[n++]);
    return (
      (Ns[++Fs] = function () {
        ('function' == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      Os(Fs),
      Fs
    );
  }),
  (Ms = function (t) {
    delete Ns[t];
  }),
  bo
    ? (Os = function (t) {
        js.nextTick(Bs(t));
      })
    : Ps && Ps.now
    ? (Os = function (t) {
        Ps.now(Bs(t));
      })
    : Ls && !_s
    ? ((Rs = (Ts = new Ls()).port2),
      (Ts.port1.onmessage = Cs),
      (Os = Ye(Rs.postMessage, Rs, 1)))
    : I.addEventListener &&
      'function' == typeof postMessage &&
      !I.importScripts &&
      ks &&
      'file:' !== ks.protocol &&
      !T($s)
    ? ((Os = $s), I.addEventListener('message', Cs, !1))
    : (Os =
        'onreadystatechange' in wt('script')
          ? function (t) {
              ke.appendChild(wt('script')).onreadystatechange = function () {
                ke.removeChild(this), Us(t);
              };
            }
          : function (t) {
              setTimeout(Bs(t), 0);
            }));
var Ds,
  qs = (Ss = { set: Is, clear: Ms }).set,
  zs = {},
  Ws = ((I = i('ek4B6')), k),
  Ys = Ss.set;
I = i('ek4B6');
Ds = /ipad|iphone|ipod/i.test(X) && void 0 !== I.Pebble;
var Hs;
Hs = /web0s(?!.*chrome)/i.test(X);
var Vs,
  Gs,
  Js,
  Xs,
  Ks,
  Zs,
  Qs,
  tf,
  ef = I.MutationObserver || I.WebKitMutationObserver,
  rf = I.document,
  nf = I.process,
  of = I.Promise,
  af = Ws(I, 'queueMicrotask'),
  uf = af && af.value;
uf ||
  ((Vs = function () {
    var t, e;
    for (bo && (t = nf.domain) && t.exit(); Gs; ) {
      (e = Gs.fn), (Gs = Gs.next);
      try {
        e();
      } catch (t) {
        throw (Gs ? Xs() : (Js = void 0), t);
      }
    }
    (Js = void 0), t && t.enter();
  }),
  _s || bo || Hs || !ef || !rf
    ? !Ds && of && of.resolve
      ? (((Qs = of.resolve(void 0)).constructor = of),
        (tf = Qs.then),
        (Xs = function () {
          tf.call(Qs, Vs);
        }))
      : (Xs = bo
          ? function () {
              nf.nextTick(Vs);
            }
          : function () {
              Ys.call(I, Vs);
            })
    : ((Ks = !0),
      (Zs = rf.createTextNode('')),
      new ef(Vs).observe(Zs, { characterData: !0 }),
      (Xs = function () {
        Zs.data = Ks = !Ks;
      }))),
  (zs =
    uf ||
    function (t) {
      var e = { fn: t, next: void 0 };
      Js && (Js.next = e), Gs || ((Gs = e), Xs()), (Js = e);
    });
var cf,
  sf,
  ff = function (t) {
    var e, r;
    (this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== r)
        throw TypeError('Bad Promise constructor');
      (e = t), (r = n);
    })),
      (this.resolve = He(e)),
      (this.reject = He(r));
  };
(sf = function (t) {
  return new ff(t);
}),
  (cf = function (t, e) {
    if ((St(t), z(e) && e.constructor === t)) return e;
    var r = sf(t);
    return (0, r.resolve)(e), r.promise;
  });
var lf;
I = i('ek4B6');
lf = function (t, e) {
  var r = I.console;
  r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
};
var hf;
hf = function (t) {
  try {
    return { error: !1, value: t() };
  } catch (t) {
    return { error: !0, value: t };
  }
};
var pf;
pf = 'object' == typeof window;
var df,
  vf,
  gf,
  yf,
  mf = ot('species'),
  bf = jt.get,
  wf = jt.set,
  xf = jt.getterFor('Promise'),
  Ef = As && As.prototype,
  Af = As,
  Sf = Ef,
  _f = I.TypeError,
  kf = I.document,
  Of = I.process,
  Tf = sf,
  Rf = Tf,
  If = !!(kf && kf.createEvent && I.dispatchEvent),
  Mf = 'function' == typeof PromiseRejectionEvent,
  jf = !1,
  Lf = de('Promise', function () {
    var t = It(Af),
      e = t !== String(Af);
    if (!e && 66 === J) return !0;
    if (J >= 51 && /native code/.test(t)) return !1;
    var r = new Af(function (t) {
        t(1);
      }),
      n = function (t) {
        t(
          function () {},
          function () {}
        );
      };
    return (
      ((r.constructor = {})[mf] = n),
      !(jf = r.then(function () {}) instanceof n) || (!e && pf && !Mf)
    );
  }),
  Pf =
    Lf ||
    !Mn(function (t) {
      Af.all(t).catch(function () {});
    }),
  Ff = function (t) {
    var e;
    return !(!z(t) || 'function' != typeof (e = t.then)) && e;
  },
  Nf = function (t, e) {
    if (!t.notified) {
      t.notified = !0;
      var r = t.reactions;
      zs(function () {
        for (var n = t.value, o = 1 == t.state, i = 0; r.length > i; ) {
          var a,
            u,
            c,
            s = r[i++],
            f = o ? s.ok : s.fail,
            l = s.resolve,
            h = s.reject,
            p = s.domain;
          try {
            f
              ? (o || (2 === t.rejection && $f(t), (t.rejection = 1)),
                !0 === f
                  ? (a = n)
                  : (p && p.enter(), (a = f(n)), p && (p.exit(), (c = !0))),
                a === s.promise
                  ? h(_f('Promise-chain cycle'))
                  : (u = Ff(a))
                  ? u.call(a, l, h)
                  : l(a))
              : h(n);
          } catch (t) {
            p && !c && p.exit(), h(t);
          }
        }
        (t.reactions = []), (t.notified = !1), e && !t.rejection && Bf(t);
      });
    }
  },
  Uf = function (t, e, r) {
    var n, o;
    If
      ? (((n = kf.createEvent('Event')).promise = e),
        (n.reason = r),
        n.initEvent(t, !1, !0),
        I.dispatchEvent(n))
      : (n = { promise: e, reason: r }),
      !Mf && (o = I['on' + t])
        ? o(n)
        : 'unhandledrejection' === t && lf('Unhandled promise rejection', r);
  },
  Bf = function (t) {
    qs.call(I, function () {
      var e,
        r = t.facade,
        n = t.value;
      if (
        Cf(t) &&
        ((e = hf(function () {
          bo
            ? Of.emit('unhandledRejection', n, r)
            : Uf('unhandledrejection', r, n);
        })),
        (t.rejection = bo || Cf(t) ? 2 : 1),
        e.error)
      )
        throw e.value;
    });
  },
  Cf = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  $f = function (t) {
    qs.call(I, function () {
      var e = t.facade;
      bo ? Of.emit('rejectionHandled', e) : Uf('rejectionhandled', e, t.value);
    });
  },
  Df = function (t, e, r) {
    return function (n) {
      t(e, n, r);
    };
  },
  qf = function (t, e, r) {
    t.done ||
      ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), Nf(t, !0));
  },
  zf = function (t, e, r) {
    if (!t.done) {
      (t.done = !0), r && (t = r);
      try {
        if (t.facade === e) throw _f("Promise can't be resolved itself");
        var n = Ff(e);
        n
          ? zs(function () {
              var r = { done: !1 };
              try {
                n.call(e, Df(zf, r, t), Df(qf, r, t));
              } catch (e) {
                qf(r, e, t);
              }
            })
          : ((t.value = e), (t.state = 1), Nf(t, !1));
      } catch (e) {
        qf({ done: !1 }, e, t);
      }
    }
  };
if (
  Lf &&
  ((Sf = (Af = function (t) {
    ni(this, Af, 'Promise'), He(t), df.call(this);
    var e = bf(this);
    try {
      t(Df(zf, e), Df(qf, e));
    } catch (t) {
      qf(e, t);
    }
  }).prototype),
  ((df = function (t) {
    wf(this, {
      type: 'Promise',
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    });
  }).prototype = ri(Sf, {
    then: function (t, e) {
      var r = xf(this),
        n = Tf(ua(this, Af));
      return (
        (n.ok = 'function' != typeof t || t),
        (n.fail = 'function' == typeof e && e),
        (n.domain = bo ? Of.domain : void 0),
        (r.parent = !0),
        r.reactions.push(n),
        0 != r.state && Nf(r, !1),
        n.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (vf = function () {
    var t = new df(),
      e = bf(t);
    (this.promise = t), (this.resolve = Df(zf, e)), (this.reject = Df(qf, e));
  }),
  (sf = Tf = function (t) {
    return t === Af || t === gf ? new vf(t) : Rf(t);
  }),
  'function' == typeof As && Ef !== Object.prototype)
) {
  (yf = Ef.then),
    jf ||
      (Rt(
        Ef,
        'then',
        function (t, e) {
          var r = this;
          return new Af(function (t, e) {
            yf.call(r, t, e);
          }).then(t, e);
        },
        { unsafe: !0 }
      ),
      Rt(Ef, 'catch', Sf.catch, { unsafe: !0 }));
  try {
    delete Ef.constructor;
  } catch (t) {}
  Cr && Cr(Ef, Sf);
}
S({ global: !0, wrap: !0, forced: Lf }, { Promise: Af }),
  De(Af, 'Promise', !1),
  Jo('Promise'),
  (gf = W('Promise')),
  S(
    { target: 'Promise', stat: !0, forced: Lf },
    {
      reject: function (t) {
        var e = Tf(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  S(
    { target: 'Promise', stat: !0, forced: Lf },
    {
      resolve: function (t) {
        return cf(this, t);
      },
    }
  ),
  S(
    { target: 'Promise', stat: !0, forced: Pf },
    {
      all: function (t) {
        var e = this,
          r = Tf(e),
          n = r.resolve,
          o = r.reject,
          i = hf(function () {
            var r = He(e.resolve),
              i = [],
              a = 0,
              u = 1;
            $r(t, function (t) {
              var c = a++,
                s = !1;
              i.push(void 0),
                u++,
                r.call(e, t).then(function (t) {
                  s || ((s = !0), (i[c] = t), --u || n(i));
                }, o);
            }),
              --u || n(i);
          });
        return i.error && o(i.value), r.promise;
      },
      race: function (t) {
        var e = this,
          r = Tf(e),
          n = r.reject,
          o = hf(function () {
            var o = He(e.resolve);
            $r(t, function (t) {
              o.call(e, t).then(r.resolve, n);
            });
          });
        return o.error && n(o.value), r.promise;
      },
    }
  ),
  S(
    { target: 'Promise', stat: !0 },
    {
      allSettled: function (t) {
        var e = this,
          r = sf(e),
          n = r.resolve,
          o = r.reject,
          i = hf(function () {
            var r = He(e.resolve),
              o = [],
              i = 0,
              a = 1;
            $r(t, function (t) {
              var u = i++,
                c = !1;
              o.push(void 0),
                a++,
                r.call(e, t).then(
                  function (t) {
                    c ||
                      ((c = !0),
                      (o[u] = { status: 'fulfilled', value: t }),
                      --a || n(o));
                  },
                  function (t) {
                    c ||
                      ((c = !0),
                      (o[u] = { status: 'rejected', reason: t }),
                      --a || n(o));
                  }
                );
            }),
              --a || n(o);
          });
        return i.error && o(i.value), r.promise;
      },
    }
  );
S(
  { target: 'Promise', stat: !0 },
  {
    any: function (t) {
      var e = this,
        r = sf(e),
        n = r.resolve,
        o = r.reject,
        i = hf(function () {
          var r = He(e.resolve),
            i = [],
            a = 0,
            u = 1,
            c = !1;
          $r(t, function (t) {
            var s = a++,
              f = !1;
            i.push(void 0),
              u++,
              r.call(e, t).then(
                function (t) {
                  f || c || ((c = !0), n(t));
                },
                function (t) {
                  f ||
                    c ||
                    ((f = !0),
                    (i[s] = t),
                    --u ||
                      o(
                        new (W('AggregateError'))(i, 'No one promise resolved')
                      ));
                }
              );
          }),
            --u || o(new (W('AggregateError'))(i, 'No one promise resolved'));
        });
      return i.error && o(i.value), r.promise;
    },
  }
);
var Wf =
  !!As &&
  T(function () {
    As.prototype.finally.call({ then: function () {} }, function () {});
  });
if (
  (S(
    { target: 'Promise', proto: !0, real: !0, forced: Wf },
    {
      finally: function (t) {
        var e = ua(this, W('Promise')),
          r = 'function' == typeof t;
        return this.then(
          r
            ? function (r) {
                return cf(e, t()).then(function () {
                  return r;
                });
              }
            : t,
          r
            ? function (r) {
                return cf(e, t()).then(function () {
                  throw r;
                });
              }
            : t
        );
      },
    }
  ),
  'function' == typeof As)
) {
  var Yf = W('Promise').prototype.finally;
  As.prototype.finally !== Yf &&
    Rt(As.prototype, 'finally', Yf, { unsafe: !0 });
}
var Hf = W('Reflect', 'apply'),
  Vf = Function.apply,
  Gf = !T(function () {
    Hf(function () {});
  });
S(
  { target: 'Reflect', stat: !0, forced: Gf },
  {
    apply: function (t, e, r) {
      return He(t), St(r), Hf ? Hf(t, e, r) : Vf.call(t, e, r);
    },
  }
);
var Jf = W('Reflect', 'construct'),
  Xf = T(function () {
    function t() {}
    return !(Jf(function () {}, [], t) instanceof t);
  }),
  Kf = !T(function () {
    Jf(function () {});
  }),
  Zf = Xf || Kf;
S(
  { target: 'Reflect', stat: !0, forced: Zf, sham: Zf },
  {
    construct: function (t, e) {
      He(t), St(e);
      var r = arguments.length < 3 ? t : He(arguments[2]);
      if (Kf && !Xf) return Jf(t, e, r);
      if (t == r) {
        switch (e.length) {
          case 0:
            return new t();
          case 1:
            return new t(e[0]);
          case 2:
            return new t(e[0], e[1]);
          case 3:
            return new t(e[0], e[1], e[2]);
          case 4:
            return new t(e[0], e[1], e[2], e[3]);
        }
        var n = [null];
        return n.push.apply(n, e), new (Na.apply(t, n))();
      }
      var o = r.prototype,
        i = Ae(z(o) ? o : Object.prototype),
        a = Function.apply.call(t, i, e);
      return z(a) ? a : i;
    },
  }
);
var Qf = T(function () {
  Reflect.defineProperty(At({}, 1, { value: 1 }), 1, { value: 2 });
});
S(
  { target: 'Reflect', stat: !0, forced: Qf, sham: !O },
  {
    defineProperty: function (t, e, r) {
      St(t);
      var n = D(e);
      St(r);
      try {
        return At(t, n, r), !0;
      } catch (t) {
        return !1;
      }
    },
  }
);
var tl = k;
S(
  { target: 'Reflect', stat: !0 },
  {
    deleteProperty: function (t, e) {
      var r = tl(St(t), e);
      return !(r && !r.configurable) && delete t[e];
    },
  }
),
  S(
    { target: 'Reflect', stat: !0 },
    {
      get: function t(e, r) {
        var n,
          o,
          i = arguments.length < 3 ? e : arguments[2];
        return St(e) === i
          ? e[r]
          : (n = k(e, r))
          ? ft(n, 'value')
            ? n.value
            : void 0 === n.get
            ? void 0
            : n.get.call(i)
          : z((o = Fr(e)))
          ? t(o, r, i)
          : void 0;
      },
    }
  ),
  S(
    { target: 'Reflect', stat: !0, sham: !O },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return k(St(t), e);
      },
    }
  ),
  S(
    { target: 'Reflect', stat: !0, sham: !Pr },
    {
      getPrototypeOf: function (t) {
        return Fr(St(t));
      },
    }
  ),
  S(
    { target: 'Reflect', stat: !0 },
    {
      has: function (t, e) {
        return e in t;
      },
    }
  );
var el = Object.isExtensible;
S(
  { target: 'Reflect', stat: !0 },
  {
    isExtensible: function (t) {
      return St(t), !el || el(t);
    },
  }
),
  S({ target: 'Reflect', stat: !0 }, { ownKeys: re }),
  S(
    { target: 'Reflect', stat: !0, sham: !tu },
    {
      preventExtensions: function (t) {
        St(t);
        try {
          var e = W('Object', 'preventExtensions');
          return e && e(t), !0;
        } catch (t) {
          return !1;
        }
      },
    }
  );
var rl = T(function () {
  var t = function () {},
    e = At(new t(), 'a', { configurable: !0 });
  return !1 !== Reflect.set(t.prototype, 'a', 1, e);
});
S(
  { target: 'Reflect', stat: !0, forced: rl },
  {
    set: function t(e, r, n) {
      var o,
        i,
        a = arguments.length < 4 ? e : arguments[3],
        u = k(St(e), r);
      if (!u) {
        if (z((i = Fr(e)))) return t(i, r, n, a);
        u = P(0);
      }
      if (ft(u, 'value')) {
        if (!1 === u.writable || !z(a)) return !1;
        if ((o = k(a, r))) {
          if (o.get || o.set || !1 === o.writable) return !1;
          (o.value = n), At(a, r, o);
        } else At(a, r, P(0, n));
        return !0;
      }
      return void 0 !== u.set && (u.set.call(a, n), !0);
    },
  }
),
  Cr &&
    S(
      { target: 'Reflect', stat: !0 },
      {
        setPrototypeOf: function (t, e) {
          St(t), Br(e);
          try {
            return Cr(t, e), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
I = i('ek4B6');
S({ global: !0 }, { Reflect: {} }), De(I.Reflect, 'Reflect', !0);
I = i('ek4B6');
var nl,
  ol = At,
  il = Kt,
  al = ot('match');
nl = function (t) {
  var e;
  return z(t) && (void 0 !== (e = t[al]) ? !!e : 'RegExp' == N(t));
};
var ul, cl, sl;
ul = function () {
  var t = St(this),
    e = '';
  return (
    t.global && (e += 'g'),
    t.ignoreCase && (e += 'i'),
    t.multiline && (e += 'm'),
    t.dotAll && (e += 's'),
    t.unicode && (e += 'u'),
    t.sticky && (e += 'y'),
    e
  );
};
var fl = (I = i('ek4B6')).RegExp;
(sl = T(function () {
  var t = fl('a', 'y');
  return (t.lastIndex = 2), null != t.exec('abcd');
})),
  (cl = T(function () {
    var t = fl('^r', 'gy');
    return (t.lastIndex = 2), null != t.exec('str');
  }));
var ll,
  hl = jt.enforce,
  pl = (I = i('ek4B6')).RegExp;
ll = T(function () {
  var t = pl('.', 's');
  return !(t.dotAll && t.exec('\n') && 's' === t.flags);
});
var dl,
  vl = (I = i('ek4B6')).RegExp;
dl = T(function () {
  var t = vl('(?<a>b)', 'g');
  return 'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c');
});
var gl = ot('match'),
  yl = I.RegExp,
  ml = yl.prototype,
  bl = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
  wl = /a/g,
  xl = /a/g,
  El = new yl(wl) !== wl,
  Al = sl,
  Sl =
    O &&
    (!El ||
      Al ||
      ll ||
      dl ||
      T(function () {
        return (
          (xl[gl] = !1), yl(wl) != wl || yl(xl) == xl || '/a/i' != yl(wl, 'i')
        );
      }));
if (de('RegExp', Sl)) {
  for (
    var _l = function (t, e) {
        var r,
          n,
          o,
          i,
          a,
          u,
          c = this instanceof _l,
          s = nl(t),
          f = void 0 === e,
          l = [],
          h = t;
        if (!c && s && f && t.constructor === _l) return t;
        if (
          ((s || t instanceof _l) &&
            ((t = t.source), f && (e = ('flags' in h) ? h.flags : ul.call(h))),
          (t = void 0 === t ? '' : Ee(t)),
          (e = void 0 === e ? '' : Ee(e)),
          (h = t),
          ll &&
            ('dotAll' in wl) &&
            (n = !!e && e.indexOf('s') > -1) &&
            (e = e.replace(/s/g, '')),
          (r = e),
          Al &&
            ('sticky' in wl) &&
            (o = !!e && e.indexOf('y') > -1) &&
            (e = e.replace(/y/g, '')),
          dl &&
            ((t = (i = (function (t) {
              for (
                var e,
                  r = t.length,
                  n = 0,
                  o = '',
                  i = [],
                  a = {},
                  u = !1,
                  c = !1,
                  s = 0,
                  f = '';
                n <= r;
                n++
              ) {
                if ('\\' === (e = t.charAt(n))) e += t.charAt(++n);
                else if (']' === e) u = !1;
                else if (!u)
                  switch (!0) {
                    case '[' === e:
                      u = !0;
                      break;
                    case '(' === e:
                      bl.test(t.slice(n + 1)) && ((n += 2), (c = !0)),
                        (o += e),
                        s++;
                      continue;
                    case '>' === e && c:
                      if ('' === f || ft(a, f))
                        throw new SyntaxError('Invalid capture group name');
                      (a[f] = !0), i.push([f, s]), (c = !1), (f = '');
                      continue;
                  }
                c ? (f += e) : (o += e);
              }
              return [o, i];
            })(t))[0]),
            (l = i[1])),
          (a = cu(yl(t, e), c ? this : ml, _l)),
          (n || o || l.length) &&
            ((u = hl(a)),
            n &&
              ((u.dotAll = !0),
              (u.raw = _l(
                (function (t) {
                  for (var e, r = t.length, n = 0, o = '', i = !1; n <= r; n++)
                    '\\' !== (e = t.charAt(n))
                      ? i || '.' !== e
                        ? ('[' === e ? (i = !0) : ']' === e && (i = !1),
                          (o += e))
                        : (o += '[\\s\\S]')
                      : (o += e + t.charAt(++n));
                  return o;
                })(t),
                r
              ))),
            o && (u.sticky = !0),
            l.length && (u.groups = l)),
          t !== h)
        )
          try {
            Ot(a, 'source', '' === h ? '(?:)' : h);
          } catch (t) {}
        return a;
      },
      kl = function (t) {
        (t in _l) ||
          ol(_l, t, {
            configurable: !0,
            get: function () {
              return yl[t];
            },
            set: function (e) {
              yl[t] = e;
            },
          });
      },
      Ol = il(yl),
      Tl = 0;
    Ol.length > Tl;

  )
    kl(Ol[Tl++]);
  (ml.constructor = _l), (_l.prototype = ml), Rt(I, 'RegExp', _l);
}
Jo('RegExp');
var Rl = At,
  Il = jt.get,
  Ml = RegExp.prototype;
O &&
  ll &&
  Rl(Ml, 'dotAll', {
    configurable: !0,
    get: function () {
      if (this !== Ml) {
        if (this instanceof RegExp) return !!Il(this).dotAll;
        throw TypeError('Incompatible receiver, RegExp required');
      }
    },
  });
var jl,
  Ll,
  Pl = {},
  Fl = jt.get,
  Nl = RegExp.prototype.exec,
  Ul = it('native-string-replace', String.prototype.replace),
  Bl = Nl,
  Cl =
    ((jl = /a/),
    (Ll = /b*/g),
    Nl.call(jl, 'a'),
    Nl.call(Ll, 'a'),
    0 !== jl.lastIndex || 0 !== Ll.lastIndex),
  $l = sl || cl,
  Dl = void 0 !== /()??/.exec('')[1];
(Cl || Dl || $l || ll || dl) &&
  (Bl = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c = this,
      s = Fl(c),
      f = Ee(t),
      l = s.raw;
    if (l)
      return (
        (l.lastIndex = c.lastIndex),
        (e = Bl.call(l, f)),
        (c.lastIndex = l.lastIndex),
        e
      );
    var h = s.groups,
      p = $l && c.sticky,
      d = ul.call(c),
      v = c.source,
      g = 0,
      y = f;
    if (
      (p &&
        (-1 === (d = d.replace('y', '')).indexOf('g') && (d += 'g'),
        (y = f.slice(c.lastIndex)),
        c.lastIndex > 0 &&
          (!c.multiline ||
            (c.multiline && '\n' !== f.charAt(c.lastIndex - 1))) &&
          ((v = '(?: ' + v + ')'), (y = ' ' + y), g++),
        (r = new RegExp('^(?:' + v + ')', d))),
      Dl && (r = new RegExp('^' + v + '$(?!\\s)', d)),
      Cl && (n = c.lastIndex),
      (o = Nl.call(p ? r : c, y)),
      p
        ? o
          ? ((o.input = o.input.slice(g)),
            (o[0] = o[0].slice(g)),
            (o.index = c.lastIndex),
            (c.lastIndex += o[0].length))
          : (c.lastIndex = 0)
        : Cl && o && (c.lastIndex = c.global ? o.index + o[0].length : n),
      Dl &&
        o &&
        o.length > 1 &&
        Ul.call(o[0], r, function () {
          for (i = 1; i < arguments.length - 2; i++)
            void 0 === arguments[i] && (o[i] = void 0);
        }),
      o && h)
    )
      for (o.groups = a = Ae(null), i = 0; i < h.length; i++)
        a[(u = h[i])[0]] = o[u[1]];
    return o;
  }),
  S(
    { target: 'RegExp', proto: !0, forced: /./.exec !== (Pl = Bl) },
    { exec: Pl }
  ),
  O &&
    T(function () {
      return (
        'sy' !==
        Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({
          dotAll: !0,
          sticky: !0,
        })
      );
    }) &&
    At(RegExp.prototype, 'flags', { configurable: !0, get: ul });
var ql = sl,
  zl = At,
  Wl = jt.get,
  Yl = RegExp.prototype;
O &&
  ql &&
  zl(Yl, 'sticky', {
    configurable: !0,
    get: function () {
      if (this !== Yl) {
        if (this instanceof RegExp) return !!Wl(this).sticky;
        throw TypeError('Incompatible receiver, RegExp required');
      }
    },
  });
var Hl,
  Vl,
  Gl =
    ((Hl = !1),
    ((Vl = /[ac]/).exec = function () {
      return (Hl = !0), /./.exec.apply(this, arguments);
    }),
    !0 === Vl.test('abc') && Hl),
  Jl = /./.test;
S(
  { target: 'RegExp', proto: !0, forced: !Gl },
  {
    test: function (t) {
      if ('function' != typeof this.exec) return Jl.call(this, t);
      var e = this.exec(t);
      if (null !== e && !z(e))
        throw new Error(
          'RegExp exec method returned something other than an Object or null'
        );
      return !!e;
    },
  }
);
var Xl = RegExp.prototype,
  Kl = Xl.toString,
  Zl = T(function () {
    return '/a/b' != Kl.call({ source: 'a', flags: 'b' });
  }),
  Ql = 'toString' != Kl.name;
(Zl || Ql) &&
  Rt(
    RegExp.prototype,
    'toString',
    function () {
      var t = St(this),
        e = Ee(t.source),
        r = t.flags;
      return (
        '/' +
        e +
        '/' +
        Ee(
          void 0 === r && t instanceof RegExp && !('flags' in Xl)
            ? ul.call(t)
            : r
        )
      );
    },
    { unsafe: !0 }
  );
Za(
  'Set',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  su
);
var th,
  eh = function (t) {
    return function (e, r) {
      var n,
        o,
        i = Ee($(e)),
        a = ee(r),
        u = i.length;
      return a < 0 || a >= u
        ? t
          ? ''
          : void 0
        : (n = i.charCodeAt(a)) < 55296 ||
          n > 56319 ||
          a + 1 === u ||
          (o = i.charCodeAt(a + 1)) < 56320 ||
          o > 57343
        ? t
          ? i.charAt(a)
          : n
        : t
        ? i.slice(a, a + 2)
        : o - 56320 + ((n - 55296) << 10) + 65536;
    };
  },
  rh = (th = { codeAt: eh(!1), charAt: eh(!0) }).codeAt;
S(
  { target: 'String', proto: !0 },
  {
    codePointAt: function (t) {
      return rh(this, t);
    },
  }
);
var nh,
  oh = k;
nh = function (t) {
  if (nl(t)) throw TypeError("The method doesn't accept regular expressions");
  return t;
};
var ih,
  ah = ot('match');
ih = function (t) {
  var e = /./;
  try {
    '/./'[t](e);
  } catch (r) {
    try {
      return (e[ah] = !1), '/./'[t](e);
    } catch (t) {}
  }
  return !1;
};
var uh,
  ch = ''.endsWith,
  sh = Math.min,
  fh = ih('endsWith'),
  lh = !(fh || ((uh = oh(String.prototype, 'endsWith')), !uh || uh.writable));
S(
  { target: 'String', proto: !0, forced: !lh && !fh },
  {
    endsWith: function (t) {
      var e = Ee($(this));
      nh(t);
      var r = arguments.length > 1 ? arguments[1] : void 0,
        n = te(e.length),
        o = void 0 === r ? n : sh(te(r), n),
        i = Ee(t);
      return ch ? ch.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
);
var hh = String.fromCharCode,
  ph = String.fromCodePoint,
  dh = !!ph && 1 != ph.length;
S(
  { target: 'String', stat: !0, forced: dh },
  {
    fromCodePoint: function (t) {
      for (var e, r = [], n = arguments.length, o = 0; n > o; ) {
        if (((e = +arguments[o++]), ae(e, 1114111) !== e))
          throw RangeError(e + ' is not a valid code point');
        r.push(
          e < 65536
            ? hh(e)
            : hh(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320)
        );
      }
      return r.join('');
    },
  }
),
  S(
    { target: 'String', proto: !0, forced: !ih('includes') },
    {
      includes: function (t) {
        return !!~Ee($(this)).indexOf(
          Ee(nh(t)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
var vh = th.charAt,
  gh = jt.set,
  yh = jt.getterFor('String Iterator');
zn(
  String,
  'String',
  function (t) {
    gh(this, { type: 'String Iterator', string: Ee(t), index: 0 });
  },
  function () {
    var t,
      e = yh(this),
      r = e.string,
      n = e.index;
    return n >= r.length
      ? { value: void 0, done: !0 }
      : ((t = vh(r, n)), (e.index += t.length), { value: t, done: !1 });
  }
);
var mh,
  bh,
  wh = ot('species'),
  xh = RegExp.prototype,
  Eh = th.charAt;
bh = function (t, e, r) {
  return e + (r ? Eh(t, e).length : 1);
};
var Ah;
(Ah = function (t, e) {
  var r = t.exec;
  if ('function' == typeof r) {
    var n = r.call(t, e);
    if ('object' != typeof n)
      throw TypeError(
        'RegExp exec method returned something other than an Object or null'
      );
    return n;
  }
  if ('RegExp' !== N(t))
    throw TypeError('RegExp#exec called on incompatible receiver');
  return Pl.call(t, e);
}),
  (mh = function (t, e, r, n) {
    var o = ot(t),
      i = !T(function () {
        var e = {};
        return (
          (e[o] = function () {
            return 7;
          }),
          7 != ''[t](e)
        );
      }),
      a =
        i &&
        !T(function () {
          var e = !1,
            r = /a/;
          return (
            'split' === t &&
              (((r = {}).constructor = {}),
              (r.constructor[wh] = function () {
                return r;
              }),
              (r.flags = ''),
              (r[o] = /./[o])),
            (r.exec = function () {
              return (e = !0), null;
            }),
            r[o](''),
            !e
          );
        });
    if (!i || !a || r) {
      var u = /./[o],
        c = e(o, ''[t], function (t, e, r, n, o) {
          var a = e.exec;
          return a === Pl || a === xh.exec
            ? i && !o
              ? { done: !0, value: u.call(e, r, n) }
              : { done: !0, value: t.call(r, e, n) }
            : { done: !1 };
        });
      Rt(String.prototype, t, c[0]), Rt(xh, o, c[1]);
    }
    n && Ot(xh[o], 'sham', !0);
  })('match', function (t, e, r) {
    return [
      function (e) {
        var r = $(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](Ee(r));
      },
      function (t) {
        var n = St(this),
          o = Ee(t),
          i = r(e, n, o);
        if (i.done) return i.value;
        if (!n.global) return Ah(n, o);
        var a = n.unicode;
        n.lastIndex = 0;
        for (var u, c = [], s = 0; null !== (u = Ah(n, o)); ) {
          var f = Ee(u[0]);
          (c[s] = f),
            '' === f && (n.lastIndex = bh(o, te(n.lastIndex), a)),
            s++;
        }
        return 0 === s ? null : c;
      },
    ];
  });
var Sh = ot('matchAll'),
  _h = jt.set,
  kh = jt.getterFor('RegExp String Iterator'),
  Oh = RegExp.prototype,
  Th = Oh.exec,
  Rh = ''.matchAll,
  Ih =
    !!Rh &&
    !T(function () {
      'a'.matchAll(/./);
    }),
  Mh = Wn(
    function (t, e, r, n) {
      _h(this, {
        type: 'RegExp String Iterator',
        regexp: t,
        string: e,
        global: r,
        unicode: n,
        done: !1,
      });
    },
    'RegExp String',
    function () {
      var t = kh(this);
      if (t.done) return { value: void 0, done: !0 };
      var e = t.regexp,
        r = t.string,
        n = (function (t, e) {
          var r,
            n = t.exec;
          if ('function' == typeof n) {
            if ('object' != typeof (r = n.call(t, e)))
              throw TypeError('Incorrect exec result');
            return r;
          }
          return Th.call(t, e);
        })(e, r);
      return null === n
        ? { value: void 0, done: (t.done = !0) }
        : t.global
        ? ('' === Ee(n[0]) && (e.lastIndex = bh(r, te(e.lastIndex), t.unicode)),
          { value: n, done: !1 })
        : ((t.done = !0), { value: n, done: !1 });
    }
  ),
  jh = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u = St(this),
      c = Ee(t);
    return (
      (e = ua(u, RegExp)),
      void 0 === (r = u.flags) &&
        u instanceof RegExp &&
        !('flags' in Oh) &&
        (r = ul.call(u)),
      (n = void 0 === r ? '' : Ee(r)),
      (o = new e(e === RegExp ? u.source : u, n)),
      (i = !!~n.indexOf('g')),
      (a = !!~n.indexOf('u')),
      (o.lastIndex = te(u.lastIndex)),
      new Mh(o, c, i, a)
    );
  };
S(
  { target: 'String', proto: !0, forced: Ih },
  {
    matchAll: function (t) {
      var e,
        r,
        n = $(this);
      if (null != t) {
        if (nl(t) && !~Ee($('flags' in Oh ? t.flags : ul.call(t))).indexOf('g'))
          throw TypeError('`.matchAll` does not allow non-global regexes');
        if (Ih) return Rh.apply(n, arguments);
        if (null != (r = t[Sh])) return He(r).call(t, n);
      } else if (Ih) return Rh.apply(n, arguments);
      return (e = Ee(n)), new RegExp(t, 'g')[Sh](e);
    },
  }
),
  Sh in Oh || Ot(Oh, Sh, jh);
var Lh,
  Ph = ma.end;
(Lh = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
  X
)),
  S(
    { target: 'String', proto: !0, forced: Lh },
    {
      padEnd: function (t) {
        return Ph(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
var Fh = ma.start;
S(
  { target: 'String', proto: !0, forced: Lh },
  {
    padStart: function (t) {
      return Fh(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  S(
    { target: 'String', stat: !0 },
    {
      raw: function (t) {
        for (
          var e = F(t.raw),
            r = te(e.length),
            n = arguments.length,
            o = [],
            i = 0;
          r > i;

        )
          o.push(Ee(e[i++])), i < n && o.push(Ee(arguments[i]));
        return o.join('');
      },
    }
  ),
  S({ target: 'String', proto: !0 }, { repeat: ba });
var Nh,
  Uh = Math.floor,
  Bh = ''.replace,
  Ch = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  $h = /\$([$&'`]|\d{1,2})/g;
Nh = function (t, e, r, n, o, i) {
  var a = r + t.length,
    u = n.length,
    c = $h;
  return (
    void 0 !== o && ((o = st(o)), (c = Ch)),
    Bh.call(i, c, function (i, c) {
      var s;
      switch (c.charAt(0)) {
        case '$':
          return '$';
        case '&':
          return t;
        case '`':
          return e.slice(0, r);
        case "'":
          return e.slice(a);
        case '<':
          s = o[c.slice(1, -1)];
          break;
        default:
          var f = +c;
          if (0 === f) return i;
          if (f > u) {
            var l = Uh(f / 10);
            return 0 === l
              ? i
              : l <= u
              ? void 0 === n[l - 1]
                ? c.charAt(1)
                : n[l - 1] + c.charAt(1)
              : i;
          }
          s = n[f - 1];
      }
      return void 0 === s ? '' : s;
    })
  );
};
var Dh = ot('replace'),
  qh = Math.max,
  zh = Math.min,
  Wh = '$0' === 'a'.replace(/./, '$0'),
  Yh = !!/./[Dh] && '' === /./[Dh]('a', '$0');
mh(
  'replace',
  function (t, e, r) {
    var n = Yh ? '$' : '$0';
    return [
      function (t, r) {
        var n = $(this),
          o = null == t ? void 0 : t[Dh];
        return void 0 !== o ? o.call(t, n, r) : e.call(Ee(n), t, r);
      },
      function (t, o) {
        var i = St(this),
          a = Ee(t);
        if (
          'string' == typeof o &&
          -1 === o.indexOf(n) &&
          -1 === o.indexOf('$<')
        ) {
          var u = r(e, i, a, o);
          if (u.done) return u.value;
        }
        var c = 'function' == typeof o;
        c || (o = Ee(o));
        var s = i.global;
        if (s) {
          var f = i.unicode;
          i.lastIndex = 0;
        }
        for (var l = []; ; ) {
          var h = Ah(i, a);
          if (null === h) break;
          if ((l.push(h), !s)) break;
          '' === Ee(h[0]) && (i.lastIndex = bh(a, te(i.lastIndex), f));
        }
        for (var p, d = '', v = 0, g = 0; g < l.length; g++) {
          h = l[g];
          for (
            var y = Ee(h[0]),
              m = qh(zh(ee(h.index), a.length), 0),
              b = [],
              w = 1;
            w < h.length;
            w++
          )
            b.push(void 0 === (p = h[w]) ? p : String(p));
          var x = h.groups;
          if (c) {
            var E = [y].concat(b, m, a);
            void 0 !== x && E.push(x);
            var A = Ee(o.apply(void 0, E));
          } else A = Nh(y, a, m, b, x, o);
          m >= v && ((d += a.slice(v, m) + A), (v = m + y.length));
        }
        return d + a.slice(v);
      },
    ];
  },
  !!T(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: '7' }), t;
      }),
      '7' !== ''.replace(t, '$<a>')
    );
  }) ||
    !Wh ||
    Yh
);
var Hh = ot('replace'),
  Vh = RegExp.prototype,
  Gh = Math.max,
  Jh = function (t, e, r) {
    return r > t.length ? -1 : '' === e ? r : t.indexOf(e, r);
  };
S(
  { target: 'String', proto: !0 },
  {
    replaceAll: function (t, e) {
      var r,
        n,
        o,
        i,
        a,
        u,
        c,
        s = $(this),
        f = 0,
        l = 0,
        h = '';
      if (null != t) {
        if (nl(t) && !~Ee($('flags' in Vh ? t.flags : ul.call(t))).indexOf('g'))
          throw TypeError('`.replaceAll` does not allow non-global regexes');
        if (void 0 !== (r = t[Hh])) return r.call(t, s, e);
      }
      for (
        n = Ee(s),
          o = Ee(t),
          (i = 'function' == typeof e) || (e = Ee(e)),
          a = o.length,
          u = Gh(1, a),
          f = Jh(n, o, 0);
        -1 !== f;

      )
        (c = i ? Ee(e(o, f, n)) : Nh(o, n, f, [], void 0, e)),
          (h += n.slice(l, f) + c),
          (l = f + a),
          (f = Jh(n, o, f + u));
      return l < n.length && (h += n.slice(l)), h;
    },
  }
),
  mh('search', function (t, e, r) {
    return [
      function (e) {
        var r = $(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](Ee(r));
      },
      function (t) {
        var n = St(this),
          o = Ee(t),
          i = r(e, n, o);
        if (i.done) return i.value;
        var a = n.lastIndex;
        is(a, 0) || (n.lastIndex = 0);
        var u = Ah(n, o);
        return (
          is(n.lastIndex, a) || (n.lastIndex = a), null === u ? -1 : u.index
        );
      },
    ];
  });
var Xh = sl,
  Kh = [].push,
  Zh = Math.min;
mh(
  'split',
  function (t, e, r) {
    var n;
    return (
      (n =
        'c' == 'abbc'.split(/(b)*/)[1] ||
        4 != 'test'.split(/(?:)/, -1).length ||
        2 != 'ab'.split(/(?:ab)*/).length ||
        4 != '.'.split(/(.?)(.?)/).length ||
        '.'.split(/()()/).length > 1 ||
        ''.split(/.?/).length
          ? function (t, r) {
              var n = Ee($(this)),
                o = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [n];
              if (!nl(t)) return e.call(n, t, o);
              for (
                var i,
                  a,
                  u,
                  c = [],
                  s =
                    (t.ignoreCase ? 'i' : '') +
                    (t.multiline ? 'm' : '') +
                    (t.unicode ? 'u' : '') +
                    (t.sticky ? 'y' : ''),
                  f = 0,
                  l = new RegExp(t.source, s + 'g');
                (i = Pl.call(l, n)) &&
                !(
                  (a = l.lastIndex) > f &&
                  (c.push(n.slice(f, i.index)),
                  i.length > 1 && i.index < n.length && Kh.apply(c, i.slice(1)),
                  (u = i[0].length),
                  (f = a),
                  c.length >= o)
                );

              )
                l.lastIndex === i.index && l.lastIndex++;
              return (
                f === n.length
                  ? (!u && l.test('')) || c.push('')
                  : c.push(n.slice(f)),
                c.length > o ? c.slice(0, o) : c
              );
            }
          : '0'.split(void 0, 0).length
          ? function (t, r) {
              return void 0 === t && 0 === r ? [] : e.call(this, t, r);
            }
          : e),
      [
        function (e, r) {
          var o = $(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, r) : n.call(Ee(o), e, r);
        },
        function (t, o) {
          var i = St(this),
            a = Ee(t),
            u = r(n, i, a, o, n !== e);
          if (u.done) return u.value;
          var c = ua(i, RegExp),
            s = i.unicode,
            f =
              (i.ignoreCase ? 'i' : '') +
              (i.multiline ? 'm' : '') +
              (i.unicode ? 'u' : '') +
              (Xh ? 'g' : 'y'),
            l = new c(Xh ? '^(?:' + i.source + ')' : i, f),
            h = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === h) return [];
          if (0 === a.length) return null === Ah(l, a) ? [a] : [];
          for (var p = 0, d = 0, v = []; d < a.length; ) {
            l.lastIndex = Xh ? 0 : d;
            var g,
              y = Ah(l, Xh ? a.slice(d) : a);
            if (
              null === y ||
              (g = Zh(te(l.lastIndex + (Xh ? d : 0)), a.length)) === p
            )
              d = bh(a, d, s);
            else {
              if ((v.push(a.slice(p, d)), v.length === h)) return v;
              for (var m = 1; m <= y.length - 1; m++)
                if ((v.push(y[m]), v.length === h)) return v;
              d = p = g;
            }
          }
          return v.push(a.slice(p)), v;
        },
      ]
    );
  },
  !!T(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var r = 'ab'.split(t);
    return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
  }),
  Xh
);
var Qh = k,
  tp = ''.startsWith,
  ep = Math.min,
  rp = ih('startsWith'),
  np =
    !rp &&
    !!(function () {
      var t = Qh(String.prototype, 'startsWith');
      return t && !t.writable;
    })();
S(
  { target: 'String', proto: !0, forced: !np && !rp },
  {
    startsWith: function (t) {
      var e = Ee($(this));
      nh(t);
      var r = te(ep(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        n = Ee(t);
      return tp ? tp.call(e, n, r) : e.slice(r, r + n.length) === n;
    },
  }
);
var op = ''.slice,
  ip = Math.max,
  ap = Math.min;
S(
  { target: 'String', proto: !0 },
  {
    substr: function (t, e) {
      var r,
        n,
        o = Ee($(this)),
        i = o.length,
        a = ee(t);
      return (
        a === 1 / 0 && (a = 0),
        a < 0 && (a = ip(i + a, 0)),
        (r = void 0 === e ? i : ee(e)) <= 0 ||
        r === 1 / 0 ||
        a >= (n = ap(a + r, i))
          ? ''
          : op.call(o, a, n)
      );
    },
  }
);
var up,
  cp = ic.trim;
S(
  {
    target: 'String',
    proto: !0,
    forced: (up = function (t) {
      return T(function () {
        return (
          !!'\t\n\v\f\r                　\u2028\u2029\ufeff'[t]() ||
          '​᠎' != '​᠎'[t]() ||
          '\t\n\v\f\r                　\u2028\u2029\ufeff'[t].name !== t
        );
      });
    })('trim'),
  },
  {
    trim: function () {
      return cp(this);
    },
  }
);
var sp = ic.end,
  fp = up('trimEnd'),
  lp = fp
    ? function () {
        return sp(this);
      }
    : ''.trimEnd;
S({ target: 'String', proto: !0, forced: fp }, { trimEnd: lp, trimRight: lp });
var hp = ic.start,
  pp = up('trimStart'),
  dp = pp
    ? function () {
        return hp(this);
      }
    : ''.trimStart;
S({ target: 'String', proto: !0, forced: pp }, { trimStart: dp, trimLeft: dp });
var vp,
  gp = /"/g;
vp = function (t, e, r, n) {
  var o = Ee($(t)),
    i = '<' + e;
  return (
    '' !== r && (i += ' ' + r + '="' + Ee(n).replace(gp, '&quot;') + '"'),
    i + '>' + o + '</' + e + '>'
  );
};
var yp;
S(
  {
    target: 'String',
    proto: !0,
    forced: (yp = function (t) {
      return T(function () {
        var e = ''[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    })('anchor'),
  },
  {
    anchor: function (t) {
      return vp(this, 'a', 'name', t);
    },
  }
),
  S(
    { target: 'String', proto: !0, forced: yp('big') },
    {
      big: function () {
        return vp(this, 'big', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('blink') },
    {
      blink: function () {
        return vp(this, 'blink', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('bold') },
    {
      bold: function () {
        return vp(this, 'b', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('fixed') },
    {
      fixed: function () {
        return vp(this, 'tt', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('fontcolor') },
    {
      fontcolor: function (t) {
        return vp(this, 'font', 'color', t);
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('fontsize') },
    {
      fontsize: function (t) {
        return vp(this, 'font', 'size', t);
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('italics') },
    {
      italics: function () {
        return vp(this, 'i', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('link') },
    {
      link: function (t) {
        return vp(this, 'a', 'href', t);
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('small') },
    {
      small: function () {
        return vp(this, 'small', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('strike') },
    {
      strike: function () {
        return vp(this, 'strike', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('sub') },
    {
      sub: function () {
        return vp(this, 'sub', '', '');
      },
    }
  ),
  S(
    { target: 'String', proto: !0, forced: yp('sup') },
    {
      sup: function () {
        return vp(this, 'sup', '', '');
      },
    }
  );
var mp,
  bp = {},
  wp = ((I = i('ek4B6')), (I = i('ek4B6')), $i.NATIVE_ARRAY_BUFFER_VIEWS),
  xp = I.ArrayBuffer,
  Ep = I.Int8Array;
mp =
  !wp ||
  !T(function () {
    Ep(1);
  }) ||
  !T(function () {
    new Ep(-1);
  }) ||
  !Mn(function (t) {
    new Ep(), new Ep(null), new Ep(1.5), new Ep(t);
  }, !0) ||
  T(function () {
    return 1 !== new Ep(new xp(2), 1, void 0).length;
  });
var Ap, Sp;
(Sp = function (t) {
  var e = ee(t);
  if (e < 0) throw RangeError("The argument can't be less than 0");
  return e;
}),
  (Ap = function (t, e) {
    var r = Sp(t);
    if (r % e) throw RangeError('Wrong offset');
    return r;
  });
var _p,
  kp = Kt,
  Op = $i.aTypedArrayConstructor;
_p = function (t) {
  var e,
    r,
    n,
    o,
    i,
    a,
    u = st(t),
    c = arguments.length,
    s = c > 1 ? arguments[1] : void 0,
    f = void 0 !== s,
    l = Yr(u);
  if (null != l && !Dr(l))
    for (a = (i = l.call(u)).next, u = []; !(o = a.call(i)).done; )
      u.push(o.value);
  for (
    f && c > 2 && (s = Ye(s, arguments[2], 2)),
      r = te(u.length),
      n = new (Op(this))(r),
      e = 0;
    r > e;
    e++
  )
    n[e] = f ? s(u[e], e) : u[e];
  return n;
};
var Tp = We.forEach,
  Rp = jt.get,
  Ip = jt.set,
  Mp = At,
  jp = k,
  Lp = Math.round,
  Pp = I.RangeError,
  Fp = ti.ArrayBuffer,
  Np = ti.DataView,
  Up = $i.NATIVE_ARRAY_BUFFER_VIEWS,
  Bp = $i.TYPED_ARRAY_CONSTRUCTOR,
  Cp = $i.TYPED_ARRAY_TAG,
  $p = $i.TypedArray,
  Dp = $i.TypedArrayPrototype,
  qp = $i.aTypedArrayConstructor,
  zp = $i.isTypedArray,
  Wp = function (t, e) {
    for (var r = 0, n = e.length, o = new (qp(t))(n); n > r; ) o[r] = e[r++];
    return o;
  },
  Yp = function (t, e) {
    Mp(t, e, {
      get: function () {
        return Rp(this)[e];
      },
    });
  },
  Hp = function (t) {
    var e;
    return (
      t instanceof Fp ||
      'ArrayBuffer' == (e = Vr(t)) ||
      'SharedArrayBuffer' == e
    );
  },
  Vp = function (t, e) {
    return zp(t) && !Y(e) && e in t && Ac(+e) && e >= 0;
  },
  Gp = function (t, e) {
    return (e = D(e)), Vp(t, e) ? P(2, t[e]) : jp(t, e);
  },
  Jp = function (t, e, r) {
    return (
      (e = D(e)),
      !(Vp(t, e) && z(r) && ft(r, 'value')) ||
      ft(r, 'get') ||
      ft(r, 'set') ||
      r.configurable ||
      (ft(r, 'writable') && !r.writable) ||
      (ft(r, 'enumerable') && !r.enumerable)
        ? Mp(t, e, r)
        : ((t[e] = r.value), t)
    );
  };
O
  ? (Up ||
      ((k = Gp),
      (At = Jp),
      Yp(Dp, 'buffer'),
      Yp(Dp, 'byteOffset'),
      Yp(Dp, 'byteLength'),
      Yp(Dp, 'length')),
    S(
      { target: 'Object', stat: !0, forced: !Up },
      { getOwnPropertyDescriptor: Gp, defineProperty: Jp }
    ),
    (bp = function (t, e, r) {
      var n = t.match(/\d+$/)[0] / 8,
        o = t + (r ? 'Clamped' : '') + 'Array',
        i = 'get' + t,
        a = 'set' + t,
        u = I[o],
        c = u,
        s = c && c.prototype,
        f = {},
        l = function (t, e) {
          Mp(t, e, {
            get: function () {
              return (function (t, e) {
                var r = Rp(t);
                return r.view[i](e * n + r.byteOffset, !0);
              })(this, e);
            },
            set: function (t) {
              return (function (t, e, o) {
                var i = Rp(t);
                r && (o = (o = Lp(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o),
                  i.view[a](e * n + i.byteOffset, o, !0);
              })(this, e, t);
            },
            enumerable: !0,
          });
        };
      Up
        ? mp &&
          ((c = e(function (t, e, r, i) {
            return (
              ni(t, c, o),
              cu(
                z(e)
                  ? Hp(e)
                    ? void 0 !== i
                      ? new u(e, Ap(r, n), i)
                      : void 0 !== r
                      ? new u(e, Ap(r, n))
                      : new u(e)
                    : zp(e)
                    ? Wp(c, e)
                    : _p.call(c, e)
                  : new u(oi(e)),
                t,
                c
              )
            );
          })),
          Cr && Cr(c, $p),
          Tp(kp(u), function (t) {
            t in c || Ot(c, t, u[t]);
          }),
          (c.prototype = s))
        : ((c = e(function (t, e, r, i) {
            ni(t, c, o);
            var a,
              u,
              s,
              f = 0,
              h = 0;
            if (z(e)) {
              if (!Hp(e)) return zp(e) ? Wp(c, e) : _p.call(c, e);
              (a = e), (h = Ap(r, n));
              var p = e.byteLength;
              if (void 0 === i) {
                if (p % n) throw Pp('Wrong length');
                if ((u = p - h) < 0) throw Pp('Wrong length');
              } else if ((u = te(i) * n) + h > p) throw Pp('Wrong length');
              s = u / n;
            } else (s = oi(e)), (a = new Fp((u = s * n)));
            for (
              Ip(t, {
                buffer: a,
                byteOffset: h,
                byteLength: u,
                length: s,
                view: new Np(a),
              });
              f < s;

            )
              l(t, f++);
          })),
          Cr && Cr(c, $p),
          (s = c.prototype = Ae(Dp))),
        s.constructor !== c && Ot(s, 'constructor', c),
        Ot(s, Bp, c),
        Cp && Ot(s, Cp, o),
        (f[o] = c),
        S({ global: !0, forced: c != u, sham: !Up }, f),
        'BYTES_PER_ELEMENT' in c || Ot(c, 'BYTES_PER_ELEMENT', n),
        'BYTES_PER_ELEMENT' in s || Ot(s, 'BYTES_PER_ELEMENT', n),
        Jo(o);
    }))
  : (bp = function () {}),
  bp('Float32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Float64', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Int8', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Int16', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Int32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Uint8', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp(
    'Uint8',
    function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    },
    !0
  ),
  bp('Uint16', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  bp('Uint32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  });
var Xp = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('copyWithin', function (t, e) {
  return sn.call(Xp(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
});
var Kp = We.every,
  Zp = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('every', function (t) {
  return Kp(Zp(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Qp = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('fill', function (t) {
  return yn.apply(Qp(this), arguments);
});
var ed,
  rd,
  nd = We.filter;
rd = function (t, e) {
  for (var r = 0, n = e.length, o = new t(n); n > r; ) o[r] = e[r++];
  return o;
};
var od,
  id = $i.TYPED_ARRAY_CONSTRUCTOR,
  ad = $i.aTypedArrayConstructor;
(od = function (t) {
  return ad(ua(t, t[id]));
}),
  (ed = function (t, e) {
    return rd(od(t), e);
  });
var ud = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('filter', function (t) {
  var e = nd(ud(this), t, arguments.length > 1 ? arguments[1] : void 0);
  return ed(this, e);
});
var cd = We.find,
  sd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('find', function (t) {
  return cd(sd(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var fd = We.findIndex,
  ld = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('findIndex', function (t) {
  return fd(ld(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var hd = We.forEach,
  pd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('forEach', function (t) {
  hd(pd(this), t, arguments.length > 1 ? arguments[1] : void 0);
}),
  (0, $i.exportTypedArrayStaticMethod)('from', _p, mp);
var dd = Qt.includes,
  vd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('includes', function (t) {
  return dd(vd(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var gd = Qt.indexOf,
  yd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('indexOf', function (t) {
  return gd(yd(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
I = i('ek4B6');
var md = ot('iterator'),
  bd = I.Uint8Array,
  wd = qn.values,
  xd = qn.keys,
  Ed = qn.entries,
  Ad = $i.aTypedArray,
  Sd = $i.exportTypedArrayMethod,
  _d = bd && bd.prototype[md],
  kd = !!_d && ('values' == _d.name || null == _d.name),
  Od = function () {
    return wd.call(Ad(this));
  };
Sd('entries', function () {
  return Ed.call(Ad(this));
}),
  Sd('keys', function () {
    return xd.call(Ad(this));
  }),
  Sd('values', Od, !kd),
  Sd(md, Od, !kd);
var Td = $i.aTypedArray,
  Rd = [].join;
(0, $i.exportTypedArrayMethod)('join', function (t) {
  return Rd.apply(Td(this), arguments);
});
var Id = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('lastIndexOf', function (t) {
  return so.apply(Id(this), arguments);
});
var Md = We.map,
  jd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('map', function (t) {
  return Md(
    jd(this),
    t,
    arguments.length > 1 ? arguments[1] : void 0,
    function (t, e) {
      return new (od(t))(e);
    }
  );
});
var Ld = $i.aTypedArrayConstructor;
(0, $i.exportTypedArrayStaticMethod)(
  'of',
  function () {
    for (var t = 0, e = arguments.length, r = new (Ld(this))(e); e > t; )
      r[t] = arguments[t++];
    return r;
  },
  mp
);
var Pd = mo.left,
  Fd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('reduce', function (t) {
  return Pd(
    Fd(this),
    t,
    arguments.length,
    arguments.length > 1 ? arguments[1] : void 0
  );
});
var Nd = mo.right,
  Ud = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('reduceRight', function (t) {
  return Nd(
    Ud(this),
    t,
    arguments.length,
    arguments.length > 1 ? arguments[1] : void 0
  );
});
var Bd = $i.aTypedArray,
  Cd = $i.exportTypedArrayMethod,
  $d = Math.floor;
Cd('reverse', function () {
  for (var t, e = this, r = Bd(e).length, n = $d(r / 2), o = 0; o < n; )
    (t = e[o]), (e[o++] = e[--r]), (e[r] = t);
  return e;
});
var Dd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)(
  'set',
  function (t) {
    Dd(this);
    var e = Ap(arguments.length > 1 ? arguments[1] : void 0, 1),
      r = this.length,
      n = st(t),
      o = te(n.length),
      i = 0;
    if (o + e > r) throw RangeError('Wrong length');
    for (; i < o; ) this[e + i] = n[i++];
  },
  T(function () {
    new Int8Array(1).set({});
  })
);
var qd = $i.aTypedArray,
  zd = [].slice;
(0, $i.exportTypedArrayMethod)(
  'slice',
  function (t, e) {
    for (
      var r = zd.call(qd(this), t, e),
        n = od(this),
        o = 0,
        i = r.length,
        a = new n(i);
      i > o;

    )
      a[o] = r[o++];
    return a;
  },
  T(function () {
    new Int8Array(1).slice();
  })
);
var Wd = We.some,
  Yd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('some', function (t) {
  return Wd(Yd(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
I = i('ek4B6');
var Hd = $i.aTypedArray,
  Vd = $i.exportTypedArrayMethod,
  Gd = I.Uint16Array,
  Jd = Gd && Gd.prototype.sort,
  Xd =
    !!Jd &&
    !T(function () {
      var t = new Gd(2);
      t.sort(null), t.sort({});
    }),
  Kd =
    !!Jd &&
    !T(function () {
      if (J) return J < 74;
      if (Bo) return Bo < 67;
      if ($o) return !0;
      if (Do) return Do < 602;
      var t,
        e,
        r = new Gd(516),
        n = Array(516);
      for (t = 0; t < 516; t++)
        (e = t % 4), (r[t] = 515 - t), (n[t] = t - 2 * e + 3);
      for (
        r.sort(function (t, e) {
          return ((t / 4) | 0) - ((e / 4) | 0);
        }),
          t = 0;
        t < 516;
        t++
      )
        if (r[t] !== n[t]) return !0;
    });
Vd(
  'sort',
  function (t) {
    var e = this;
    if ((void 0 !== t && He(t), Kd)) return Jd.call(e, t);
    Hd(e);
    var r,
      n = te(e.length),
      o = Array(n);
    for (r = 0; r < n; r++) o[r] = e[r];
    for (
      o = Lo(
        e,
        (function (t) {
          return function (e, r) {
            return void 0 !== t
              ? +t(e, r) || 0
              : r != r
              ? -1
              : e != e
              ? 1
              : 0 === e && 0 === r
              ? 1 / e > 0 && 1 / r < 0
                ? 1
                : -1
              : e > r;
          };
        })(t)
      ),
        r = 0;
      r < n;
      r++
    )
      e[r] = o[r];
    return e;
  },
  !Kd || Xd
);
var Zd = $i.aTypedArray;
(0, $i.exportTypedArrayMethod)('subarray', function (t, e) {
  var r = Zd(this),
    n = r.length,
    o = ae(t, n);
  return new (od(r))(
    r.buffer,
    r.byteOffset + o * r.BYTES_PER_ELEMENT,
    te((void 0 === e ? n : ae(e, n)) - o)
  );
});
var Qd = (I = i('ek4B6')).Int8Array,
  tv = $i.aTypedArray,
  ev = $i.exportTypedArrayMethod,
  rv = [].toLocaleString,
  nv = [].slice,
  ov =
    !!Qd &&
    T(function () {
      rv.call(new Qd(1));
    });
ev(
  'toLocaleString',
  function () {
    return rv.apply(ov ? nv.call(tv(this)) : tv(this), arguments);
  },
  T(function () {
    return [1, 2].toLocaleString() != new Qd([1, 2]).toLocaleString();
  }) ||
    !T(function () {
      Qd.prototype.toLocaleString.call([1, 2]);
    })
);
var iv = $i.exportTypedArrayMethod,
  av = (I = i('ek4B6')).Uint8Array,
  uv = (av && av.prototype) || {},
  cv = [].toString,
  sv = [].join;
T(function () {
  cv.call({});
}) &&
  (cv = function () {
    return sv.call(this);
  });
var fv = uv.toString != cv;
iv('toString', cv, fv);
var lv = String.fromCharCode,
  hv = /^[\da-f]{2}$/i,
  pv = /^[\da-f]{4}$/i;
S(
  { global: !0 },
  {
    unescape: function (t) {
      for (var e, r, n = Ee(t), o = '', i = n.length, a = 0; a < i; ) {
        if ('%' === (e = n.charAt(a++)))
          if ('u' === n.charAt(a)) {
            if (((r = n.slice(a + 1, a + 5)), pv.test(r))) {
              (o += lv(parseInt(r, 16))), (a += 5);
              continue;
            }
          } else if (((r = n.slice(a, a + 2)), hv.test(r))) {
            (o += lv(parseInt(r, 16))), (a += 2);
            continue;
          }
        o += e;
      }
      return o;
    },
  }
);
I = i('ek4B6');
var dv,
  vv = Qa.getWeakData,
  gv = jt.set,
  yv = jt.getterFor,
  mv = We.find,
  bv = We.findIndex,
  wv = 0,
  xv = function (t) {
    return t.frozen || (t.frozen = new Ev());
  },
  Ev = function () {
    this.entries = [];
  },
  Av = function (t, e) {
    return mv(t.entries, function (t) {
      return t[0] === e;
    });
  };
(Ev.prototype = {
  get: function (t) {
    var e = Av(this, t);
    if (e) return e[1];
  },
  has: function (t) {
    return !!Av(this, t);
  },
  set: function (t, e) {
    var r = Av(this, t);
    r ? (r[1] = e) : this.entries.push([t, e]);
  },
  delete: function (t) {
    var e = bv(this.entries, function (e) {
      return e[0] === t;
    });
    return ~e && this.entries.splice(e, 1), !!~e;
  },
}),
  (dv = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
          ni(t, o, e),
            gv(t, { type: e, id: wv++, frozen: void 0 }),
            null != i && $r(i, t[n], { that: t, AS_ENTRIES: r });
        }),
        i = yv(e),
        a = function (t, e, r) {
          var n = i(t),
            o = vv(St(e), !0);
          return !0 === o ? xv(n).set(e, r) : (o[n.id] = r), t;
        };
      return (
        ri(o.prototype, {
          delete: function (t) {
            var e = i(this);
            if (!z(t)) return !1;
            var r = vv(t);
            return !0 === r
              ? xv(e).delete(t)
              : r && ft(r, e.id) && delete r[e.id];
          },
          has: function (t) {
            var e = i(this);
            if (!z(t)) return !1;
            var r = vv(t);
            return !0 === r ? xv(e).has(t) : r && ft(r, e.id);
          },
        }),
        ri(
          o.prototype,
          r
            ? {
                get: function (t) {
                  var e = i(this);
                  if (z(t)) {
                    var r = vv(t);
                    return !0 === r ? xv(e).get(t) : r ? r[e.id] : void 0;
                  }
                },
                set: function (t, e) {
                  return a(this, t, e);
                },
              }
            : {
                add: function (t) {
                  return a(this, t, !0);
                },
              }
        ),
        o
      );
    },
  });
var Sv,
  _v = jt.enforce,
  kv = !I.ActiveXObject && 'ActiveXObject' in I,
  Ov = Object.isExtensible,
  Tv = function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  Rv = Za('WeakMap', Tv, dv);
if (Lt && kv) {
  (Sv = dv.getConstructor(Tv, 'WeakMap', !0)), Qa.enable();
  var Iv = Rv.prototype,
    Mv = Iv.delete,
    jv = Iv.has,
    Lv = Iv.get,
    Pv = Iv.set;
  ri(Iv, {
    delete: function (t) {
      if (z(t) && !Ov(t)) {
        var e = _v(this);
        return (
          e.frozen || (e.frozen = new Sv()),
          Mv.call(this, t) || e.frozen.delete(t)
        );
      }
      return Mv.call(this, t);
    },
    has: function (t) {
      if (z(t) && !Ov(t)) {
        var e = _v(this);
        return (
          e.frozen || (e.frozen = new Sv()), jv.call(this, t) || e.frozen.has(t)
        );
      }
      return jv.call(this, t);
    },
    get: function (t) {
      if (z(t) && !Ov(t)) {
        var e = _v(this);
        return (
          e.frozen || (e.frozen = new Sv()),
          jv.call(this, t) ? Lv.call(this, t) : e.frozen.get(t)
        );
      }
      return Lv.call(this, t);
    },
    set: function (t, e) {
      if (z(t) && !Ov(t)) {
        var r = _v(this);
        r.frozen || (r.frozen = new Sv()),
          jv.call(this, t) ? Pv.call(this, t, e) : r.frozen.set(t, e);
      } else Pv.call(this, t, e);
      return this;
    },
  });
}
Za(
  'WeakSet',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  dv
);
var Fv;
I = i('ek4B6');
for (var Nv in (Fv = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0,
})) {
  var Uv = I[Nv],
    Bv = Uv && Uv.prototype;
  if (Bv && Bv.forEach !== kn)
    try {
      Ot(Bv, 'forEach', kn);
    } catch (t) {
      Bv.forEach = kn;
    }
}
I = i('ek4B6');
var Cv = ot('iterator'),
  $v = ot('toStringTag'),
  Dv = qn.values;
for (var qv in Fv) {
  var zv = I[qv],
    Wv = zv && zv.prototype;
  if (Wv) {
    if (Wv[Cv] !== Dv)
      try {
        Ot(Wv, Cv, Dv);
      } catch (t) {
        Wv[Cv] = Dv;
      }
    if ((Wv[$v] || Ot(Wv, $v, qv), Fv[qv]))
      for (var Yv in qn)
        if (Wv[Yv] !== qn[Yv])
          try {
            Ot(Wv, Yv, qn[Yv]);
          } catch (t) {
            Wv[Yv] = qn[Yv];
          }
  }
}
var Hv = !(I = i('ek4B6')).setImmediate || !I.clearImmediate;
S(
  { global: !0, bind: !0, enumerable: !0, forced: Hv },
  { setImmediate: Ss.set, clearImmediate: Ss.clear }
);
var Vv = (I = i('ek4B6')).process;
S(
  { global: !0, enumerable: !0, noTargetGet: !0 },
  {
    queueMicrotask: function (t) {
      var e = bo && Vv.domain;
      zs(e ? e.bind(t) : t);
    },
  }
);
I = i('ek4B6');
var Gv = [].slice,
  Jv = /MSIE .\./.test(X),
  Xv = function (t) {
    return function (e, r) {
      var n = arguments.length > 2,
        o = n ? Gv.call(arguments, 2) : void 0;
      return t(
        n
          ? function () {
              ('function' == typeof e ? e : Function(e)).apply(this, o);
            }
          : e,
        r
      );
    };
  };
S(
  { global: !0, bind: !0, forced: Jv },
  { setTimeout: Xv(I.setTimeout), setInterval: Xv(I.setInterval) }
);
var Kv,
  Zv = ot('iterator');
Kv = !T(function () {
  var t = new URL('b?a=1&b=2&c=3', 'http://a'),
    e = t.searchParams,
    r = '';
  return (
    (t.pathname = 'c%20d'),
    e.forEach(function (t, n) {
      e.delete('b'), (r += n + t);
    }),
    !e.sort ||
      'http://a/c%20d?a=1&c=3' !== t.href ||
      '3' !== e.get('c') ||
      'a=1' !== String(new URLSearchParams('?a=1')) ||
      !e[Zv] ||
      'a' !== new URL('https://a@b').username ||
      'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
      'xn--e1aybc' !== new URL('http://тест').host ||
      '#%D0%B1' !== new URL('http://a#б').hash ||
      'a1c3' !== r ||
      'x' !== new URL('http://x', void 0).host
  );
});
I = i('ek4B6');
var Qv,
  tg = th.codeAt,
  eg = /[^\0-\u007E]/,
  rg = /[.\u3002\uFF0E\uFF61]/g,
  ng = Math.floor,
  og = String.fromCharCode,
  ig = function (t) {
    return t + 22 + 75 * (t < 26);
  },
  ag = function (t, e, r) {
    var n = 0;
    for (t = r ? ng(t / 700) : t >> 1, t += ng(t / e); t > 455; n += 36)
      t = ng(t / 35);
    return ng(n + (36 * t) / (t + 38));
  },
  ug = function (t) {
    var e,
      r,
      n = [],
      o = (t = (function (t) {
        for (var e = [], r = 0, n = t.length; r < n; ) {
          var o = t.charCodeAt(r++);
          if (o >= 55296 && o <= 56319 && r < n) {
            var i = t.charCodeAt(r++);
            56320 == (64512 & i)
              ? e.push(((1023 & o) << 10) + (1023 & i) + 65536)
              : (e.push(o), r--);
          } else e.push(o);
        }
        return e;
      })(t)).length,
      i = 128,
      a = 0,
      u = 72;
    for (e = 0; e < t.length; e++) (r = t[e]) < 128 && n.push(og(r));
    var c = n.length,
      s = c;
    for (c && n.push('-'); s < o; ) {
      var f = 2147483647;
      for (e = 0; e < t.length; e++) (r = t[e]) >= i && r < f && (f = r);
      var l = s + 1;
      if (f - i > ng((2147483647 - a) / l))
        throw RangeError('Overflow: input needs wider integers to process');
      for (a += (f - i) * l, i = f, e = 0; e < t.length; e++) {
        if ((r = t[e]) < i && ++a > 2147483647)
          throw RangeError('Overflow: input needs wider integers to process');
        if (r == i) {
          for (var h = a, p = 36; ; p += 36) {
            var d = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
            if (h < d) break;
            var v = h - d,
              g = 36 - d;
            n.push(og(ig(d + (v % g)))), (h = ng(v / g));
          }
          n.push(og(ig(h))), (u = ag(a, l, s == c)), (a = 0), ++s;
        }
      }
      ++a, ++i;
    }
    return n.join('');
  };
Qv = function (t) {
  var e,
    r,
    n = [],
    o = t.toLowerCase().replace(rg, '.').split('.');
  for (e = 0; e < o.length; e++)
    (r = o[e]), n.push(eg.test(r) ? 'xn--' + ug(r) : r);
  return n.join('.');
};
var cg, sg;
sg = function (t) {
  var e = Yr(t);
  if ('function' != typeof e) throw TypeError(String(t) + ' is not iterable');
  return St(e.call(t));
};
var fg = W('fetch'),
  lg = W('Request'),
  hg = lg && lg.prototype,
  pg = W('Headers'),
  dg = ot('iterator'),
  vg = jt.set,
  gg = jt.getterFor('URLSearchParams'),
  yg = jt.getterFor('URLSearchParamsIterator'),
  mg = /\+/g,
  bg = Array(4),
  wg = function (t) {
    return (
      bg[t - 1] || (bg[t - 1] = RegExp('((?:%[\\da-f]{2}){' + t + '})', 'gi'))
    );
  },
  xg = function (t) {
    try {
      return decodeURIComponent(t);
    } catch (e) {
      return t;
    }
  },
  Eg = function (t) {
    var e = t.replace(mg, ' '),
      r = 4;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      for (; r; ) e = e.replace(wg(r--), xg);
      return e;
    }
  },
  Ag = /[!'()~]|%20/g,
  Sg = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
  },
  _g = function (t) {
    return Sg[t];
  },
  kg = function (t) {
    return encodeURIComponent(t).replace(Ag, _g);
  },
  Og = function (t, e) {
    if (e)
      for (var r, n, o = e.split('&'), i = 0; i < o.length; )
        (r = o[i++]).length &&
          ((n = r.split('=')),
          t.push({ key: Eg(n.shift()), value: Eg(n.join('=')) }));
  },
  Tg = function (t) {
    (this.entries.length = 0), Og(this.entries, t);
  },
  Rg = function (t, e) {
    if (t < e) throw TypeError('Not enough arguments');
  },
  Ig = Wn(
    function (t, e) {
      vg(this, {
        type: 'URLSearchParamsIterator',
        iterator: sg(gg(t).entries),
        kind: e,
      });
    },
    'Iterator',
    function () {
      var t = yg(this),
        e = t.kind,
        r = t.iterator.next(),
        n = r.value;
      return (
        r.done ||
          (r.value =
            'keys' === e ? n.key : 'values' === e ? n.value : [n.key, n.value]),
        r
      );
    }
  ),
  Mg = function () {
    ni(this, Mg, 'URLSearchParams');
    var t,
      e,
      r,
      n,
      o,
      i,
      a,
      u,
      c,
      s = arguments.length > 0 ? arguments[0] : void 0,
      f = this,
      l = [];
    if (
      (vg(f, {
        type: 'URLSearchParams',
        entries: l,
        updateURL: function () {},
        updateSearchParams: Tg,
      }),
      void 0 !== s)
    )
      if (z(s))
        if ('function' == typeof (t = Yr(s)))
          for (r = (e = t.call(s)).next; !(n = r.call(e)).done; ) {
            if (
              (a = (i = (o = sg(St(n.value))).next).call(o)).done ||
              (u = i.call(o)).done ||
              !i.call(o).done
            )
              throw TypeError('Expected sequence with length 2');
            l.push({ key: Ee(a.value), value: Ee(u.value) });
          }
        else for (c in s) ft(s, c) && l.push({ key: c, value: Ee(s[c]) });
      else
        Og(
          l,
          'string' == typeof s ? ('?' === s.charAt(0) ? s.slice(1) : s) : Ee(s)
        );
  },
  jg = Mg.prototype;
if (
  (ri(
    jg,
    {
      append: function (t, e) {
        Rg(arguments.length, 2);
        var r = gg(this);
        r.entries.push({ key: Ee(t), value: Ee(e) }), r.updateURL();
      },
      delete: function (t) {
        Rg(arguments.length, 1);
        for (var e = gg(this), r = e.entries, n = Ee(t), o = 0; o < r.length; )
          r[o].key === n ? r.splice(o, 1) : o++;
        e.updateURL();
      },
      get: function (t) {
        Rg(arguments.length, 1);
        for (var e = gg(this).entries, r = Ee(t), n = 0; n < e.length; n++)
          if (e[n].key === r) return e[n].value;
        return null;
      },
      getAll: function (t) {
        Rg(arguments.length, 1);
        for (
          var e = gg(this).entries, r = Ee(t), n = [], o = 0;
          o < e.length;
          o++
        )
          e[o].key === r && n.push(e[o].value);
        return n;
      },
      has: function (t) {
        Rg(arguments.length, 1);
        for (var e = gg(this).entries, r = Ee(t), n = 0; n < e.length; )
          if (e[n++].key === r) return !0;
        return !1;
      },
      set: function (t, e) {
        Rg(arguments.length, 1);
        for (
          var r,
            n = gg(this),
            o = n.entries,
            i = !1,
            a = Ee(t),
            u = Ee(e),
            c = 0;
          c < o.length;
          c++
        )
          (r = o[c]).key === a &&
            (i ? o.splice(c--, 1) : ((i = !0), (r.value = u)));
        i || o.push({ key: a, value: u }), n.updateURL();
      },
      sort: function () {
        var t,
          e,
          r,
          n = gg(this),
          o = n.entries,
          i = o.slice();
        for (o.length = 0, r = 0; r < i.length; r++) {
          for (t = i[r], e = 0; e < r; e++)
            if (o[e].key > t.key) {
              o.splice(e, 0, t);
              break;
            }
          e === r && o.push(t);
        }
        n.updateURL();
      },
      forEach: function (t) {
        for (
          var e,
            r = gg(this).entries,
            n = Ye(t, arguments.length > 1 ? arguments[1] : void 0, 3),
            o = 0;
          o < r.length;

        )
          n((e = r[o++]).value, e.key, this);
      },
      keys: function () {
        return new Ig(this, 'keys');
      },
      values: function () {
        return new Ig(this, 'values');
      },
      entries: function () {
        return new Ig(this, 'entries');
      },
    },
    { enumerable: !0 }
  ),
  Rt(jg, dg, jg.entries),
  Rt(
    jg,
    'toString',
    function () {
      for (var t, e = gg(this).entries, r = [], n = 0; n < e.length; )
        (t = e[n++]), r.push(kg(t.key) + '=' + kg(t.value));
      return r.join('&');
    },
    { enumerable: !0 }
  ),
  De(Mg, 'URLSearchParams'),
  S({ global: !0, forced: !Kv }, { URLSearchParams: Mg }),
  !Kv && 'function' == typeof pg)
) {
  var Lg = function (t) {
    if (z(t)) {
      var e,
        r = t.body;
      if ('URLSearchParams' === Vr(r))
        return (
          (e = t.headers ? new pg(t.headers) : new pg()).has('content-type') ||
            e.set(
              'content-type',
              'application/x-www-form-urlencoded;charset=UTF-8'
            ),
          Ae(t, { body: P(0, String(r)), headers: P(0, e) })
        );
    }
    return t;
  };
  if (
    ('function' == typeof fg &&
      S(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return fg(t, arguments.length > 1 ? Lg(arguments[1]) : {});
          },
        }
      ),
    'function' == typeof lg)
  ) {
    var Pg = function (t) {
      return (
        ni(this, Pg, 'Request'),
        new lg(t, arguments.length > 1 ? Lg(arguments[1]) : {})
      );
    };
    (hg.constructor = Pg),
      (Pg.prototype = hg),
      S({ global: !0, forced: !0 }, { Request: Pg });
  }
}
cg = { URLSearchParams: Mg, getState: gg };
var Fg = I.URL,
  Ng = cg.URLSearchParams,
  Ug = cg.getState,
  Bg = jt.set,
  Cg = jt.getterFor('URL'),
  $g = Math.floor,
  Dg = Math.pow,
  qg = /[A-Za-z]/,
  zg = /[\d+-.A-Za-z]/,
  Wg = /\d/,
  Yg = /^0x/i,
  Hg = /^[0-7]+$/,
  Vg = /^\d+$/,
  Gg = /^[\dA-Fa-f]+$/,
  Jg = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  Xg = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  Kg = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
  Zg = /[\t\n\r]/g,
  Qg = function (t, e) {
    var r, n, o;
    if ('[' == e.charAt(0)) {
      if (']' != e.charAt(e.length - 1)) return 'Invalid host';
      if (!(r = ey(e.slice(1, -1)))) return 'Invalid host';
      t.host = r;
    } else if (sy(t)) {
      if (((e = Qv(e)), Jg.test(e))) return 'Invalid host';
      if (null === (r = ty(e))) return 'Invalid host';
      t.host = r;
    } else {
      if (Xg.test(e)) return 'Invalid host';
      for (r = '', n = Rn(e), o = 0; o < n.length; o++) r += uy(n[o], ny);
      t.host = r;
    }
  },
  ty = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c = t.split('.');
    if ((c.length && '' == c[c.length - 1] && c.pop(), (e = c.length) > 4))
      return t;
    for (r = [], n = 0; n < e; n++) {
      if ('' == (o = c[n])) return t;
      if (
        ((i = 10),
        o.length > 1 &&
          '0' == o.charAt(0) &&
          ((i = Yg.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
        '' === o)
      )
        a = 0;
      else {
        if (!(10 == i ? Vg : 8 == i ? Hg : Gg).test(o)) return t;
        a = parseInt(o, i);
      }
      r.push(a);
    }
    for (n = 0; n < e; n++)
      if (((a = r[n]), n == e - 1)) {
        if (a >= Dg(256, 5 - e)) return null;
      } else if (a > 255) return null;
    for (u = r.pop(), n = 0; n < r.length; n++) u += r[n] * Dg(256, 3 - n);
    return u;
  },
  ey = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c = [0, 0, 0, 0, 0, 0, 0, 0],
      s = 0,
      f = null,
      l = 0,
      h = function () {
        return t.charAt(l);
      };
    if (':' == h()) {
      if (':' != t.charAt(1)) return;
      (l += 2), (f = ++s);
    }
    for (; h(); ) {
      if (8 == s) return;
      if (':' != h()) {
        for (e = r = 0; r < 4 && Gg.test(h()); )
          (e = 16 * e + parseInt(h(), 16)), l++, r++;
        if ('.' == h()) {
          if (0 == r) return;
          if (((l -= r), s > 6)) return;
          for (n = 0; h(); ) {
            if (((o = null), n > 0)) {
              if (!('.' == h() && n < 4)) return;
              l++;
            }
            if (!Wg.test(h())) return;
            for (; Wg.test(h()); ) {
              if (((i = parseInt(h(), 10)), null === o)) o = i;
              else {
                if (0 == o) return;
                o = 10 * o + i;
              }
              if (o > 255) return;
              l++;
            }
            (c[s] = 256 * c[s] + o), (2 != ++n && 4 != n) || s++;
          }
          if (4 != n) return;
          break;
        }
        if (':' == h()) {
          if ((l++, !h())) return;
        } else if (h()) return;
        c[s++] = e;
      } else {
        if (null !== f) return;
        l++, (f = ++s);
      }
    }
    if (null !== f)
      for (a = s - f, s = 7; 0 != s && a > 0; )
        (u = c[s]), (c[s--] = c[f + a - 1]), (c[f + --a] = u);
    else if (8 != s) return;
    return c;
  },
  ry = function (t) {
    var e, r, n, o;
    if ('number' == typeof t) {
      for (e = [], r = 0; r < 4; r++) e.unshift(t % 256), (t = $g(t / 256));
      return e.join('.');
    }
    if ('object' == typeof t) {
      for (
        e = '',
          n = (function (t) {
            for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++)
              0 !== t[i]
                ? (o > r && ((e = n), (r = o)), (n = null), (o = 0))
                : (null === n && (n = i), ++o);
            return o > r && ((e = n), (r = o)), e;
          })(t),
          r = 0;
        r < 8;
        r++
      )
        (o && 0 === t[r]) ||
          (o && (o = !1),
          n === r
            ? ((e += r ? ':' : '::'), (o = !0))
            : ((e += t[r].toString(16)), r < 7 && (e += ':')));
      return '[' + e + ']';
    }
    return t;
  },
  ny = {},
  oy = zc({}, ny, { ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1 }),
  iy = zc({}, oy, { '#': 1, '?': 1, '{': 1, '}': 1 }),
  ay = zc({}, iy, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1,
  }),
  uy = function (t, e) {
    var r = tg(t, 0);
    return r > 32 && r < 127 && !ft(e, t) ? t : encodeURIComponent(t);
  },
  cy = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
  sy = function (t) {
    return ft(cy, t.scheme);
  },
  fy = function (t) {
    return '' != t.username || '' != t.password;
  },
  ly = function (t) {
    return !t.host || t.cannotBeABaseURL || 'file' == t.scheme;
  },
  hy = function (t, e) {
    var r;
    return (
      2 == t.length &&
      qg.test(t.charAt(0)) &&
      (':' == (r = t.charAt(1)) || (!e && '|' == r))
    );
  },
  py = function (t) {
    var e;
    return (
      t.length > 1 &&
      hy(t.slice(0, 2)) &&
      (2 == t.length ||
        '/' === (e = t.charAt(2)) ||
        '\\' === e ||
        '?' === e ||
        '#' === e)
    );
  },
  dy = function (t) {
    var e = t.path,
      r = e.length;
    !r || ('file' == t.scheme && 1 == r && hy(e[0], !0)) || e.pop();
  },
  vy = function (t) {
    return '.' === t || '%2e' === t.toLowerCase();
  },
  gy = {},
  yy = {},
  my = {},
  by = {},
  wy = {},
  xy = {},
  Ey = {},
  Ay = {},
  Sy = {},
  _y = {},
  ky = {},
  Oy = {},
  Ty = {},
  Ry = {},
  Iy = {},
  My = {},
  jy = {},
  Ly = {},
  Py = {},
  Fy = {},
  Ny = {},
  Uy = function (t, e, r, n) {
    var o,
      i,
      a,
      u,
      c,
      s = r || gy,
      f = 0,
      l = '',
      h = !1,
      p = !1,
      d = !1;
    for (
      r ||
        ((t.scheme = ''),
        (t.username = ''),
        (t.password = ''),
        (t.host = null),
        (t.port = null),
        (t.path = []),
        (t.query = null),
        (t.fragment = null),
        (t.cannotBeABaseURL = !1),
        (e = e.replace(Kg, ''))),
        e = e.replace(Zg, ''),
        o = Rn(e);
      f <= o.length;

    ) {
      switch (((i = o[f]), s)) {
        case gy:
          if (!i || !qg.test(i)) {
            if (r) return 'Invalid scheme';
            s = my;
            continue;
          }
          (l += i.toLowerCase()), (s = yy);
          break;
        case yy:
          if (i && (zg.test(i) || '+' == i || '-' == i || '.' == i))
            l += i.toLowerCase();
          else {
            if (':' != i) {
              if (r) return 'Invalid scheme';
              (l = ''), (s = my), (f = 0);
              continue;
            }
            if (
              r &&
              (sy(t) != ft(cy, l) ||
                ('file' == l && (fy(t) || null !== t.port)) ||
                ('file' == t.scheme && !t.host))
            )
              return;
            if (((t.scheme = l), r))
              return void (sy(t) && cy[t.scheme] == t.port && (t.port = null));
            (l = ''),
              'file' == t.scheme
                ? (s = Ry)
                : sy(t) && n && n.scheme == t.scheme
                ? (s = by)
                : sy(t)
                ? (s = Ay)
                : '/' == o[f + 1]
                ? ((s = wy), f++)
                : ((t.cannotBeABaseURL = !0), t.path.push(''), (s = Py));
          }
          break;
        case my:
          if (!n || (n.cannotBeABaseURL && '#' != i)) return 'Invalid scheme';
          if (n.cannotBeABaseURL && '#' == i) {
            (t.scheme = n.scheme),
              (t.path = n.path.slice()),
              (t.query = n.query),
              (t.fragment = ''),
              (t.cannotBeABaseURL = !0),
              (s = Ny);
            break;
          }
          s = 'file' == n.scheme ? Ry : xy;
          continue;
        case by:
          if ('/' != i || '/' != o[f + 1]) {
            s = xy;
            continue;
          }
          (s = Sy), f++;
          break;
        case wy:
          if ('/' == i) {
            s = _y;
            break;
          }
          s = Ly;
          continue;
        case xy:
          if (((t.scheme = n.scheme), null == i))
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = n.query);
          else if ('/' == i || ('\\' == i && sy(t))) s = Ey;
          else if ('?' == i)
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = ''),
              (s = Fy);
          else {
            if ('#' != i) {
              (t.username = n.username),
                (t.password = n.password),
                (t.host = n.host),
                (t.port = n.port),
                (t.path = n.path.slice()),
                t.path.pop(),
                (s = Ly);
              continue;
            }
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = n.query),
              (t.fragment = ''),
              (s = Ny);
          }
          break;
        case Ey:
          if (!sy(t) || ('/' != i && '\\' != i)) {
            if ('/' != i) {
              (t.username = n.username),
                (t.password = n.password),
                (t.host = n.host),
                (t.port = n.port),
                (s = Ly);
              continue;
            }
            s = _y;
          } else s = Sy;
          break;
        case Ay:
          if (((s = Sy), '/' != i || '/' != l.charAt(f + 1))) continue;
          f++;
          break;
        case Sy:
          if ('/' != i && '\\' != i) {
            s = _y;
            continue;
          }
          break;
        case _y:
          if ('@' == i) {
            h && (l = '%40' + l), (h = !0), (a = Rn(l));
            for (var v = 0; v < a.length; v++) {
              var g = a[v];
              if (':' != g || d) {
                var y = uy(g, ay);
                d ? (t.password += y) : (t.username += y);
              } else d = !0;
            }
            l = '';
          } else if (
            null == i ||
            '/' == i ||
            '?' == i ||
            '#' == i ||
            ('\\' == i && sy(t))
          ) {
            if (h && '' == l) return 'Invalid authority';
            (f -= Rn(l).length + 1), (l = ''), (s = ky);
          } else l += i;
          break;
        case ky:
        case Oy:
          if (r && 'file' == t.scheme) {
            s = My;
            continue;
          }
          if (':' != i || p) {
            if (
              null == i ||
              '/' == i ||
              '?' == i ||
              '#' == i ||
              ('\\' == i && sy(t))
            ) {
              if (sy(t) && '' == l) return 'Invalid host';
              if (r && '' == l && (fy(t) || null !== t.port)) return;
              if ((u = Qg(t, l))) return u;
              if (((l = ''), (s = jy), r)) return;
              continue;
            }
            '[' == i ? (p = !0) : ']' == i && (p = !1), (l += i);
          } else {
            if ('' == l) return 'Invalid host';
            if ((u = Qg(t, l))) return u;
            if (((l = ''), (s = Ty), r == Oy)) return;
          }
          break;
        case Ty:
          if (!Wg.test(i)) {
            if (
              null == i ||
              '/' == i ||
              '?' == i ||
              '#' == i ||
              ('\\' == i && sy(t)) ||
              r
            ) {
              if ('' != l) {
                var m = parseInt(l, 10);
                if (m > 65535) return 'Invalid port';
                (t.port = sy(t) && m === cy[t.scheme] ? null : m), (l = '');
              }
              if (r) return;
              s = jy;
              continue;
            }
            return 'Invalid port';
          }
          l += i;
          break;
        case Ry:
          if (((t.scheme = 'file'), '/' == i || '\\' == i)) s = Iy;
          else {
            if (!n || 'file' != n.scheme) {
              s = Ly;
              continue;
            }
            if (null == i)
              (t.host = n.host), (t.path = n.path.slice()), (t.query = n.query);
            else if ('?' == i)
              (t.host = n.host),
                (t.path = n.path.slice()),
                (t.query = ''),
                (s = Fy);
            else {
              if ('#' != i) {
                py(o.slice(f).join('')) ||
                  ((t.host = n.host), (t.path = n.path.slice()), dy(t)),
                  (s = Ly);
                continue;
              }
              (t.host = n.host),
                (t.path = n.path.slice()),
                (t.query = n.query),
                (t.fragment = ''),
                (s = Ny);
            }
          }
          break;
        case Iy:
          if ('/' == i || '\\' == i) {
            s = My;
            break;
          }
          n &&
            'file' == n.scheme &&
            !py(o.slice(f).join('')) &&
            (hy(n.path[0], !0) ? t.path.push(n.path[0]) : (t.host = n.host)),
            (s = Ly);
          continue;
        case My:
          if (null == i || '/' == i || '\\' == i || '?' == i || '#' == i) {
            if (!r && hy(l)) s = Ly;
            else if ('' == l) {
              if (((t.host = ''), r)) return;
              s = jy;
            } else {
              if ((u = Qg(t, l))) return u;
              if (('localhost' == t.host && (t.host = ''), r)) return;
              (l = ''), (s = jy);
            }
            continue;
          }
          l += i;
          break;
        case jy:
          if (sy(t)) {
            if (((s = Ly), '/' != i && '\\' != i)) continue;
          } else if (r || '?' != i)
            if (r || '#' != i) {
              if (null != i && ((s = Ly), '/' != i)) continue;
            } else (t.fragment = ''), (s = Ny);
          else (t.query = ''), (s = Fy);
          break;
        case Ly:
          if (
            null == i ||
            '/' == i ||
            ('\\' == i && sy(t)) ||
            (!r && ('?' == i || '#' == i))
          ) {
            if (
              ('..' === (c = (c = l).toLowerCase()) ||
              '%2e.' === c ||
              '.%2e' === c ||
              '%2e%2e' === c
                ? (dy(t), '/' == i || ('\\' == i && sy(t)) || t.path.push(''))
                : vy(l)
                ? '/' == i || ('\\' == i && sy(t)) || t.path.push('')
                : ('file' == t.scheme &&
                    !t.path.length &&
                    hy(l) &&
                    (t.host && (t.host = ''), (l = l.charAt(0) + ':')),
                  t.path.push(l)),
              (l = ''),
              'file' == t.scheme && (null == i || '?' == i || '#' == i))
            )
              for (; t.path.length > 1 && '' === t.path[0]; ) t.path.shift();
            '?' == i
              ? ((t.query = ''), (s = Fy))
              : '#' == i && ((t.fragment = ''), (s = Ny));
          } else l += uy(i, iy);
          break;
        case Py:
          '?' == i
            ? ((t.query = ''), (s = Fy))
            : '#' == i
            ? ((t.fragment = ''), (s = Ny))
            : null != i && (t.path[0] += uy(i, ny));
          break;
        case Fy:
          r || '#' != i
            ? null != i &&
              ("'" == i && sy(t)
                ? (t.query += '%27')
                : (t.query += '#' == i ? '%23' : uy(i, ny)))
            : ((t.fragment = ''), (s = Ny));
          break;
        case Ny:
          null != i && (t.fragment += uy(i, oy));
      }
      f++;
    }
  },
  By = function (t) {
    var e,
      r,
      n = ni(this, By, 'URL'),
      o = arguments.length > 1 ? arguments[1] : void 0,
      i = Ee(t),
      a = Bg(n, { type: 'URL' });
    if (void 0 !== o)
      if (o instanceof By) e = Cg(o);
      else if ((r = Uy((e = {}), Ee(o)))) throw TypeError(r);
    if ((r = Uy(a, i, null, e))) throw TypeError(r);
    var u = (a.searchParams = new Ng()),
      c = Ug(u);
    c.updateSearchParams(a.query),
      (c.updateURL = function () {
        a.query = String(u) || null;
      }),
      O ||
        ((n.href = $y.call(n)),
        (n.origin = Dy.call(n)),
        (n.protocol = qy.call(n)),
        (n.username = zy.call(n)),
        (n.password = Wy.call(n)),
        (n.host = Yy.call(n)),
        (n.hostname = Hy.call(n)),
        (n.port = Vy.call(n)),
        (n.pathname = Gy.call(n)),
        (n.search = Jy.call(n)),
        (n.searchParams = Xy.call(n)),
        (n.hash = Ky.call(n)));
  },
  Cy = By.prototype,
  $y = function () {
    var t = Cg(this),
      e = t.scheme,
      r = t.username,
      n = t.password,
      o = t.host,
      i = t.port,
      a = t.path,
      u = t.query,
      c = t.fragment,
      s = e + ':';
    return (
      null !== o
        ? ((s += '//'),
          fy(t) && (s += r + (n ? ':' + n : '') + '@'),
          (s += ry(o)),
          null !== i && (s += ':' + i))
        : 'file' == e && (s += '//'),
      (s += t.cannotBeABaseURL ? a[0] : a.length ? '/' + a.join('/') : ''),
      null !== u && (s += '?' + u),
      null !== c && (s += '#' + c),
      s
    );
  },
  Dy = function () {
    var t = Cg(this),
      e = t.scheme,
      r = t.port;
    if ('blob' == e)
      try {
        return new By(e.path[0]).origin;
      } catch (t) {
        return 'null';
      }
    return 'file' != e && sy(t)
      ? e + '://' + ry(t.host) + (null !== r ? ':' + r : '')
      : 'null';
  },
  qy = function () {
    return Cg(this).scheme + ':';
  },
  zy = function () {
    return Cg(this).username;
  },
  Wy = function () {
    return Cg(this).password;
  },
  Yy = function () {
    var t = Cg(this),
      e = t.host,
      r = t.port;
    return null === e ? '' : null === r ? ry(e) : ry(e) + ':' + r;
  },
  Hy = function () {
    var t = Cg(this).host;
    return null === t ? '' : ry(t);
  },
  Vy = function () {
    var t = Cg(this).port;
    return null === t ? '' : String(t);
  },
  Gy = function () {
    var t = Cg(this),
      e = t.path;
    return t.cannotBeABaseURL ? e[0] : e.length ? '/' + e.join('/') : '';
  },
  Jy = function () {
    var t = Cg(this).query;
    return t ? '?' + t : '';
  },
  Xy = function () {
    return Cg(this).searchParams;
  },
  Ky = function () {
    var t = Cg(this).fragment;
    return t ? '#' + t : '';
  },
  Zy = function (t, e) {
    return { get: t, set: e, configurable: !0, enumerable: !0 };
  };
if (
  (O &&
    Se(Cy, {
      href: Zy($y, function (t) {
        var e = Cg(this),
          r = Ee(t),
          n = Uy(e, r);
        if (n) throw TypeError(n);
        Ug(e.searchParams).updateSearchParams(e.query);
      }),
      origin: Zy(Dy),
      protocol: Zy(qy, function (t) {
        var e = Cg(this);
        Uy(e, Ee(t) + ':', gy);
      }),
      username: Zy(zy, function (t) {
        var e = Cg(this),
          r = Rn(Ee(t));
        if (!ly(e)) {
          e.username = '';
          for (var n = 0; n < r.length; n++) e.username += uy(r[n], ay);
        }
      }),
      password: Zy(Wy, function (t) {
        var e = Cg(this),
          r = Rn(Ee(t));
        if (!ly(e)) {
          e.password = '';
          for (var n = 0; n < r.length; n++) e.password += uy(r[n], ay);
        }
      }),
      host: Zy(Yy, function (t) {
        var e = Cg(this);
        e.cannotBeABaseURL || Uy(e, Ee(t), ky);
      }),
      hostname: Zy(Hy, function (t) {
        var e = Cg(this);
        e.cannotBeABaseURL || Uy(e, Ee(t), Oy);
      }),
      port: Zy(Vy, function (t) {
        var e = Cg(this);
        ly(e) || ('' == (t = Ee(t)) ? (e.port = null) : Uy(e, t, Ty));
      }),
      pathname: Zy(Gy, function (t) {
        var e = Cg(this);
        e.cannotBeABaseURL || ((e.path = []), Uy(e, Ee(t), jy));
      }),
      search: Zy(Jy, function (t) {
        var e = Cg(this);
        '' == (t = Ee(t))
          ? (e.query = null)
          : ('?' == t.charAt(0) && (t = t.slice(1)),
            (e.query = ''),
            Uy(e, t, Fy)),
          Ug(e.searchParams).updateSearchParams(e.query);
      }),
      searchParams: Zy(Xy),
      hash: Zy(Ky, function (t) {
        var e = Cg(this);
        '' != (t = Ee(t))
          ? ('#' == t.charAt(0) && (t = t.slice(1)),
            (e.fragment = ''),
            Uy(e, t, Ny))
          : (e.fragment = null);
      }),
    }),
  Rt(
    Cy,
    'toJSON',
    function () {
      return $y.call(this);
    },
    { enumerable: !0 }
  ),
  Rt(
    Cy,
    'toString',
    function () {
      return $y.call(this);
    },
    { enumerable: !0 }
  ),
  Fg)
) {
  var Qy = Fg.createObjectURL,
    tm = Fg.revokeObjectURL;
  Qy &&
    Rt(By, 'createObjectURL', function (t) {
      return Qy.apply(Fg, arguments);
    }),
    tm &&
      Rt(By, 'revokeObjectURL', function (t) {
        return tm.apply(Fg, arguments);
      });
}
De(By, 'URL'),
  S({ global: !0, forced: !Kv, sham: !O }, { URL: By }),
  S(
    { target: 'URL', proto: !0, enumerable: !0 },
    {
      toJSON: function () {
        return URL.prototype.toString.call(this);
      },
    }
  ),
  i('1UHYC');
const em = async function () {
    try {
      const t = window.location.hash.slice(1);
      if (!t) return;
      m.renderSpinner(),
        x.update(f()),
        A.update(c.bookmarks),
        await (async function (t) {
          try {
            const e = await u(
              `https://forkify-api.herokuapp.com/api/v2/recipes/${t}?key=1ce43c9c-9223-4f1c-89b3-a9127fdef7c0`
            );
            (c.recipe = s(e)),
              c.bookmarks.some(e => e.id === t)
                ? (c.recipe.bookmarked = !0)
                : (c.recipe.bookmarked = !1),
              console.log(c.recipe);
          } catch (t) {
            throw (console.error(`${t} 💥💥💥💥`), t);
          }
        })(t),
        m.render(c.recipe);
    } catch (t) {
      m.renderError(), console.error(t);
    }
  },
  rm = async function () {
    try {
      x.renderSpinner();
      const t = b.getQuery();
      if (!t) return;
      await (async function (t) {
        try {
          c.search.query = t;
          const e = await u(
            `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}&key=1ce43c9c-9223-4f1c-89b3-a9127fdef7c0`
          );
          console.log(e),
            (c.search.results = e.data.recipes.map(t => ({
              id: t.id,
              title: t.title,
              publisher: t.publisher,
              image: t.image_url,
              ...(t.key && { key: t.key }),
            }))),
            (c.search.page = 1);
        } catch (t) {
          throw (console.error(`${t} 💥💥💥💥`), t);
        }
      })(t),
        x.render(f()),
        E.render(c.search);
    } catch (t) {
      console.log(t);
    }
  },
  nm = function (t) {
    x.render(f(t)), E.render(c.search);
  },
  om = function (t) {
    !(function (t) {
      c.recipe.ingredients.forEach(e => {
        e.quantity = (e.quantity * t) / c.recipe.servings;
      }),
        (c.recipe.servings = t);
    })(t),
      m.update(c.recipe);
  },
  im = function () {
    c.recipe.bookmarked
      ? (function (t) {
          const e = c.bookmarks.findIndex(e => e.id === t);
          c.bookmarks.splice(e, 1),
            t === c.recipe.id && (c.recipe.bookmarked = !1),
            l();
        })(c.recipe.id)
      : h(c.recipe),
      m.update(c.recipe),
      A.render(c.bookmarks);
  },
  am = function () {
    A.render(c.bookmarks);
  },
  um = async function (t) {
    try {
      _.renderSpinner(),
        await (async function (t) {
          try {
            const e = Object.entries(t)
                .filter(t => t[0].startsWith('ingredient') && '' !== t[1])
                .map(t => {
                  const e = t[1].split(',').map(t => t.trim());
                  if (3 !== e.length)
                    throw new Error(
                      'Wrong ingredient fromat! Please use the correct format :)'
                    );
                  const [r, n, o] = e;
                  return { quantity: r ? +r : null, unit: n, description: o };
                }),
              r = {
                title: t.title,
                source_url: t.sourceUrl,
                image_url: t.image,
                publisher: t.publisher,
                cooking_time: +t.cookingTime,
                servings: +t.servings,
                ingredients: e,
              },
              n = await u(
                'https://forkify-api.herokuapp.com/api/v2/recipes/?key=1ce43c9c-9223-4f1c-89b3-a9127fdef7c0',
                r
              );
            (c.recipe = s(n)), h(c.recipe);
          } catch (t) {
            throw t;
          }
        })(t),
        console.log(c.recipe),
        m.render(c.recipe),
        _.renderMessage(),
        A.render(c.bookmarks),
        window.history.pushState(null, '', `#${c.recipe.id}`),
        setTimeout(function () {
          _.toggleWindow();
        }, 2500);
    } catch (t) {
      console.error('💥', t), _.renderError(t.message);
    }
  };
A.addHandlerRender(am),
  m.addHandlerRender(em),
  m.addHandlerUpdateServings(om),
  m.addHandlerAddBookmark(im),
  b.addHandlerSearch(rm),
  E.addHandlerClick(nm),
  _.addHandlerUpload(um);
//# sourceMappingURL=index.8526c742.js.map
