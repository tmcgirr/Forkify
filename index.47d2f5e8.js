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
      'resolve',
      () => o,
      t => (o = t)
    ),
      t(
        e.exports,
        'register',
        () => n,
        t => (n = t)
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
    JSON.parse('{"brTCj":"index.47d2f5e8.js","kvrLk":"icons.9801e6f1.svg"}')
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
            return R();
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var u = A(a, r);
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
  b[i] = function () {
    return this;
  };
  var w = Object.getPrototypeOf,
    S = w && w(w(I([])));
  S && S !== r && n.call(S, i) && (b = S);
  var E = (m.prototype = g.prototype = Object.create(b));
  function x(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      c(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function _(t, e) {
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
  function A(t, r) {
    var n = t.iterator[r.method];
    if (n === e) {
      if (((r.delegate = null), 'throw' === r.method)) {
        if (
          t.iterator.return &&
          ((r.method = 'return'), (r.arg = e), A(t, r), 'throw' === r.method)
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
  function I(t) {
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
    return { next: R };
  }
  function R() {
    return { value: e, done: !0 };
  }
  return (
    (y.prototype = E.constructor = m),
    (m.constructor = y),
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
    x(_.prototype),
    (_.prototype[a] = function () {
      return this;
    }),
    (t.AsyncIterator = _),
    (t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new _(s(e, r, n, o), i);
      return t.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    x(E),
    c(E, u, 'Generator'),
    (E[i] = function () {
      return this;
    }),
    (E.toString = function () {
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
    (t.values = I),
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
          (this.delegate = { iterator: I(t), resultName: r, nextLoc: n }),
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
  Function('r', 'regeneratorRuntime = r')(a);
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
var S = new (class extends y {
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
var x = new (class extends y {
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
var _,
  A,
  k = new (class extends y {
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
  })(),
  O = {},
  T = function (t) {
    return t && t.Math == Math && t;
  };
O =
  T('object' == typeof globalThis && globalThis) ||
  T('object' == typeof window && window) ||
  T('object' == typeof self && self) ||
  T('object' == typeof r && r) ||
  Function('return this')();
var I, R, M;
I = !(R = function (t) {
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
var j = {}.propertyIsEnumerable,
  L = Object.getOwnPropertyDescriptor,
  P = L && !j.call({ 1: 2 }, 1);
M = P
  ? function (t) {
      var e = L(this, t);
      return !!e && e.enumerable;
    }
  : j;
var F;
F = function (t, e) {
  return {
    enumerable: !(1 & t),
    configurable: !(2 & t),
    writable: !(4 & t),
    value: e,
  };
};
var N,
  U,
  C = {},
  $ = {}.toString;
U = function (t) {
  return $.call(t).slice(8, -1);
};
var D = ''.split;
C = R(function () {
  return !Object('z').propertyIsEnumerable(0);
})
  ? function (t) {
      return 'String' == U(t) ? D.call(t, '') : Object(t);
    }
  : Object;
var q;
(q = function (t) {
  if (null == t) throw TypeError("Can't call method on " + t);
  return t;
}),
  (N = function (t) {
    return C(q(t));
  });
var B, z;
(z = function (t) {
  return 'object' == typeof t ? null !== t : 'function' == typeof t;
}),
  (B = function (t, e) {
    if (!z(t)) return t;
    var r, n;
    if (e && 'function' == typeof (r = t.toString) && !z((n = r.call(t))))
      return n;
    if ('function' == typeof (r = t.valueOf) && !z((n = r.call(t)))) return n;
    if (!e && 'function' == typeof (r = t.toString) && !z((n = r.call(t))))
      return n;
    throw TypeError("Can't convert object to primitive value");
  });
var W,
  V = {}.hasOwnProperty;
W = function (t, e) {
  return V.call(t, e);
};
var H,
  G,
  Y = O.document,
  J = z(Y) && z(Y.createElement);
(G = function (t) {
  return J ? Y.createElement(t) : {};
}),
  (H =
    !I &&
    !R(function () {
      return (
        7 !=
        Object.defineProperty(G('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var X,
  K,
  Q = Object.getOwnPropertyDescriptor,
  Z = (A = I
    ? Q
    : function (t, e) {
        if (((t = N(t)), (e = B(e, !0)), H))
          try {
            return Q(t, e);
          } catch (t) {}
        if (W(t, e)) return F(!M.call(t, e), t[e]);
      }),
  tt = {};
K = function (t) {
  if (!z(t)) throw TypeError(String(t) + ' is not an object');
  return t;
};
var et = Object.defineProperty;
(X = I
  ? et
  : function (t, e, r) {
      if ((K(t), (e = B(e, !0)), K(r), H))
        try {
          return et(t, e, r);
        } catch (t) {}
      if ('get' in r || 'set' in r) throw TypeError('Accessors not supported');
      return 'value' in r && (t[e] = r.value), t;
    }),
  (tt = I
    ? function (t, e, r) {
        return X(t, e, F(1, r));
      }
    : function (t, e, r) {
        return (t[e] = r), t;
      });
var rt, nt;
nt = function (t, e) {
  try {
    tt(O, t, e);
  } catch (r) {
    O[t] = e;
  }
  return e;
};
var ot = {},
  it = {},
  at = O['__core-js_shared__'] || nt('__core-js_shared__', {});
it = at;
var ut = Function.toString;
'function' != typeof it.inspectSource &&
  (it.inspectSource = function (t) {
    return ut.call(t);
  }),
  (ot = it.inspectSource);
var ct,
  st,
  ft = O.WeakMap;
st = 'function' == typeof ft && /native code/.test(ot(ft));
var lt, ht;
(ht = function (t, e) {
  return it[t] || (it[t] = void 0 !== e ? e : {});
})('versions', []).push({
  version: '3.6.5',
  mode: 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
});
var pt,
  dt = 0,
  vt = Math.random();
pt = function (t) {
  return (
    'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++dt + vt).toString(36)
  );
};
var gt = ht('keys');
lt = function (t) {
  return gt[t] || (gt[t] = pt(t));
};
var yt = {};
yt = {};
var mt,
  bt,
  wt,
  St = O.WeakMap;
if (st) {
  var Et = new St(),
    xt = Et.get,
    _t = Et.has,
    At = Et.set;
  (mt = function (t, e) {
    return At.call(Et, t, e), e;
  }),
    (bt = function (t) {
      return xt.call(Et, t) || {};
    }),
    (wt = function (t) {
      return _t.call(Et, t);
    });
} else {
  var kt = lt('state');
  (yt[kt] = !0),
    (mt = function (t, e) {
      return tt(t, kt, e), e;
    }),
    (bt = function (t) {
      return W(t, kt) ? t[kt] : {};
    }),
    (wt = function (t) {
      return W(t, kt);
    });
}
var Ot = (ct = {
    set: mt,
    get: bt,
    has: wt,
    enforce: function (t) {
      return wt(t) ? bt(t) : mt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var r;
        if (!z(e) || (r = bt(e)).type !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required');
        return r;
      };
    },
  }).get,
  Tt = ct.enforce,
  It = String(String).split('String');
(rt = function (t, e, r, n) {
  var o = !!n && !!n.unsafe,
    i = !!n && !!n.enumerable,
    a = !!n && !!n.noTargetGet;
  'function' == typeof r &&
    ('string' != typeof e || W(r, 'name') || tt(r, 'name', e),
    (Tt(r).source = It.join('string' == typeof e ? e : ''))),
    t !== O
      ? (o ? !a && t[e] && (i = !0) : delete t[e], i ? (t[e] = r) : tt(t, e, r))
      : i
      ? (t[e] = r)
      : nt(e, r);
})(Function.prototype, 'toString', function () {
  return ('function' == typeof this && Ot(this).source) || ot(this);
});
var Rt,
  Mt,
  jt = {},
  Lt = {};
Lt = O;
var Pt,
  Ft = function (t) {
    return 'function' == typeof t ? t : void 0;
  };
Mt = function (t, e) {
  return arguments.length < 2
    ? Ft(Lt[t]) || Ft(O[t])
    : (Lt[t] && Lt[t][e]) || (O[t] && O[t][e]);
};
var Nt,
  Ut,
  Ct,
  $t,
  Dt = Math.ceil,
  qt = Math.floor;
$t = function (t) {
  return isNaN((t = +t)) ? 0 : (t > 0 ? qt : Dt)(t);
};
var Bt = Math.min;
Ct = function (t) {
  return t > 0 ? Bt($t(t), 9007199254740991) : 0;
};
var zt,
  Wt = Math.max,
  Vt = Math.min;
zt = function (t, e) {
  var r = $t(t);
  return r < 0 ? Wt(r + e, 0) : Vt(r, e);
};
var Ht = function (t) {
    return function (e, r, n) {
      var o,
        i = N(e),
        a = Ct(i.length),
        u = zt(n, a);
      if (t && r != r) {
        for (; a > u; ) if ((o = i[u++]) != o) return !0;
      } else
        for (; a > u; u++) if ((t || u in i) && i[u] === r) return t || u || 0;
      return !t && -1;
    };
  },
  Gt = (Ut = { includes: Ht(!0), indexOf: Ht(!1) }).indexOf;
Nt = function (t, e) {
  var r,
    n = N(t),
    o = 0,
    i = [];
  for (r in n) !W(yt, r) && W(n, r) && i.push(r);
  for (; e.length > o; ) W(n, (r = e[o++])) && (~Gt(i, r) || i.push(r));
  return i;
};
var Yt,
  Jt = {},
  Xt = (Jt = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ]).concat('length', 'prototype');
(Pt =
  Object.getOwnPropertyNames ||
  function (t) {
    return Nt(t, Xt);
  }),
  (Yt = Object.getOwnPropertySymbols),
  (jt =
    Mt('Reflect', 'ownKeys') ||
    function (t) {
      var e = Pt(K(t)),
        r = Yt;
      return r ? e.concat(r(t)) : e;
    }),
  (Rt = function (t, e) {
    for (var r = jt(e), n = X, o = A, i = 0; i < r.length; i++) {
      var a = r[i];
      W(t, a) || n(t, a, o(e, a));
    }
  });
var Kt = {},
  Qt = /#|\.prototype\./,
  Zt = function (t, e) {
    var r = ee[te(t)];
    return r == ne || (r != re && ('function' == typeof e ? R(e) : !!e));
  },
  te = (Zt.normalize = function (t) {
    return String(t).replace(Qt, '.').toLowerCase();
  }),
  ee = (Zt.data = {}),
  re = (Zt.NATIVE = 'N'),
  ne = (Zt.POLYFILL = 'P');
(Kt = Zt),
  (_ = function (t, e) {
    var r,
      n,
      o,
      i,
      a,
      u = t.target,
      c = t.global,
      s = t.stat;
    if ((r = c ? O : s ? O[u] || nt(u, {}) : (O[u] || {}).prototype))
      for (n in e) {
        if (
          ((i = e[n]),
          (o = t.noTargetGet ? (a = Z(r, n)) && a.value : r[n]),
          !Kt(c ? n : u + (s ? '.' : '#') + n, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Rt(i, o);
        }
        (t.sham || (o && o.sham)) && tt(i, 'sham', !0), rt(r, n, i, t);
      }
  });
var oe, ie;
ie =
  (oe =
    !!Object.getOwnPropertySymbols &&
    !R(function () {
      return !String(Symbol());
    })) &&
  !Symbol.sham &&
  'symbol' == typeof Symbol.iterator;
var ae = {};
ae =
  Array.isArray ||
  function (t) {
    return 'Array' == U(t);
  };
var ue;
ue = function (t) {
  return Object(q(t));
};
var ce = {},
  se = {},
  fe = {};
(fe =
  Object.keys ||
  function (t) {
    return Nt(t, Jt);
  }),
  (se = I
    ? Object.defineProperties
    : function (t, e) {
        K(t);
        for (var r, n = fe(e), o = n.length, i = 0; o > i; )
          X(t, (r = n[i++]), e[r]);
        return t;
      });
var le = {};
le = Mt('document', 'documentElement');
var he,
  pe,
  de = lt('IE_PROTO'),
  ve = function () {},
  ge = function (t) {
    return '<script>' + t + '</script>';
  },
  ye = function () {
    try {
      he = document.domain && new ActiveXObject('htmlfile');
    } catch (t) {}
    var t, e;
    ye = he
      ? (function (t) {
          t.write(ge('')), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(he)
      : (((e = G('iframe')).style.display = 'none'),
        le.appendChild(e),
        (e.src = String('javascript:')),
        (t = e.contentWindow.document).open(),
        t.write(ge('document.F=Object')),
        t.close(),
        t.F);
    for (var r = Jt.length; r--; ) delete ye.prototype[Jt[r]];
    return ye();
  };
(yt[de] = !0),
  (ce =
    Object.create ||
    function (t, e) {
      var r;
      return (
        null !== t
          ? ((ve.prototype = K(t)),
            (r = new ve()),
            (ve.prototype = null),
            (r[de] = t))
          : (r = ye()),
        void 0 === e ? r : se(r, e)
      );
    });
var me = Pt,
  be = {}.toString,
  we =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [];
pe = function (t) {
  return we && '[object Window]' == be.call(t)
    ? (function (t) {
        try {
          return me(t);
        } catch (t) {
          return we.slice();
        }
      })(t)
    : me(N(t));
};
var Se,
  Ee,
  xe = ht('wks'),
  _e = O.Symbol,
  Ae = ie ? _e : (_e && _e.withoutSetter) || pt;
Ee = Se = function (t) {
  return (
    W(xe, t) ||
      (oe && W(_e, t) ? (xe[t] = _e[t]) : (xe[t] = Ae('Symbol.' + t))),
    xe[t]
  );
};
var ke,
  Oe = X;
ke = function (t) {
  var e = Lt.Symbol || (Lt.Symbol = {});
  W(e, t) || Oe(e, t, { value: Ee(t) });
};
var Te,
  Ie = X,
  Re = Se('toStringTag');
Te = function (t, e, r) {
  t &&
    !W((t = r ? t : t.prototype), Re) &&
    Ie(t, Re, { configurable: !0, value: e });
};
var Me, je, Le;
(Le = function (t) {
  if ('function' != typeof t) throw TypeError(String(t) + ' is not a function');
  return t;
}),
  (je = function (t, e, r) {
    if ((Le(t), void 0 === e)) return t;
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
var Pe,
  Fe = Se('species');
Pe = function (t, e) {
  var r;
  return (
    ae(t) &&
      ('function' != typeof (r = t.constructor) ||
      (r !== Array && !ae(r.prototype))
        ? z(r) && null === (r = r[Fe]) && (r = void 0)
        : (r = void 0)),
    new (void 0 === r ? Array : r)(0 === e ? 0 : e)
  );
};
var Ne = [].push,
  Ue = function (t) {
    var e = 1 == t,
      r = 2 == t,
      n = 3 == t,
      o = 4 == t,
      i = 6 == t,
      a = 5 == t || i;
    return function (u, c, s, f) {
      for (
        var l,
          h,
          p = ue(u),
          d = C(p),
          v = je(c, s, 3),
          g = Ct(d.length),
          y = 0,
          m = f || Pe,
          b = e ? m(u, g) : r ? m(u, 0) : void 0;
        g > y;
        y++
      )
        if ((a || y in d) && ((h = v((l = d[y]), y, p)), t))
          if (e) b[y] = h;
          else if (h)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return l;
              case 6:
                return y;
              case 2:
                Ne.call(b, l);
            }
          else if (o) return !1;
      return i ? -1 : n || o ? o : b;
    };
  },
  Ce = (Me = {
    forEach: Ue(0),
    map: Ue(1),
    filter: Ue(2),
    some: Ue(3),
    every: Ue(4),
    find: Ue(5),
    findIndex: Ue(6),
  }).forEach,
  $e = lt('hidden'),
  De = Se('toPrimitive'),
  qe = ct.set,
  Be = ct.getterFor('Symbol'),
  ze = Object.prototype,
  We = O.Symbol,
  Ve = Mt('JSON', 'stringify'),
  He = A,
  Ge = X,
  Ye = pe,
  Je = M,
  Xe = ht('symbols'),
  Ke = ht('op-symbols'),
  Qe = ht('string-to-symbol-registry'),
  Ze = ht('symbol-to-string-registry'),
  tr = ht('wks'),
  er = O.QObject,
  rr = !er || !er.prototype || !er.prototype.findChild,
  nr =
    I &&
    R(function () {
      return (
        7 !=
        ce(
          Ge({}, 'a', {
            get: function () {
              return Ge(this, 'a', { value: 7 }).a;
            },
          })
        ).a
      );
    })
      ? function (t, e, r) {
          var n = He(ze, e);
          n && delete ze[e], Ge(t, e, r), n && t !== ze && Ge(ze, e, n);
        }
      : Ge,
  or = function (t, e) {
    var r = (Xe[t] = ce(We.prototype));
    return (
      qe(r, { type: 'Symbol', tag: t, description: e }),
      I || (r.description = e),
      r
    );
  },
  ir = ie
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        return Object(t) instanceof We;
      },
  ar = function (t, e, r) {
    t === ze && ar(Ke, e, r), K(t);
    var n = B(e, !0);
    return (
      K(r),
      W(Xe, n)
        ? (r.enumerable
            ? (W(t, $e) && t[$e][n] && (t[$e][n] = !1),
              (r = ce(r, { enumerable: F(0, !1) })))
            : (W(t, $e) || Ge(t, $e, F(1, {})), (t[$e][n] = !0)),
          nr(t, n, r))
        : Ge(t, n, r)
    );
  },
  ur = function (t, e) {
    K(t);
    var r = N(e),
      n = fe(r).concat(lr(r));
    return (
      Ce(n, function (e) {
        (I && !cr.call(r, e)) || ar(t, e, r[e]);
      }),
      t
    );
  },
  cr = function (t) {
    var e = B(t, !0),
      r = Je.call(this, e);
    return (
      !(this === ze && W(Xe, e) && !W(Ke, e)) &&
      (!(r || !W(this, e) || !W(Xe, e) || (W(this, $e) && this[$e][e])) || r)
    );
  },
  sr = function (t, e) {
    var r = N(t),
      n = B(e, !0);
    if (r !== ze || !W(Xe, n) || W(Ke, n)) {
      var o = He(r, n);
      return (
        !o || !W(Xe, n) || (W(r, $e) && r[$e][n]) || (o.enumerable = !0), o
      );
    }
  },
  fr = function (t) {
    var e = Ye(N(t)),
      r = [];
    return (
      Ce(e, function (t) {
        W(Xe, t) || W(yt, t) || r.push(t);
      }),
      r
    );
  },
  lr = function (t) {
    var e = t === ze,
      r = Ye(e ? Ke : N(t)),
      n = [];
    return (
      Ce(r, function (t) {
        !W(Xe, t) || (e && !W(ze, t)) || n.push(Xe[t]);
      }),
      n
    );
  };
if (
  (oe ||
    (rt(
      (We = function () {
        if (this instanceof We) throw TypeError('Symbol is not a constructor');
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = pt(t),
          r = function (t) {
            this === ze && r.call(Ke, t),
              W(this, $e) && W(this[$e], e) && (this[$e][e] = !1),
              nr(this, e, F(1, t));
          };
        return I && rr && nr(ze, e, { configurable: !0, set: r }), or(e, t);
      }).prototype,
      'toString',
      function () {
        return Be(this).tag;
      }
    ),
    rt(We, 'withoutSetter', function (t) {
      return or(pt(t), t);
    }),
    (M = cr),
    (X = ar),
    (A = sr),
    (Pt = pe = fr),
    (Yt = lr),
    (Ee = function (t) {
      return or(Se(t), t);
    }),
    I &&
      (Ge(We.prototype, 'description', {
        configurable: !0,
        get: function () {
          return Be(this).description;
        },
      }),
      rt(ze, 'propertyIsEnumerable', cr, { unsafe: !0 }))),
  _({ global: !0, wrap: !0, forced: !oe, sham: !oe }, { Symbol: We }),
  Ce(fe(tr), function (t) {
    ke(t);
  }),
  _(
    { target: 'Symbol', stat: !0, forced: !oe },
    {
      for: function (t) {
        var e = String(t);
        if (W(Qe, e)) return Qe[e];
        var r = We(e);
        return (Qe[e] = r), (Ze[r] = e), r;
      },
      keyFor: function (t) {
        if (!ir(t)) throw TypeError(t + ' is not a symbol');
        if (W(Ze, t)) return Ze[t];
      },
      useSetter: function () {
        rr = !0;
      },
      useSimple: function () {
        rr = !1;
      },
    }
  ),
  _(
    { target: 'Object', stat: !0, forced: !oe, sham: !I },
    {
      create: function (t, e) {
        return void 0 === e ? ce(t) : ur(ce(t), e);
      },
      defineProperty: ar,
      defineProperties: ur,
      getOwnPropertyDescriptor: sr,
    }
  ),
  _(
    { target: 'Object', stat: !0, forced: !oe },
    { getOwnPropertyNames: fr, getOwnPropertySymbols: lr }
  ),
  _(
    {
      target: 'Object',
      stat: !0,
      forced: R(function () {
        Yt(1);
      }),
    },
    {
      getOwnPropertySymbols: function (t) {
        return Yt(ue(t));
      },
    }
  ),
  Ve)
) {
  var hr =
    !oe ||
    R(function () {
      var t = We();
      return (
        '[null]' != Ve([t]) || '{}' != Ve({ a: t }) || '{}' != Ve(Object(t))
      );
    });
  _(
    { target: 'JSON', stat: !0, forced: hr },
    {
      stringify: function (t, e, r) {
        for (var n, o = [t], i = 1; arguments.length > i; )
          o.push(arguments[i++]);
        if (((n = e), (z(e) || void 0 !== t) && !ir(t)))
          return (
            ae(e) ||
              (e = function (t, e) {
                if (
                  ('function' == typeof n && (e = n.call(this, t, e)), !ir(e))
                )
                  return e;
              }),
            (o[1] = e),
            Ve.apply(null, o)
          );
      },
    }
  );
}
We.prototype[De] || tt(We.prototype, De, We.prototype.valueOf),
  Te(We, 'Symbol'),
  (yt[$e] = !0),
  ke('asyncIterator');
var pr = X,
  dr = O.Symbol;
if (
  I &&
  'function' == typeof dr &&
  (!('description' in dr.prototype) || void 0 !== dr().description)
) {
  var vr = {},
    gr = function () {
      var t =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        e = this instanceof gr ? new dr(t) : void 0 === t ? dr() : dr(t);
      return '' === t && (vr[e] = !0), e;
    };
  Rt(gr, dr);
  var yr = (gr.prototype = dr.prototype);
  yr.constructor = gr;
  var mr = yr.toString,
    br = 'Symbol(test)' == String(dr('test')),
    wr = /^Symbol\((.*)\)[^)]+$/;
  pr(yr, 'description', {
    configurable: !0,
    get: function () {
      var t = z(this) ? this.valueOf() : this,
        e = mr.call(t);
      if (W(vr, t)) return '';
      var r = br ? e.slice(7, -1) : e.replace(wr, '$1');
      return '' === r ? void 0 : r;
    },
  }),
    _({ global: !0, forced: !0 }, { Symbol: gr });
}
ke('hasInstance'),
  ke('isConcatSpreadable'),
  ke('iterator'),
  ke('match'),
  ke('matchAll'),
  ke('replace'),
  ke('search'),
  ke('species'),
  ke('split'),
  ke('toPrimitive'),
  ke('toStringTag'),
  ke('unscopables');
var Sr = {},
  Er = Object.assign,
  xr = Object.defineProperty;
(Sr =
  !Er ||
  R(function () {
    if (
      I &&
      1 !==
        Er(
          { b: 1 },
          Er(
            xr({}, 'a', {
              enumerable: !0,
              get: function () {
                xr(this, 'b', { value: 3, enumerable: !1 });
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
      7 != Er({}, t)[r] || fe(Er({}, e)).join('') != n
    );
  })
    ? function (t, e) {
        for (var r = ue(t), n = arguments.length, o = 1, i = Yt, a = M; n > o; )
          for (
            var u,
              c = C(arguments[o++]),
              s = i ? fe(c).concat(i(c)) : fe(c),
              f = s.length,
              l = 0;
            f > l;

          )
            (u = s[l++]), (I && !a.call(c, u)) || (r[u] = c[u]);
        return r;
      }
    : Er),
  _(
    { target: 'Object', stat: !0, forced: Object.assign !== Sr },
    { assign: Sr }
  ),
  _({ target: 'Object', stat: !0, sham: !I }, { create: ce }),
  _(
    { target: 'Object', stat: !0, forced: !I, sham: !I },
    { defineProperty: X }
  ),
  _(
    { target: 'Object', stat: !0, forced: !I, sham: !I },
    { defineProperties: se }
  );
var _r,
  Ar = M,
  kr = function (t) {
    return function (e) {
      for (var r, n = N(e), o = fe(n), i = o.length, a = 0, u = []; i > a; )
        (r = o[a++]), (I && !Ar.call(n, r)) || u.push(t ? [r, n[r]] : n[r]);
      return u;
    };
  },
  Or = (_r = { entries: kr(!0), values: kr(!1) }).entries;
_(
  { target: 'Object', stat: !0 },
  {
    entries: function (t) {
      return Or(t);
    },
  }
);
var Tr;
Tr = !R(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});
var Ir = {},
  Rr = X,
  Mr = pt('meta'),
  jr = 0,
  Lr =
    Object.isExtensible ||
    function () {
      return !0;
    },
  Pr = function (t) {
    Rr(t, Mr, { value: { objectID: 'O' + ++jr, weakData: {} } });
  },
  Fr = (Ir = {
    REQUIRED: !1,
    fastKey: function (t, e) {
      if (!z(t))
        return 'symbol' == typeof t
          ? t
          : ('string' == typeof t ? 'S' : 'P') + t;
      if (!W(t, Mr)) {
        if (!Lr(t)) return 'F';
        if (!e) return 'E';
        Pr(t);
      }
      return t[Mr].objectID;
    },
    getWeakData: function (t, e) {
      if (!W(t, Mr)) {
        if (!Lr(t)) return !0;
        if (!e) return !1;
        Pr(t);
      }
      return t[Mr].weakData;
    },
    onFreeze: function (t) {
      return Tr && Fr.REQUIRED && Lr(t) && !W(t, Mr) && Pr(t), t;
    },
  });
yt[Mr] = !0;
var Nr = Ir.onFreeze,
  Ur = Object.freeze,
  Cr = R(function () {
    Ur(1);
  });
_(
  { target: 'Object', stat: !0, forced: Cr, sham: !Tr },
  {
    freeze: function (t) {
      return Ur && z(t) ? Ur(Nr(t)) : t;
    },
  }
);
var $r,
  Dr,
  qr = {};
qr = {};
var Br = Se('iterator'),
  zr = Array.prototype;
Dr = function (t) {
  return void 0 !== t && (qr.Array === t || zr[Br] === t);
};
var Wr,
  Vr,
  Hr = {},
  Gr = {};
(Gr[Se('toStringTag')] = 'z'), (Vr = '[object z]' === String(Gr));
var Yr = Se('toStringTag'),
  Jr =
    'Arguments' ==
    U(
      (function () {
        return arguments;
      })()
    );
Hr = Vr
  ? U
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
          })((e = Object(t)), Yr))
        ? r
        : Jr
        ? U(e)
        : 'Object' == (n = U(e)) && 'function' == typeof e.callee
        ? 'Arguments'
        : n;
    };
var Xr = Se('iterator');
Wr = function (t) {
  if (null != t) return t[Xr] || t['@@iterator'] || qr[Hr(t)];
};
var Kr;
Kr = function (t, e, r, n) {
  try {
    return n ? e(K(r)[0], r[1]) : e(r);
  } catch (e) {
    var o = t.return;
    throw (void 0 !== o && K(o.call(t)), e);
  }
};
var Qr = function (t, e) {
  (this.stopped = t), (this.result = e);
};
($r = function (t, e, r, n, o) {
  var i,
    a,
    u,
    c,
    s,
    f,
    l,
    h = je(e, r, n ? 2 : 1);
  if (o) i = t;
  else {
    if ('function' != typeof (a = Wr(t)))
      throw TypeError('Target is not iterable');
    if (Dr(a)) {
      for (u = 0, c = Ct(t.length); c > u; u++)
        if ((s = n ? h(K((l = t[u]))[0], l[1]) : h(t[u])) && s instanceof Qr)
          return s;
      return new Qr(!1);
    }
    i = a.call(t);
  }
  for (f = i.next; !(l = f.call(i)).done; )
    if ('object' == typeof (s = Kr(i, h, l.value, n)) && s && s instanceof Qr)
      return s;
  return new Qr(!1);
}).stop = function (t) {
  return new Qr(!0, t);
};
var Zr;
(Zr = function (t, e, r) {
  var n = B(e);
  n in t ? X(t, n, F(0, r)) : (t[n] = r);
}),
  _(
    { target: 'Object', stat: !0 },
    {
      fromEntries: function (t) {
        var e = {};
        return (
          $r(
            t,
            function (t, r) {
              Zr(e, t, r);
            },
            void 0,
            !0
          ),
          e
        );
      },
    }
  );
var tn = A,
  en = R(function () {
    tn(1);
  });
_(
  { target: 'Object', stat: !0, forced: !I || en, sham: !I },
  {
    getOwnPropertyDescriptor: function (t, e) {
      return tn(N(t), e);
    },
  }
),
  _(
    { target: 'Object', stat: !0, sham: !I },
    {
      getOwnPropertyDescriptors: function (t) {
        for (
          var e, r, n = N(t), o = A, i = jt(n), a = {}, u = 0;
          i.length > u;

        )
          void 0 !== (r = o(n, (e = i[u++]))) && Zr(a, e, r);
        return a;
      },
    }
  );
var rn = pe,
  nn = R(function () {
    return !Object.getOwnPropertyNames(1);
  });
_({ target: 'Object', stat: !0, forced: nn }, { getOwnPropertyNames: rn });
var on,
  an = {};
on = !R(function () {
  function t() {}
  return (
    (t.prototype.constructor = null),
    Object.getPrototypeOf(new t()) !== t.prototype
  );
});
var un = lt('IE_PROTO'),
  cn = Object.prototype;
an = on
  ? Object.getPrototypeOf
  : function (t) {
      return (
        (t = ue(t)),
        W(t, un)
          ? t[un]
          : 'function' == typeof t.constructor && t instanceof t.constructor
          ? t.constructor.prototype
          : t instanceof Object
          ? cn
          : null
      );
    };
var sn = R(function () {
  an(1);
});
_(
  { target: 'Object', stat: !0, forced: sn, sham: !on },
  {
    getPrototypeOf: function (t) {
      return an(ue(t));
    },
  }
);
var fn = {};
(fn =
  Object.is ||
  function (t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
  }),
  _({ target: 'Object', stat: !0 }, { is: fn });
var ln = Object.isExtensible,
  hn = R(function () {
    ln(1);
  });
_(
  { target: 'Object', stat: !0, forced: hn },
  {
    isExtensible: function (t) {
      return !!z(t) && (!ln || ln(t));
    },
  }
);
var pn = Object.isFrozen,
  dn = R(function () {
    pn(1);
  });
_(
  { target: 'Object', stat: !0, forced: dn },
  {
    isFrozen: function (t) {
      return !z(t) || (!!pn && pn(t));
    },
  }
);
var vn = Object.isSealed,
  gn = R(function () {
    vn(1);
  });
_(
  { target: 'Object', stat: !0, forced: gn },
  {
    isSealed: function (t) {
      return !z(t) || (!!vn && vn(t));
    },
  }
);
var yn = R(function () {
  fe(1);
});
_(
  { target: 'Object', stat: !0, forced: yn },
  {
    keys: function (t) {
      return fe(ue(t));
    },
  }
);
var mn = Ir.onFreeze,
  bn = Object.preventExtensions,
  wn = R(function () {
    bn(1);
  });
_(
  { target: 'Object', stat: !0, forced: wn, sham: !Tr },
  {
    preventExtensions: function (t) {
      return bn && z(t) ? bn(mn(t)) : t;
    },
  }
);
var Sn = Ir.onFreeze,
  En = Object.seal,
  xn = R(function () {
    En(1);
  });
_(
  { target: 'Object', stat: !0, forced: xn, sham: !Tr },
  {
    seal: function (t) {
      return En && z(t) ? En(Sn(t)) : t;
    },
  }
);
var _n,
  An = {};
(_n = function (t) {
  if (!z(t) && null !== t)
    throw TypeError("Can't set " + String(t) + ' as a prototype');
  return t;
}),
  (An =
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
            return K(r), _n(n), e ? t.call(r, n) : (r.__proto__ = n), r;
          };
        })()
      : void 0)),
  _({ target: 'Object', stat: !0 }, { setPrototypeOf: An });
var kn = _r.values;
_(
  { target: 'Object', stat: !0 },
  {
    values: function (t) {
      return kn(t);
    },
  }
);
var On;
(On = Vr
  ? {}.toString
  : function () {
      return '[object ' + Hr(this) + ']';
    }),
  Vr || rt(Object.prototype, 'toString', On, { unsafe: !0 });
var Tn;
(Tn = !R(function () {
  var t = Math.random();
  __defineSetter__.call(null, t, function () {}), delete O[t];
})),
  I &&
    _(
      { target: 'Object', proto: !0, forced: Tn },
      {
        __defineGetter__: function (t, e) {
          X(ue(this), t, { get: Le(e), enumerable: !0, configurable: !0 });
        },
      }
    ),
  I &&
    _(
      { target: 'Object', proto: !0, forced: Tn },
      {
        __defineSetter__: function (t, e) {
          X(ue(this), t, { set: Le(e), enumerable: !0, configurable: !0 });
        },
      }
    );
var In = A;
I &&
  _(
    { target: 'Object', proto: !0, forced: Tn },
    {
      __lookupGetter__: function (t) {
        var e,
          r = ue(this),
          n = B(t, !0);
        do {
          if ((e = In(r, n))) return e.get;
        } while ((r = an(r)));
      },
    }
  );
var Rn = A;
I &&
  _(
    { target: 'Object', proto: !0, forced: Tn },
    {
      __lookupSetter__: function (t) {
        var e,
          r = ue(this),
          n = B(t, !0);
        do {
          if ((e = Rn(r, n))) return e.set;
        } while ((r = an(r)));
      },
    }
  );
var Mn = {},
  jn = [].slice,
  Ln = {},
  Pn = function (t, e, r) {
    if (!(e in Ln)) {
      for (var n = [], o = 0; o < e; o++) n[o] = 'a[' + o + ']';
      Ln[e] = Function('C,a', 'return new C(' + n.join(',') + ')');
    }
    return Ln[e](t, r);
  };
(Mn =
  Function.bind ||
  function (t) {
    var e = Le(this),
      r = jn.call(arguments, 1),
      n = function () {
        var o = r.concat(jn.call(arguments));
        return this instanceof n ? Pn(e, o.length, o) : e.apply(t, o);
      };
    return z(e.prototype) && (n.prototype = e.prototype), n;
  }),
  _({ target: 'Function', proto: !0 }, { bind: Mn });
var Fn = X,
  Nn = Function.prototype,
  Un = Nn.toString,
  Cn = /^\s*function ([^ (]*)/;
I &&
  !('name' in Nn) &&
  Fn(Nn, 'name', {
    configurable: !0,
    get: function () {
      try {
        return Un.call(this).match(Cn)[1];
      } catch (t) {
        return '';
      }
    },
  });
var $n = Se('hasInstance'),
  Dn = Function.prototype;
$n in Dn ||
  X(Dn, $n, {
    value: function (t) {
      if ('function' != typeof this || !z(t)) return !1;
      if (!z(this.prototype)) return t instanceof this;
      for (; (t = an(t)); ) if (this.prototype === t) return !0;
      return !1;
    },
  }),
  _({ global: !0 }, { globalThis: O });
var qn;
qn = function (t) {
  var e,
    r,
    n,
    o,
    i,
    a,
    u = ue(t),
    c = 'function' == typeof this ? this : Array,
    s = arguments.length,
    f = s > 1 ? arguments[1] : void 0,
    l = void 0 !== f,
    h = Wr(u),
    p = 0;
  if (
    (l && (f = je(f, s > 2 ? arguments[2] : void 0, 2)),
    null == h || (c == Array && Dr(h)))
  )
    for (r = new c((e = Ct(u.length))); e > p; p++)
      (a = l ? f(u[p], p) : u[p]), Zr(r, p, a);
  else
    for (i = (o = h.call(u)).next, r = new c(); !(n = i.call(o)).done; p++)
      (a = l ? Kr(o, f, [n.value, p], !0) : n.value), Zr(r, p, a);
  return (r.length = p), r;
};
var Bn,
  zn = Se('iterator'),
  Wn = !1;
try {
  var Vn = 0,
    Hn = {
      next: function () {
        return { done: !!Vn++ };
      },
      return: function () {
        Wn = !0;
      },
    };
  (Hn[zn] = function () {
    return this;
  }),
    Array.from(Hn, function () {
      throw 2;
    });
} catch (t) {}
var Gn = !(Bn = function (t, e) {
  if (!e && !Wn) return !1;
  var r = !1;
  try {
    var n = {};
    (n[zn] = function () {
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
_({ target: 'Array', stat: !0, forced: Gn }, { from: qn }),
  _({ target: 'Array', stat: !0 }, { isArray: ae });
var Yn = R(function () {
  function t() {}
  return !(Array.of.call(t) instanceof t);
});
_(
  { target: 'Array', stat: !0, forced: Yn },
  {
    of: function () {
      for (
        var t = 0,
          e = arguments.length,
          r = new ('function' == typeof this ? this : Array)(e);
        e > t;

      )
        Zr(r, t, arguments[t++]);
      return (r.length = e), r;
    },
  }
);
var Jn,
  Xn,
  Kn = {};
Kn = Mt('navigator', 'userAgent') || '';
var Qn,
  Zn,
  to = O.process,
  eo = to && to.versions,
  ro = eo && eo.v8;
ro
  ? (Zn = (Qn = ro.split('.'))[0] + Qn[1])
  : Kn &&
    (!(Qn = Kn.match(/Edge\/(\d+)/)) || Qn[1] >= 74) &&
    (Qn = Kn.match(/Chrome\/(\d+)/)) &&
    (Zn = Qn[1]),
  (Xn = Zn && +Zn);
var no = Se('species');
Jn = function (t) {
  return (
    Xn >= 51 ||
    !R(function () {
      var e = [];
      return (
        ((e.constructor = {})[no] = function () {
          return { foo: 1 };
        }),
        1 !== e[t](Boolean).foo
      );
    })
  );
};
var oo = Se('isConcatSpreadable'),
  io =
    Xn >= 51 ||
    !R(function () {
      var t = [];
      return (t[oo] = !1), t.concat()[0] !== t;
    }),
  ao = Jn('concat'),
  uo = function (t) {
    if (!z(t)) return !1;
    var e = t[oo];
    return void 0 !== e ? !!e : ae(t);
  };
_(
  { target: 'Array', proto: !0, forced: !io || !ao },
  {
    concat: function (t) {
      var e,
        r,
        n,
        o,
        i,
        a = ue(this),
        u = Pe(a, 0),
        c = 0;
      for (e = -1, n = arguments.length; e < n; e++)
        if (uo((i = -1 === e ? a : arguments[e]))) {
          if (c + (o = Ct(i.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          for (r = 0; r < o; r++, c++) r in i && Zr(u, c, i[r]);
        } else {
          if (c >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          Zr(u, c++, i);
        }
      return (u.length = c), u;
    },
  }
);
var co = {},
  so = Math.min;
co =
  [].copyWithin ||
  function (t, e) {
    var r = ue(this),
      n = Ct(r.length),
      o = zt(t, n),
      i = zt(e, n),
      a = arguments.length > 2 ? arguments[2] : void 0,
      u = so((void 0 === a ? n : zt(a, n)) - i, n - o),
      c = 1;
    for (
      i < o && o < i + u && ((c = -1), (i += u - 1), (o += u - 1));
      u-- > 0;

    )
      i in r ? (r[o] = r[i]) : delete r[o], (o += c), (i += c);
    return r;
  };
var fo,
  lo = Se('unscopables'),
  ho = Array.prototype;
null == ho[lo] && X(ho, lo, { configurable: !0, value: ce(null) }),
  (fo = function (t) {
    ho[lo][t] = !0;
  }),
  _({ target: 'Array', proto: !0 }, { copyWithin: co }),
  fo('copyWithin');
var po,
  vo = Me.every;
po = function (t, e) {
  var r = [][t];
  return (
    !!r &&
    R(function () {
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
};
var go,
  yo = Object.defineProperty,
  mo = {},
  bo = function (t) {
    throw t;
  };
go = function (t, e) {
  if (W(mo, t)) return mo[t];
  e || (e = {});
  var r = [][t],
    n = !!W(e, 'ACCESSORS') && e.ACCESSORS,
    o = W(e, 0) ? e[0] : bo,
    i = W(e, 1) ? e[1] : void 0;
  return (mo[t] =
    !!r &&
    !R(function () {
      if (n && !I) return !0;
      var t = { length: -1 };
      n ? yo(t, 1, { enumerable: !0, get: bo }) : (t[1] = 1), r.call(t, o, i);
    }));
};
var wo = po('every'),
  So = go('every');
_(
  { target: 'Array', proto: !0, forced: !wo || !So },
  {
    every: function (t) {
      return vo(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Eo;
_(
  { target: 'Array', proto: !0 },
  {
    fill: (Eo = function (t) {
      for (
        var e = ue(this),
          r = Ct(e.length),
          n = arguments.length,
          o = zt(n > 1 ? arguments[1] : void 0, r),
          i = n > 2 ? arguments[2] : void 0,
          a = void 0 === i ? r : zt(i, r);
        a > o;

      )
        e[o++] = t;
      return e;
    }),
  }
),
  fo('fill');
var xo = Me.filter,
  _o = Jn('filter'),
  Ao = go('filter');
_(
  { target: 'Array', proto: !0, forced: !_o || !Ao },
  {
    filter: function (t) {
      return xo(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var ko = Me.find,
  Oo = !0,
  To = go('find');
'find' in [] &&
  Array(1).find(function () {
    Oo = !1;
  }),
  _(
    { target: 'Array', proto: !0, forced: Oo || !To },
    {
      find: function (t) {
        return ko(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  fo('find');
var Io = Me.findIndex,
  Ro = !0,
  Mo = go('findIndex');
'findIndex' in [] &&
  Array(1).findIndex(function () {
    Ro = !1;
  }),
  _(
    { target: 'Array', proto: !0, forced: Ro || !Mo },
    {
      findIndex: function (t) {
        return Io(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  fo('findIndex');
var jo = {},
  Lo = function (t, e, r, n, o, i, a, u) {
    for (var c, s = o, f = 0, l = !!a && je(a, u, 3); f < n; ) {
      if (f in r) {
        if (((c = l ? l(r[f], f, e) : r[f]), i > 0 && ae(c)))
          s = Lo(t, e, c, Ct(c.length), s, i - 1) - 1;
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
(jo = Lo),
  _(
    { target: 'Array', proto: !0 },
    {
      flat: function () {
        var t = arguments.length ? arguments[0] : void 0,
          e = ue(this),
          r = Ct(e.length),
          n = Pe(e, 0);
        return (n.length = jo(n, e, e, r, 0, void 0 === t ? 1 : $t(t))), n;
      },
    }
  ),
  _(
    { target: 'Array', proto: !0 },
    {
      flatMap: function (t) {
        var e,
          r = ue(this),
          n = Ct(r.length);
        return (
          Le(t),
          ((e = Pe(r, 0)).length = jo(
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
var Po,
  Fo = Me.forEach,
  No = po('forEach'),
  Uo = go('forEach');
_(
  {
    target: 'Array',
    proto: !0,
    forced:
      [].forEach !=
      (Po =
        No && Uo
          ? [].forEach
          : function (t) {
              return Fo(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }),
  },
  { forEach: Po }
);
var Co = Ut.includes,
  $o = go('indexOf', { ACCESSORS: !0, 1: 0 });
_(
  { target: 'Array', proto: !0, forced: !$o },
  {
    includes: function (t) {
      return Co(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  fo('includes');
var Do = Ut.indexOf,
  qo = [].indexOf,
  Bo = !!qo && 1 / [1].indexOf(1, -0) < 0,
  zo = po('indexOf'),
  Wo = go('indexOf', { ACCESSORS: !0, 1: 0 });
_(
  { target: 'Array', proto: !0, forced: Bo || !zo || !Wo },
  {
    indexOf: function (t) {
      return Bo
        ? qo.apply(this, arguments) || 0
        : Do(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Vo = [].join,
  Ho = C != Object,
  Go = po('join', ',');
_(
  { target: 'Array', proto: !0, forced: Ho || !Go },
  {
    join: function (t) {
      return Vo.call(N(this), void 0 === t ? ',' : t);
    },
  }
);
var Yo = {},
  Jo = Math.min,
  Xo = [].lastIndexOf,
  Ko = !!Xo && 1 / [1].lastIndexOf(1, -0) < 0,
  Qo = po('lastIndexOf'),
  Zo = go('indexOf', { ACCESSORS: !0, 1: 0 });
_(
  {
    target: 'Array',
    proto: !0,
    forced:
      (Yo =
        Ko || !Qo || !Zo
          ? function (t) {
              if (Ko) return Xo.apply(this, arguments) || 0;
              var e = N(this),
                r = Ct(e.length),
                n = r - 1;
              for (
                arguments.length > 1 && (n = Jo(n, $t(arguments[1]))),
                  n < 0 && (n = r + n);
                n >= 0;
                n--
              )
                if (n in e && e[n] === t) return n || 0;
              return -1;
            }
          : Xo) !== [].lastIndexOf,
  },
  { lastIndexOf: Yo }
);
var ti = Me.map,
  ei = Jn('map'),
  ri = go('map');
_(
  { target: 'Array', proto: !0, forced: !ei || !ri },
  {
    map: function (t) {
      return ti(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var ni,
  oi = function (t) {
    return function (e, r, n, o) {
      Le(r);
      var i = ue(e),
        a = C(i),
        u = Ct(i.length),
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
  ii = (ni = { left: oi(!1), right: oi(!0) }).left,
  ai = po('reduce'),
  ui = go('reduce', { 1: 0 });
_(
  { target: 'Array', proto: !0, forced: !ai || !ui },
  {
    reduce: function (t) {
      return ii(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
var ci = ni.right,
  si = po('reduceRight'),
  fi = go('reduce', { 1: 0 });
_(
  { target: 'Array', proto: !0, forced: !si || !fi },
  {
    reduceRight: function (t) {
      return ci(
        this,
        t,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
var li = [].reverse,
  hi = [1, 2];
_(
  { target: 'Array', proto: !0, forced: String(hi) === String(hi.reverse()) },
  {
    reverse: function () {
      return ae(this) && (this.length = this.length), li.call(this);
    },
  }
);
var pi = Jn('slice'),
  di = go('slice', { ACCESSORS: !0, 0: 0, 1: 2 }),
  vi = Se('species'),
  gi = [].slice,
  yi = Math.max;
_(
  { target: 'Array', proto: !0, forced: !pi || !di },
  {
    slice: function (t, e) {
      var r,
        n,
        o,
        i = N(this),
        a = Ct(i.length),
        u = zt(t, a),
        c = zt(void 0 === e ? a : e, a);
      if (
        ae(i) &&
        ('function' != typeof (r = i.constructor) ||
        (r !== Array && !ae(r.prototype))
          ? z(r) && null === (r = r[vi]) && (r = void 0)
          : (r = void 0),
        r === Array || void 0 === r)
      )
        return gi.call(i, u, c);
      for (
        n = new (void 0 === r ? Array : r)(yi(c - u, 0)), o = 0;
        u < c;
        u++, o++
      )
        u in i && Zr(n, o, i[u]);
      return (n.length = o), n;
    },
  }
);
var mi = Me.some,
  bi = po('some'),
  wi = go('some');
_(
  { target: 'Array', proto: !0, forced: !bi || !wi },
  {
    some: function (t) {
      return mi(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
);
var Si = [],
  Ei = Si.sort,
  xi = R(function () {
    Si.sort(void 0);
  }),
  _i = R(function () {
    Si.sort(null);
  }),
  Ai = po('sort');
_(
  { target: 'Array', proto: !0, forced: xi || !_i || !Ai },
  {
    sort: function (t) {
      return void 0 === t ? Ei.call(ue(this)) : Ei.call(ue(this), Le(t));
    },
  }
);
var ki = Jn('splice'),
  Oi = go('splice', { ACCESSORS: !0, 0: 0, 1: 2 }),
  Ti = Math.max,
  Ii = Math.min;
_(
  { target: 'Array', proto: !0, forced: !ki || !Oi },
  {
    splice: function (t, e) {
      var r,
        n,
        o,
        i,
        a,
        u,
        c = ue(this),
        s = Ct(c.length),
        f = zt(t, s),
        l = arguments.length;
      if (
        (0 === l
          ? (r = n = 0)
          : 1 === l
          ? ((r = 0), (n = s - f))
          : ((r = l - 2), (n = Ii(Ti($t(e), 0), s - f))),
        s + r - n > 9007199254740991)
      )
        throw TypeError('Maximum allowed length exceeded');
      for (o = Pe(c, n), i = 0; i < n; i++) (a = f + i) in c && Zr(o, i, c[a]);
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
);
var Ri,
  Mi = Se('species');
(Ri = function (t) {
  var e = Mt(t),
    r = X;
  I &&
    e &&
    !e[Mi] &&
    r(e, Mi, {
      configurable: !0,
      get: function () {
        return this;
      },
    });
})('Array'),
  fo('flat'),
  fo('flatMap');
var ji,
  Li,
  Pi,
  Fi,
  Ni,
  Ui,
  Ci,
  $i = Se('iterator'),
  Di = !1;
[].keys &&
  ('next' in (Ci = [].keys())
    ? (Ui = an(an(Ci))) !== Object.prototype && (Ni = Ui)
    : (Di = !0)),
  null == Ni && (Ni = {}),
  W(Ni, $i) ||
    tt(Ni, $i, function () {
      return this;
    });
var qi = (Fi = { IteratorPrototype: Ni, BUGGY_SAFARI_ITERATORS: Di })
    .IteratorPrototype,
  Bi = function () {
    return this;
  };
Pi = function (t, e, r) {
  var n = e + ' Iterator';
  return (
    (t.prototype = ce(qi, { next: F(1, r) })), Te(t, n, !1), (qr[n] = Bi), t
  );
};
var zi = Fi.IteratorPrototype,
  Wi = Fi.BUGGY_SAFARI_ITERATORS,
  Vi = Se('iterator'),
  Hi = function () {
    return this;
  };
Li = function (t, e, r, n, o, i, a) {
  Pi(r, e, n);
  var u,
    c,
    s,
    f = function (t) {
      if (t === o && v) return v;
      if (!Wi && t in p) return p[t];
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
    d = p[Vi] || p['@@iterator'] || (o && p[o]),
    v = (!Wi && d) || f(o),
    g = ('Array' == e && p.entries) || d;
  if (
    (g &&
      ((u = an(g.call(new t()))),
      zi !== Object.prototype &&
        u.next &&
        (an(u) !== zi &&
          (An ? An(u, zi) : 'function' != typeof u[Vi] && tt(u, Vi, Hi)),
        Te(u, l, !0))),
    'values' == o &&
      d &&
      'values' !== d.name &&
      ((h = !0),
      (v = function () {
        return d.call(this);
      })),
    p[Vi] !== v && tt(p, Vi, v),
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
      Wi || h || !(s in p)
        ? rt(p, s, c[s])
        : _({ target: e, proto: !0, forced: Wi || h }, c);
  return c;
};
var Gi = ct.set,
  Yi = ct.getterFor('Array Iterator');
(ji = Li(
  Array,
  'Array',
  function (t, e) {
    Gi(this, { type: 'Array Iterator', target: N(t), index: 0, kind: e });
  },
  function () {
    var t = Yi(this),
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
  fo('keys'),
  fo('values'),
  fo('entries');
var Ji = String.fromCharCode,
  Xi = String.fromCodePoint,
  Ki = !!Xi && 1 != Xi.length;
_(
  { target: 'String', stat: !0, forced: Ki },
  {
    fromCodePoint: function (t) {
      for (var e, r = [], n = arguments.length, o = 0; n > o; ) {
        if (((e = +arguments[o++]), zt(e, 1114111) !== e))
          throw RangeError(e + ' is not a valid code point');
        r.push(
          e < 65536
            ? Ji(e)
            : Ji(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320)
        );
      }
      return r.join('');
    },
  }
),
  _(
    { target: 'String', stat: !0 },
    {
      raw: function (t) {
        for (
          var e = N(t.raw),
            r = Ct(e.length),
            n = arguments.length,
            o = [],
            i = 0;
          r > i;

        )
          o.push(String(e[i++])), i < n && o.push(String(arguments[i]));
        return o.join('');
      },
    }
  );
var Qi,
  Zi = function (t) {
    return function (e, r) {
      var n,
        o,
        i = String(q(e)),
        a = $t(r),
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
  ta = (Qi = { codeAt: Zi(!1), charAt: Zi(!0) }).codeAt;
_(
  { target: 'String', proto: !0 },
  {
    codePointAt: function (t) {
      return ta(this, t);
    },
  }
);
var ea,
  ra,
  na = A,
  oa = Se('match');
(ra = function (t) {
  var e;
  return z(t) && (void 0 !== (e = t[oa]) ? !!e : 'RegExp' == U(t));
}),
  (ea = function (t) {
    if (ra(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  });
var ia,
  aa = Se('match');
ia = function (t) {
  var e = /./;
  try {
    '/./'[t](e);
  } catch (r) {
    try {
      return (e[aa] = !1), '/./'[t](e);
    } catch (t) {}
  }
  return !1;
};
var ua,
  ca = ''.endsWith,
  sa = Math.min,
  fa = ia('endsWith'),
  la = !(fa || ((ua = na(String.prototype, 'endsWith')), !ua || ua.writable));
_(
  { target: 'String', proto: !0, forced: !la && !fa },
  {
    endsWith: function (t) {
      var e = String(q(this));
      ea(t);
      var r = arguments.length > 1 ? arguments[1] : void 0,
        n = Ct(e.length),
        o = void 0 === r ? n : sa(Ct(r), n),
        i = String(t);
      return ca ? ca.call(e, i, o) : e.slice(o - i.length, o) === i;
    },
  }
),
  _(
    { target: 'String', proto: !0, forced: !ia('includes') },
    {
      includes: function (t) {
        return !!~String(q(this)).indexOf(
          ea(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
var ha,
  pa,
  da,
  va,
  ga = {};
function ya(t, e) {
  return RegExp(t, e);
}
(pa = function () {
  var t = K(this),
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
}),
  (va = R(function () {
    var t = ya('a', 'y');
    return (t.lastIndex = 2), null != t.exec('abcd');
  })),
  (da = R(function () {
    var t = ya('^r', 'gy');
    return (t.lastIndex = 2), null != t.exec('str');
  }));
var ma,
  ba,
  wa = RegExp.prototype.exec,
  Sa = String.prototype.replace,
  Ea = wa,
  xa =
    ((ma = /a/),
    (ba = /b*/g),
    wa.call(ma, 'a'),
    wa.call(ba, 'a'),
    0 !== ma.lastIndex || 0 !== ba.lastIndex),
  _a = va || da,
  Aa = void 0 !== /()??/.exec('')[1];
(xa || Aa || _a) &&
  (Ea = function (t) {
    var e,
      r,
      n,
      o,
      i = this,
      a = _a && i.sticky,
      u = pa.call(i),
      c = i.source,
      s = 0,
      f = t;
    return (
      a &&
        (-1 === (u = u.replace('y', '')).indexOf('g') && (u += 'g'),
        (f = String(t).slice(i.lastIndex)),
        i.lastIndex > 0 &&
          (!i.multiline || (i.multiline && '\n' !== t[i.lastIndex - 1])) &&
          ((c = '(?: ' + c + ')'), (f = ' ' + f), s++),
        (r = new RegExp('^(?:' + c + ')', u))),
      Aa && (r = new RegExp('^' + c + '$(?!\\s)', u)),
      xa && (e = i.lastIndex),
      (n = wa.call(a ? r : i, f)),
      a
        ? n
          ? ((n.input = n.input.slice(s)),
            (n[0] = n[0].slice(s)),
            (n.index = i.lastIndex),
            (i.lastIndex += n[0].length))
          : (i.lastIndex = 0)
        : xa && n && (i.lastIndex = i.global ? n.index + n[0].length : e),
      Aa &&
        n &&
        n.length > 1 &&
        Sa.call(n[0], r, function () {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (n[o] = void 0);
        }),
      n
    );
  }),
  _(
    { target: 'RegExp', proto: !0, forced: /./.exec !== (ga = Ea) },
    { exec: ga }
  );
var ka,
  Oa = Se('species'),
  Ta = !R(function () {
    var t = /./;
    return (
      (t.exec = function () {
        var t = [];
        return (t.groups = { a: '7' }), t;
      }),
      '7' !== ''.replace(t, '$<a>')
    );
  }),
  Ia = '$0' === 'a'.replace(/./, '$0'),
  Ra = Se('replace'),
  Ma = !!/./[Ra] && '' === /./[Ra]('a', '$0'),
  ja = !R(function () {
    var t = /(?:)/,
      e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    var r = 'ab'.split(t);
    return 2 !== r.length || 'a' !== r[0] || 'b' !== r[1];
  }),
  La = Qi.charAt;
ka = function (t, e, r) {
  return e + (r ? La(t, e).length : 1);
};
var Pa;
(Pa = function (t, e) {
  var r = t.exec;
  if ('function' == typeof r) {
    var n = r.call(t, e);
    if ('object' != typeof n)
      throw TypeError(
        'RegExp exec method returned something other than an Object or null'
      );
    return n;
  }
  if ('RegExp' !== U(t))
    throw TypeError('RegExp#exec called on incompatible receiver');
  return ga.call(t, e);
}),
  (ha = function (t, e, r, n) {
    var o = Se(t),
      i = !R(function () {
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
        !R(function () {
          var e = !1,
            r = /a/;
          return (
            'split' === t &&
              (((r = {}).constructor = {}),
              (r.constructor[Oa] = function () {
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
    if (
      !i ||
      !a ||
      ('replace' === t && (!Ta || !Ia || Ma)) ||
      ('split' === t && !ja)
    ) {
      var u = /./[o],
        c = r(
          o,
          ''[t],
          function (t, e, r, n, o) {
            return e.exec === ga
              ? i && !o
                ? { done: !0, value: u.call(e, r, n) }
                : { done: !0, value: t.call(r, e, n) }
              : { done: !1 };
          },
          {
            REPLACE_KEEPS_$0: Ia,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ma,
          }
        ),
        s = c[0],
        f = c[1];
      rt(String.prototype, t, s),
        rt(
          RegExp.prototype,
          o,
          2 == e
            ? function (t, e) {
                return f.call(t, this, e);
              }
            : function (t) {
                return f.call(t, this);
              }
        );
    }
    n && tt(RegExp.prototype[o], 'sham', !0);
  })('match', 1, function (t, e, r) {
    return [
      function (e) {
        var r = q(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
      },
      function (t) {
        var n = r(e, t, this);
        if (n.done) return n.value;
        var o = K(t),
          i = String(this);
        if (!o.global) return Pa(o, i);
        var a = o.unicode;
        o.lastIndex = 0;
        for (var u, c = [], s = 0; null !== (u = Pa(o, i)); ) {
          var f = String(u[0]);
          (c[s] = f),
            '' === f && (o.lastIndex = ka(i, Ct(o.lastIndex), a)),
            s++;
        }
        return 0 === s ? null : c;
      },
    ];
  });
var Fa,
  Na = Se('species');
Fa = function (t, e) {
  var r,
    n = K(t).constructor;
  return void 0 === n || null == (r = K(n)[Na]) ? e : Le(r);
};
var Ua = Se('matchAll'),
  Ca = ct.set,
  $a = ct.getterFor('RegExp String Iterator'),
  Da = RegExp.prototype,
  qa = Da.exec,
  Ba = ''.matchAll,
  za =
    !!Ba &&
    !R(function () {
      'a'.matchAll(/./);
    }),
  Wa = Pi(
    function (t, e, r, n) {
      Ca(this, {
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
      var t = $a(this);
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
          return qa.call(t, e);
        })(e, r);
      return null === n
        ? { value: void 0, done: (t.done = !0) }
        : t.global
        ? ('' == String(n[0]) &&
            (e.lastIndex = ka(r, Ct(e.lastIndex), t.unicode)),
          { value: n, done: !1 })
        : ((t.done = !0), { value: n, done: !1 });
    }
  ),
  Va = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u = K(this),
      c = String(t);
    return (
      (e = Fa(u, RegExp)),
      void 0 === (r = u.flags) &&
        u instanceof RegExp &&
        !('flags' in Da) &&
        (r = pa.call(u)),
      (n = void 0 === r ? '' : String(r)),
      (o = new e(e === RegExp ? u.source : u, n)),
      (i = !!~n.indexOf('g')),
      (a = !!~n.indexOf('u')),
      (o.lastIndex = Ct(u.lastIndex)),
      new Wa(o, c, i, a)
    );
  };
_(
  { target: 'String', proto: !0, forced: za },
  {
    matchAll: function (t) {
      var e,
        r,
        n = q(this);
      if (null != t) {
        if (
          ra(t) &&
          !~String(q('flags' in Da ? t.flags : pa.call(t))).indexOf('g')
        )
          throw TypeError('`.matchAll` does not allow non-global regexes');
        if (za) return Ba.apply(n, arguments);
        if (null != (r = t[Ua])) return Le(r).call(t, n);
      } else if (za) return Ba.apply(n, arguments);
      return (e = String(n)), new RegExp(t, 'g')[Ua](e);
    },
  }
),
  Ua in Da || tt(Da, Ua, Va);
var Ha,
  Ga = {};
Ga =
  ''.repeat ||
  function (t) {
    var e = String(q(this)),
      r = '',
      n = $t(t);
    if (n < 0 || n == 1 / 0) throw RangeError('Wrong number of repetitions');
    for (; n > 0; n >>>= 1, e += e) 1 & n && (r += e);
    return r;
  };
var Ya,
  Ja = Math.ceil,
  Xa = function (t) {
    return function (e, r, n) {
      var o,
        i,
        a = String(q(e)),
        u = a.length,
        c = void 0 === n ? ' ' : String(n),
        s = Ct(r);
      return s <= u || '' == c
        ? a
        : ((o = s - u),
          (i = Ga.call(c, Ja(o / c.length))).length > o && (i = i.slice(0, o)),
          t ? a + i : i + a);
    };
  },
  Ka = (Ha = { start: Xa(!1), end: Xa(!0) }).end;
(Ya = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Kn)),
  _(
    { target: 'String', proto: !0, forced: Ya },
    {
      padEnd: function (t) {
        return Ka(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
var Qa = Ha.start;
_(
  { target: 'String', proto: !0, forced: Ya },
  {
    padStart: function (t) {
      return Qa(this, t, arguments.length > 1 ? arguments[1] : void 0);
    },
  }
),
  _({ target: 'String', proto: !0 }, { repeat: Ga });
var Za = Math.max,
  tu = Math.min,
  eu = Math.floor,
  ru = /\$([$&'`]|\d\d?|<[^>]*>)/g,
  nu = /\$([$&'`]|\d\d?)/g;
ha('replace', 2, function (t, e, r, n) {
  var o = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
    i = n.REPLACE_KEEPS_$0,
    a = o ? '$' : '$0';
  function u(t, r, n, o, i, a) {
    var u = n + t.length,
      c = o.length,
      s = nu;
    return (
      void 0 !== i && ((i = ue(i)), (s = ru)),
      e.call(a, s, function (e, a) {
        var s;
        switch (a.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return t;
          case '`':
            return r.slice(0, n);
          case "'":
            return r.slice(u);
          case '<':
            s = i[a.slice(1, -1)];
            break;
          default:
            var f = +a;
            if (0 === f) return e;
            if (f > c) {
              var l = eu(f / 10);
              return 0 === l
                ? e
                : l <= c
                ? void 0 === o[l - 1]
                  ? a.charAt(1)
                  : o[l - 1] + a.charAt(1)
                : e;
            }
            s = o[f - 1];
        }
        return void 0 === s ? '' : s;
      })
    );
  }
  return [
    function (r, n) {
      var o = q(this),
        i = null == r ? void 0 : r[t];
      return void 0 !== i ? i.call(r, o, n) : e.call(String(o), r, n);
    },
    function (t, n) {
      if ((!o && i) || ('string' == typeof n && -1 === n.indexOf(a))) {
        var c = r(e, t, this, n);
        if (c.done) return c.value;
      }
      var s = K(t),
        f = String(this),
        l = 'function' == typeof n;
      l || (n = String(n));
      var h = s.global;
      if (h) {
        var p = s.unicode;
        s.lastIndex = 0;
      }
      for (var d = []; ; ) {
        var v = Pa(s, f);
        if (null === v) break;
        if ((d.push(v), !h)) break;
        '' === String(v[0]) && (s.lastIndex = ka(f, Ct(s.lastIndex), p));
      }
      for (var g, y = '', m = 0, b = 0; b < d.length; b++) {
        v = d[b];
        for (
          var w = String(v[0]),
            S = Za(tu($t(v.index), f.length), 0),
            E = [],
            x = 1;
          x < v.length;
          x++
        )
          E.push(void 0 === (g = v[x]) ? g : String(g));
        var _ = v.groups;
        if (l) {
          var A = [w].concat(E, S, f);
          void 0 !== _ && A.push(_);
          var k = String(n.apply(void 0, A));
        } else k = u(w, f, S, E, _, n);
        S >= m && ((y += f.slice(m, S) + k), (m = S + w.length));
      }
      return y + f.slice(m);
    },
  ];
}),
  ha('search', 1, function (t, e, r) {
    return [
      function (e) {
        var r = q(this),
          n = null == e ? void 0 : e[t];
        return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r));
      },
      function (t) {
        var n = r(e, t, this);
        if (n.done) return n.value;
        var o = K(t),
          i = String(this),
          a = o.lastIndex;
        fn(a, 0) || (o.lastIndex = 0);
        var u = Pa(o, i);
        return (
          fn(o.lastIndex, a) || (o.lastIndex = a), null === u ? -1 : u.index
        );
      },
    ];
  });
var ou = [].push,
  iu = Math.min,
  au = !R(function () {
    return !RegExp(4294967295, 'y');
  });
ha(
  'split',
  2,
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
              var n = String(q(this)),
                o = void 0 === r ? 4294967295 : r >>> 0;
              if (0 === o) return [];
              if (void 0 === t) return [n];
              if (!ra(t)) return e.call(n, t, o);
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
                (i = ga.call(l, n)) &&
                !(
                  (a = l.lastIndex) > f &&
                  (c.push(n.slice(f, i.index)),
                  i.length > 1 && i.index < n.length && ou.apply(c, i.slice(1)),
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
          var o = q(this),
            i = null == e ? void 0 : e[t];
          return void 0 !== i ? i.call(e, o, r) : n.call(String(o), e, r);
        },
        function (t, o) {
          var i = r(n, t, this, o, n !== e);
          if (i.done) return i.value;
          var a = K(t),
            u = String(this),
            c = Fa(a, RegExp),
            s = a.unicode,
            f =
              (a.ignoreCase ? 'i' : '') +
              (a.multiline ? 'm' : '') +
              (a.unicode ? 'u' : '') +
              (au ? 'y' : 'g'),
            l = new c(au ? a : '^(?:' + a.source + ')', f),
            h = void 0 === o ? 4294967295 : o >>> 0;
          if (0 === h) return [];
          if (0 === u.length) return null === Pa(l, u) ? [u] : [];
          for (var p = 0, d = 0, v = []; d < u.length; ) {
            l.lastIndex = au ? d : 0;
            var g,
              y = Pa(l, au ? u : u.slice(d));
            if (
              null === y ||
              (g = iu(Ct(l.lastIndex + (au ? 0 : d)), u.length)) === p
            )
              d = ka(u, d, s);
            else {
              if ((v.push(u.slice(p, d)), v.length === h)) return v;
              for (var m = 1; m <= y.length - 1; m++)
                if ((v.push(y[m]), v.length === h)) return v;
              d = p = g;
            }
          }
          return v.push(u.slice(p)), v;
        },
      ]
    );
  },
  !au
);
var uu = A,
  cu = ''.startsWith,
  su = Math.min,
  fu = ia('startsWith'),
  lu =
    !fu &&
    !!(function () {
      var t = uu(String.prototype, 'startsWith');
      return t && !t.writable;
    })();
_(
  { target: 'String', proto: !0, forced: !lu && !fu },
  {
    startsWith: function (t) {
      var e = String(q(this));
      ea(t);
      var r = Ct(su(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        n = String(t);
      return cu ? cu.call(e, n, r) : e.slice(r, r + n.length) === n;
    },
  }
);
var hu;
var pu,
  du = RegExp(
    '^[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*'
  ),
  vu = RegExp(
    '[\t\n\v\f\r                　\u2028\u2029\ufeff][\t\n\v\f\r                　\u2028\u2029\ufeff]*$'
  ),
  gu = function (t) {
    return function (e) {
      var r = String(q(e));
      return (
        1 & t && (r = r.replace(du, '')), 2 & t && (r = r.replace(vu, '')), r
      );
    };
  },
  yu = (hu = { start: gu(1), end: gu(2), trim: gu(3) }).trim;
_(
  {
    target: 'String',
    proto: !0,
    forced: (pu = function (t) {
      return R(function () {
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
      return yu(this);
    },
  }
);
var mu = hu.start,
  bu = pu('trimStart'),
  wu = bu
    ? function () {
        return mu(this);
      }
    : ''.trimStart;
_({ target: 'String', proto: !0, forced: bu }, { trimStart: wu, trimLeft: wu });
var Su = hu.end,
  Eu = pu('trimEnd'),
  xu = Eu
    ? function () {
        return Su(this);
      }
    : ''.trimEnd;
_({ target: 'String', proto: !0, forced: Eu }, { trimEnd: xu, trimRight: xu });
var _u = Qi.charAt,
  Au = ct.set,
  ku = ct.getterFor('String Iterator');
Li(
  String,
  'String',
  function (t) {
    Au(this, { type: 'String Iterator', string: String(t), index: 0 });
  },
  function () {
    var t,
      e = ku(this),
      r = e.string,
      n = e.index;
    return n >= r.length
      ? { value: void 0, done: !0 }
      : ((t = _u(r, n)), (e.index += t.length), { value: t, done: !1 });
  }
);
var Ou,
  Tu = /"/g;
Ou = function (t, e, r, n) {
  var o = String(q(t)),
    i = '<' + e;
  return (
    '' !== r && (i += ' ' + r + '="' + String(n).replace(Tu, '&quot;') + '"'),
    i + '>' + o + '</' + e + '>'
  );
};
var Iu;
_(
  {
    target: 'String',
    proto: !0,
    forced: (Iu = function (t) {
      return R(function () {
        var e = ''[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    })('anchor'),
  },
  {
    anchor: function (t) {
      return Ou(this, 'a', 'name', t);
    },
  }
),
  _(
    { target: 'String', proto: !0, forced: Iu('big') },
    {
      big: function () {
        return Ou(this, 'big', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('blink') },
    {
      blink: function () {
        return Ou(this, 'blink', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('bold') },
    {
      bold: function () {
        return Ou(this, 'b', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('fixed') },
    {
      fixed: function () {
        return Ou(this, 'tt', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('fontcolor') },
    {
      fontcolor: function (t) {
        return Ou(this, 'font', 'color', t);
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('fontsize') },
    {
      fontsize: function (t) {
        return Ou(this, 'font', 'size', t);
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('italics') },
    {
      italics: function () {
        return Ou(this, 'i', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('link') },
    {
      link: function (t) {
        return Ou(this, 'a', 'href', t);
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('small') },
    {
      small: function () {
        return Ou(this, 'small', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('strike') },
    {
      strike: function () {
        return Ou(this, 'strike', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('sub') },
    {
      sub: function () {
        return Ou(this, 'sub', '', '');
      },
    }
  ),
  _(
    { target: 'String', proto: !0, forced: Iu('sup') },
    {
      sup: function () {
        return Ou(this, 'sup', '', '');
      },
    }
  );
var Ru;
Ru = function (t, e, r) {
  var n, o;
  return (
    An &&
      'function' == typeof (n = e.constructor) &&
      n !== r &&
      z((o = n.prototype)) &&
      o !== r.prototype &&
      An(t, o),
    t
  );
};
var Mu = X,
  ju = Pt,
  Lu = ct.set,
  Pu = Se('match'),
  Fu = O.RegExp,
  Nu = Fu.prototype,
  Uu = /a/g,
  Cu = /a/g,
  $u = new Fu(Uu) !== Uu,
  Du = va;
if (
  I &&
  Kt(
    'RegExp',
    !$u ||
      Du ||
      R(function () {
        return (
          (Cu[Pu] = !1), Fu(Uu) != Uu || Fu(Cu) == Cu || '/a/i' != Fu(Uu, 'i')
        );
      })
  )
) {
  for (
    var qu = function (t, e) {
        var r,
          n = this instanceof qu,
          o = ra(t),
          i = void 0 === e;
        if (!n && o && t.constructor === qu && i) return t;
        $u
          ? o && !i && (t = t.source)
          : t instanceof qu && (i && (e = pa.call(t)), (t = t.source)),
          Du && (r = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''));
        var a = Ru($u ? new Fu(t, e) : Fu(t, e), n ? this : Nu, qu);
        return Du && r && Lu(a, { sticky: r }), a;
      },
      Bu = function (t) {
        (t in qu) ||
          Mu(qu, t, {
            configurable: !0,
            get: function () {
              return Fu[t];
            },
            set: function (e) {
              Fu[t] = e;
            },
          });
      },
      zu = ju(Fu),
      Wu = 0;
    zu.length > Wu;

  )
    Bu(zu[Wu++]);
  (Nu.constructor = qu), (qu.prototype = Nu), rt(O, 'RegExp', qu);
}
Ri('RegExp'),
  I &&
    ('g' != /./g.flags || va) &&
    X(RegExp.prototype, 'flags', { configurable: !0, get: pa });
var Vu = va,
  Hu = X,
  Gu = ct.get,
  Yu = RegExp.prototype;
I &&
  Vu &&
  Hu(RegExp.prototype, 'sticky', {
    configurable: !0,
    get: function () {
      if (this !== Yu) {
        if (this instanceof RegExp) return !!Gu(this).sticky;
        throw TypeError('Incompatible receiver, RegExp required');
      }
    },
  });
var Ju,
  Xu,
  Ku =
    ((Ju = !1),
    ((Xu = /[ac]/).exec = function () {
      return (Ju = !0), /./.exec.apply(this, arguments);
    }),
    !0 === Xu.test('abc') && Ju),
  Qu = /./.test;
_(
  { target: 'RegExp', proto: !0, forced: !Ku },
  {
    test: function (t) {
      if ('function' != typeof this.exec) return Qu.call(this, t);
      var e = this.exec(t);
      if (null !== e && !z(e))
        throw new Error(
          'RegExp exec method returned something other than an Object or null'
        );
      return !!e;
    },
  }
);
var Zu = RegExp.prototype,
  tc = Zu.toString,
  ec = R(function () {
    return '/a/b' != tc.call({ source: 'a', flags: 'b' });
  }),
  rc = 'toString' != tc.name;
(ec || rc) &&
  rt(
    RegExp.prototype,
    'toString',
    function () {
      var t = K(this),
        e = String(t.source),
        r = t.flags;
      return (
        '/' +
        e +
        '/' +
        String(
          void 0 === r && t instanceof RegExp && !('flags' in Zu)
            ? pa.call(t)
            : r
        )
      );
    },
    { unsafe: !0 }
  );
var nc,
  oc = hu.trim,
  ic = O.parseInt,
  ac = /^[+-]?0[Xx]/;
(nc =
  8 !== ic('\t\n\v\f\r                　\u2028\u2029\ufeff08') ||
  22 !== ic('\t\n\v\f\r                　\u2028\u2029\ufeff0x16')
    ? function (t, e) {
        var r = oc(String(t));
        return ic(r, e >>> 0 || (ac.test(r) ? 16 : 10));
      }
    : ic),
  _({ global: !0, forced: parseInt != nc }, { parseInt: nc });
var uc,
  cc = hu.trim,
  sc = O.parseFloat;
(uc =
  1 / sc('\t\n\v\f\r                　\u2028\u2029\ufeff-0') != -1 / 0
    ? function (t) {
        var e = cc(String(t)),
          r = sc(e);
        return 0 === r && '-' == e.charAt(0) ? -0 : r;
      }
    : sc),
  _({ global: !0, forced: parseFloat != uc }, { parseFloat: uc });
var fc = Pt,
  lc = A,
  hc = X,
  pc = hu.trim,
  dc = O.Number,
  vc = dc.prototype,
  gc = 'Number' == U(ce(vc)),
  yc = function (t) {
    var e,
      r,
      n,
      o,
      i,
      a,
      u,
      c,
      s = B(t, !1);
    if ('string' == typeof s && s.length > 2)
      if (43 === (e = (s = pc(s)).charCodeAt(0)) || 45 === e) {
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
if (Kt('Number', !dc(' 0o1') || !dc('0b1') || dc('+0x1'))) {
  for (
    var mc,
      bc = function (t) {
        var e = arguments.length < 1 ? 0 : t,
          r = this;
        return r instanceof bc &&
          (gc
            ? R(function () {
                vc.valueOf.call(r);
              })
            : 'Number' != U(r))
          ? Ru(new dc(yc(e)), r, bc)
          : yc(e);
      },
      wc = I
        ? fc(dc)
        : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
            ','
          ),
      Sc = 0;
    wc.length > Sc;
    Sc++
  )
    W(dc, (mc = wc[Sc])) && !W(bc, mc) && hc(bc, mc, lc(dc, mc));
  (bc.prototype = vc), (vc.constructor = bc), rt(O, 'Number', bc);
}
_({ target: 'Number', stat: !0 }, { EPSILON: Math.pow(2, -52) });
var Ec,
  xc = O.isFinite;
(Ec =
  Number.isFinite ||
  function (t) {
    return 'number' == typeof t && xc(t);
  }),
  _({ target: 'Number', stat: !0 }, { isFinite: Ec });
var _c,
  Ac = Math.floor;
_(
  { target: 'Number', stat: !0 },
  {
    isInteger: (_c = function (t) {
      return !z(t) && isFinite(t) && Ac(t) === t;
    }),
  }
),
  _(
    { target: 'Number', stat: !0 },
    {
      isNaN: function (t) {
        return t != t;
      },
    }
  );
var kc = Math.abs;
_(
  { target: 'Number', stat: !0 },
  {
    isSafeInteger: function (t) {
      return _c(t) && kc(t) <= 9007199254740991;
    },
  }
),
  _({ target: 'Number', stat: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 }),
  _({ target: 'Number', stat: !0 }, { MIN_SAFE_INTEGER: -9007199254740991 }),
  _(
    { target: 'Number', stat: !0, forced: Number.parseFloat != uc },
    { parseFloat: uc }
  ),
  _(
    { target: 'Number', stat: !0, forced: Number.parseInt != nc },
    { parseInt: nc }
  );
var Oc;
Oc = function (t) {
  if ('number' != typeof t && 'Number' != U(t))
    throw TypeError('Incorrect invocation');
  return +t;
};
var Tc = (1).toFixed,
  Ic = Math.floor,
  Rc = function (t, e, r) {
    return 0 === e ? r : e % 2 == 1 ? Rc(t, e - 1, r * t) : Rc(t * t, e / 2, r);
  },
  Mc =
    (Tc &&
      ('0.000' !== (8e-5).toFixed(3) ||
        '1' !== (0.9).toFixed(0) ||
        '1.25' !== (1.255).toFixed(2) ||
        '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0))) ||
    !R(function () {
      Tc.call({});
    });
_(
  { target: 'Number', proto: !0, forced: Mc },
  {
    toFixed: function (t) {
      var e,
        r,
        n,
        o,
        i = Oc(this),
        a = $t(t),
        u = [0, 0, 0, 0, 0, 0],
        c = '',
        s = '0',
        f = function (t, e) {
          for (var r = -1, n = e; ++r < 6; )
            (n += t * u[r]), (u[r] = n % 1e7), (n = Ic(n / 1e7));
        },
        l = function (t) {
          for (var e = 6, r = 0; --e >= 0; )
            (r += u[e]), (u[e] = Ic(r / t)), (r = (r % t) * 1e7);
        },
        h = function () {
          for (var t = 6, e = ''; --t >= 0; )
            if ('' !== e || 0 === t || 0 !== u[t]) {
              var r = String(u[t]);
              e = '' === e ? r : e + Ga.call('0', 7 - r.length) + r;
            }
          return e;
        };
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
              })(i * Rc(2, 69, 1)) - 69) < 0
              ? i * Rc(2, -e, 1)
              : i / Rc(2, e, 1)),
          (r *= 4503599627370496),
          (e = 52 - e) > 0)
        ) {
          for (f(0, r), n = a; n >= 7; ) f(1e7, 0), (n -= 7);
          for (f(Rc(10, n, 1), 0), n = e - 1; n >= 23; ) l(8388608), (n -= 23);
          l(1 << n), f(1, 1), l(2), (s = h());
        } else f(0, r), f(1 << -e, 0), (s = h() + Ga.call('0', a));
      return (s =
        a > 0
          ? c +
            ((o = s.length) <= a
              ? '0.' + Ga.call('0', a - o) + s
              : s.slice(0, o - a) + '.' + s.slice(o - a))
          : c + s);
    },
  }
);
var jc = (1).toPrecision,
  Lc =
    R(function () {
      return '1' !== jc.call(1, void 0);
    }) ||
    !R(function () {
      jc.call({});
    });
_(
  { target: 'Number', proto: !0, forced: Lc },
  {
    toPrecision: function (t) {
      return void 0 === t ? jc.call(Oc(this)) : jc.call(Oc(this), t);
    },
  }
);
var Pc = {},
  Fc = Math.log;
Pc =
  Math.log1p ||
  function (t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Fc(1 + t);
  };
var Nc = Math.acosh,
  Uc = Math.log,
  Cc = Math.sqrt,
  $c = Math.LN2,
  Dc = !Nc || 710 != Math.floor(Nc(Number.MAX_VALUE)) || Nc(1 / 0) != 1 / 0;
_(
  { target: 'Math', stat: !0, forced: Dc },
  {
    acosh: function (t) {
      return (t = +t) < 1
        ? NaN
        : t > 94906265.62425156
        ? Uc(t) + $c
        : Pc(t - 1 + Cc(t - 1) * Cc(t + 1));
    },
  }
);
var qc = Math.asinh,
  Bc = Math.log,
  zc = Math.sqrt;
_(
  { target: 'Math', stat: !0, forced: !(qc && 1 / qc(0) > 0) },
  {
    asinh: function t(e) {
      return isFinite((e = +e)) && 0 != e
        ? e < 0
          ? -t(-e)
          : Bc(e + zc(e * e + 1))
        : e;
    },
  }
);
var Wc = Math.atanh,
  Vc = Math.log;
_(
  { target: 'Math', stat: !0, forced: !(Wc && 1 / Wc(-0) < 0) },
  {
    atanh: function (t) {
      return 0 == (t = +t) ? t : Vc((1 + t) / (1 - t)) / 2;
    },
  }
);
var Hc = {};
Hc =
  Math.sign ||
  function (t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
  };
var Gc = Math.abs,
  Yc = Math.pow;
_(
  { target: 'Math', stat: !0 },
  {
    cbrt: function (t) {
      return Hc((t = +t)) * Yc(Gc(t), 1 / 3);
    },
  }
);
Math.floor, Math.log, Math.LOG2E;
_(
  { target: 'Math', stat: !0 },
  {
    clz32: function (t) {
      return 0, 32;
    },
  }
);
var Jc = {},
  Xc = Math.expm1,
  Kc = Math.exp;
Jc =
  !Xc ||
  Xc(10) > 22025.465794806718 ||
  Xc(10) < 22025.465794806718 ||
  -2e-17 != Xc(-2e-17)
    ? function (t) {
        return 0 == (t = +t)
          ? t
          : t > -1e-6 && t < 1e-6
          ? t + (t * t) / 2
          : Kc(t) - 1;
      }
    : Xc;
var Qc = Math.cosh,
  Zc = Math.abs,
  ts = Math.E;
_(
  { target: 'Math', stat: !0, forced: !Qc || Qc(710) === 1 / 0 },
  {
    cosh: function (t) {
      var e = Jc(Zc(t) - 1) + 1;
      return (e + 1 / (e * ts * ts)) * (ts / 2);
    },
  }
),
  _({ target: 'Math', stat: !0, forced: Jc != Math.expm1 }, { expm1: Jc });
var es,
  rs = Math.abs,
  ns = Math.pow,
  os = ns(2, -52),
  is = ns(2, -23),
  as = ns(2, 127) * (2 - is),
  us = ns(2, -126);
(es =
  Math.fround ||
  function (t) {
    var e,
      r,
      n = rs(t),
      o = Hc(t);
    return n < us
      ? o * (n / us / is + 1 / os - 1 / os) * us * is
      : (r = (e = (1 + is / os) * n) - (e - n)) > as || r != r
      ? o * (1 / 0)
      : o * r;
  }),
  _({ target: 'Math', stat: !0 }, { fround: es });
var cs = Math.hypot,
  ss = Math.abs,
  fs = Math.sqrt,
  ls = !!cs && cs(1 / 0, NaN) !== 1 / 0;
_(
  { target: 'Math', stat: !0, forced: ls },
  {
    hypot: function (t, e) {
      for (var r, n, o = 0, i = 0, a = arguments.length, u = 0; i < a; )
        u < (r = ss(arguments[i++]))
          ? ((o = o * (n = u / r) * n + 1), (u = r))
          : (o += r > 0 ? (n = r / u) * n : r);
      return u === 1 / 0 ? 1 / 0 : u * fs(o);
    },
  }
);
var hs = Math.imul,
  ps = R(function () {
    return -5 != hs(4294967295, 5) || 2 != hs.length;
  });
_(
  { target: 'Math', stat: !0, forced: ps },
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
var ds = Math.log,
  vs = Math.LOG10E;
_(
  { target: 'Math', stat: !0 },
  {
    log10: function (t) {
      return ds(t) * vs;
    },
  }
),
  _({ target: 'Math', stat: !0 }, { log1p: Pc });
var gs = Math.log,
  ys = Math.LN2;
_(
  { target: 'Math', stat: !0 },
  {
    log2: function (t) {
      return gs(t) / ys;
    },
  }
),
  _({ target: 'Math', stat: !0 }, { sign: Hc });
var ms = Math.abs,
  bs = Math.exp,
  ws = Math.E,
  Ss = R(function () {
    return -2e-17 != Math.sinh(-2e-17);
  });
_(
  { target: 'Math', stat: !0, forced: Ss },
  {
    sinh: function (t) {
      return ms((t = +t)) < 1
        ? (Jc(t) - Jc(-t)) / 2
        : (bs(t - 1) - bs(-t - 1)) * (ws / 2);
    },
  }
);
var Es = Math.exp;
_(
  { target: 'Math', stat: !0 },
  {
    tanh: function (t) {
      var e = Jc((t = +t)),
        r = Jc(-t);
      return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (Es(t) + Es(-t));
    },
  }
),
  Te(Math, 'Math', !0);
var xs = Math.ceil,
  _s = Math.floor;
_(
  { target: 'Math', stat: !0 },
  {
    trunc: function (t) {
      return (t > 0 ? _s : xs)(t);
    },
  }
),
  _(
    { target: 'Date', stat: !0 },
    {
      now: function () {
        return new Date().getTime();
      },
    }
  );
var As = R(function () {
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
_(
  { target: 'Date', proto: !0, forced: As },
  {
    toJSON: function (t) {
      var e = ue(this),
        r = B(e);
      return 'number' != typeof r || isFinite(r) ? e.toISOString() : null;
    },
  }
);
var ks,
  Os = Ha.start,
  Ts = Math.abs,
  Is = Date.prototype,
  Rs = Is.getTime,
  Ms = Is.toISOString;
(ks =
  R(function () {
    return '0385-07-25T07:06:39.999Z' != Ms.call(new Date(-50000000000001));
  }) ||
  !R(function () {
    Ms.call(new Date(NaN));
  })
    ? function () {
        if (!isFinite(Rs.call(this))) throw RangeError('Invalid time value');
        var t = this,
          e = t.getUTCFullYear(),
          r = t.getUTCMilliseconds(),
          n = e < 0 ? '-' : e > 9999 ? '+' : '';
        return (
          n +
          Os(Ts(e), n ? 6 : 4, 0) +
          '-' +
          Os(t.getUTCMonth() + 1, 2, 0) +
          '-' +
          Os(t.getUTCDate(), 2, 0) +
          'T' +
          Os(t.getUTCHours(), 2, 0) +
          ':' +
          Os(t.getUTCMinutes(), 2, 0) +
          ':' +
          Os(t.getUTCSeconds(), 2, 0) +
          '.' +
          Os(r, 3, 0) +
          'Z'
        );
      }
    : Ms),
  _(
    { target: 'Date', proto: !0, forced: Date.prototype.toISOString !== ks },
    { toISOString: ks }
  );
var js = Date.prototype,
  Ls = js.toString,
  Ps = js.getTime;
new Date(NaN) + '' != 'Invalid Date' &&
  rt(js, 'toString', function () {
    var t = Ps.call(this);
    return t == t ? Ls.call(this) : 'Invalid Date';
  });
var Fs;
Fs = function (t) {
  if ('string' !== t && 'number' !== t && 'default' !== t)
    throw TypeError('Incorrect hint');
  return B(K(this), 'number' !== t);
};
var Ns = Se('toPrimitive'),
  Us = Date.prototype;
Ns in Us || tt(Us, Ns, Fs);
var Cs = Mt('JSON', 'stringify'),
  $s = /[\uD800-\uDFFF]/g,
  Ds = /^[\uD800-\uDBFF]$/,
  qs = /^[\uDC00-\uDFFF]$/,
  Bs = function (t, e, r) {
    var n = r.charAt(e - 1),
      o = r.charAt(e + 1);
    return (Ds.test(t) && !qs.test(o)) || (qs.test(t) && !Ds.test(n))
      ? '\\u' + t.charCodeAt(0).toString(16)
      : t;
  },
  zs = R(function () {
    return (
      '"\\udf06\\ud834"' !== Cs('\udf06\ud834') || '"\\udead"' !== Cs('\udead')
    );
  });
Cs &&
  _(
    { target: 'JSON', stat: !0, forced: zs },
    {
      stringify: function (t, e, r) {
        var n = Cs.apply(null, arguments);
        return 'string' == typeof n ? n.replace($s, Bs) : n;
      },
    }
  ),
  Te(O.JSON, 'JSON', !0);
var Ws = {};
Ws = O.Promise;
var Vs;
Vs = function (t, e, r) {
  for (var n in e) rt(t, n, e[n], r);
  return t;
};
var Hs;
Hs = function (t, e, r) {
  if (!(t instanceof e))
    throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
  return t;
};
var Gs, Ys;
Ys = /(iphone|ipod|ipad).*applewebkit/i.test(Kn);
var Js,
  Xs,
  Ks,
  Qs = O.location,
  Zs = O.setImmediate,
  tf = O.clearImmediate,
  ef = O.process,
  rf = O.MessageChannel,
  nf = O.Dispatch,
  of = 0,
  af = {},
  uf = function (t) {
    if (af.hasOwnProperty(t)) {
      var e = af[t];
      delete af[t], e();
    }
  },
  cf = function (t) {
    return function () {
      uf(t);
    };
  },
  sf = function (t) {
    uf(t.data);
  },
  ff = function (t) {
    O.postMessage(t + '', Qs.protocol + '//' + Qs.host);
  };
(Zs && tf) ||
  ((Zs = function (t) {
    for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
    return (
      (af[++of] = function () {
        ('function' == typeof t ? t : Function(t)).apply(void 0, e);
      }),
      Js(of),
      of
    );
  }),
  (tf = function (t) {
    delete af[t];
  }),
  'process' == U(ef)
    ? (Js = function (t) {
        ef.nextTick(cf(t));
      })
    : nf && nf.now
    ? (Js = function (t) {
        nf.now(cf(t));
      })
    : rf && !Ys
    ? ((Ks = (Xs = new rf()).port2),
      (Xs.port1.onmessage = sf),
      (Js = je(Ks.postMessage, Ks, 1)))
    : !O.addEventListener ||
      'function' != typeof postMessage ||
      O.importScripts ||
      R(ff) ||
      'file:' === Qs.protocol
    ? (Js =
        'onreadystatechange' in G('script')
          ? function (t) {
              le.appendChild(G('script')).onreadystatechange = function () {
                le.removeChild(this), uf(t);
              };
            }
          : function (t) {
              setTimeout(cf(t), 0);
            })
    : ((Js = ff), O.addEventListener('message', sf, !1)));
var lf,
  hf,
  pf,
  df,
  vf,
  gf,
  yf,
  mf,
  bf = (Gs = { set: Zs, clear: tf }).set,
  wf = {},
  Sf = A,
  Ef = Gs.set,
  xf = O.MutationObserver || O.WebKitMutationObserver,
  _f = O.process,
  Af = O.Promise,
  kf = 'process' == U(_f),
  Of = Sf(O, 'queueMicrotask'),
  Tf = Of && Of.value;
Tf ||
  ((lf = function () {
    var t, e;
    for (kf && (t = _f.domain) && t.exit(); hf; ) {
      (e = hf.fn), (hf = hf.next);
      try {
        e();
      } catch (t) {
        throw (hf ? df() : (pf = void 0), t);
      }
    }
    (pf = void 0), t && t.enter();
  }),
  kf
    ? (df = function () {
        _f.nextTick(lf);
      })
    : xf && !Ys
    ? ((vf = !0),
      (gf = document.createTextNode('')),
      new xf(lf).observe(gf, { characterData: !0 }),
      (df = function () {
        gf.data = vf = !vf;
      }))
    : Af && Af.resolve
    ? ((yf = Af.resolve(void 0)),
      (mf = yf.then),
      (df = function () {
        mf.call(yf, lf);
      }))
    : (df = function () {
        Ef.call(O, lf);
      })),
  (wf =
    Tf ||
    function (t) {
      var e = { fn: t, next: void 0 };
      pf && (pf.next = e), hf || ((hf = e), df()), (pf = e);
    });
var If,
  Rf,
  Mf = function (t) {
    var e, r;
    (this.promise = new t(function (t, n) {
      if (void 0 !== e || void 0 !== r)
        throw TypeError('Bad Promise constructor');
      (e = t), (r = n);
    })),
      (this.resolve = Le(e)),
      (this.reject = Le(r));
  };
(Rf = function (t) {
  return new Mf(t);
}),
  (If = function (t, e) {
    if ((K(t), z(e) && e.constructor === t)) return e;
    var r = Rf(t);
    return (0, r.resolve)(e), r.promise;
  });
var jf;
jf = function (t, e) {
  var r = O.console;
  r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
};
var Lf;
Lf = function (t) {
  try {
    return { error: !1, value: t() };
  } catch (t) {
    return { error: !0, value: t };
  }
};
var Pf,
  Ff,
  Nf,
  Uf,
  Cf = Se('species'),
  $f = ct.get,
  Df = ct.set,
  qf = ct.getterFor('Promise'),
  Bf = Ws,
  zf = O.TypeError,
  Wf = O.document,
  Vf = O.process,
  Hf = Mt('fetch'),
  Gf = Rf,
  Yf = Gf,
  Jf = 'process' == U(Vf),
  Xf = !!(Wf && Wf.createEvent && O.dispatchEvent),
  Kf = Kt('Promise', function () {
    if (!(ot(Bf) !== String(Bf))) {
      if (66 === Xn) return !0;
      if (!Jf && 'function' != typeof PromiseRejectionEvent) return !0;
    }
    if (Xn >= 51 && /native code/.test(Bf)) return !1;
    var t = Bf.resolve(1),
      e = function (t) {
        t(
          function () {},
          function () {}
        );
      };
    return (
      ((t.constructor = {})[Cf] = e), !(t.then(function () {}) instanceof e)
    );
  }),
  Qf =
    Kf ||
    !Bn(function (t) {
      Bf.all(t).catch(function () {});
    }),
  Zf = function (t) {
    var e;
    return !(!z(t) || 'function' != typeof (e = t.then)) && e;
  },
  tl = function (t, e, r) {
    if (!e.notified) {
      e.notified = !0;
      var n = e.reactions;
      wf(function () {
        for (var o = e.value, i = 1 == e.state, a = 0; n.length > a; ) {
          var u,
            c,
            s,
            f = n[a++],
            l = i ? f.ok : f.fail,
            h = f.resolve,
            p = f.reject,
            d = f.domain;
          try {
            l
              ? (i || (2 === e.rejection && ol(t, e), (e.rejection = 1)),
                !0 === l
                  ? (u = o)
                  : (d && d.enter(), (u = l(o)), d && (d.exit(), (s = !0))),
                u === f.promise
                  ? p(zf('Promise-chain cycle'))
                  : (c = Zf(u))
                  ? c.call(u, h, p)
                  : h(u))
              : p(o);
          } catch (t) {
            d && !s && d.exit(), p(t);
          }
        }
        (e.reactions = []), (e.notified = !1), r && !e.rejection && rl(t, e);
      });
    }
  },
  el = function (t, e, r) {
    var n, o;
    Xf
      ? (((n = Wf.createEvent('Event')).promise = e),
        (n.reason = r),
        n.initEvent(t, !1, !0),
        O.dispatchEvent(n))
      : (n = { promise: e, reason: r }),
      (o = O['on' + t])
        ? o(n)
        : 'unhandledrejection' === t && jf('Unhandled promise rejection', r);
  },
  rl = function (t, e) {
    bf.call(O, function () {
      var r,
        n = e.value;
      if (
        nl(e) &&
        ((r = Lf(function () {
          Jf
            ? Vf.emit('unhandledRejection', n, t)
            : el('unhandledrejection', t, n);
        })),
        (e.rejection = Jf || nl(e) ? 2 : 1),
        r.error)
      )
        throw r.value;
    });
  },
  nl = function (t) {
    return 1 !== t.rejection && !t.parent;
  },
  ol = function (t, e) {
    bf.call(O, function () {
      Jf ? Vf.emit('rejectionHandled', t) : el('rejectionhandled', t, e.value);
    });
  },
  il = function (t, e, r, n) {
    return function (o) {
      t(e, r, o, n);
    };
  },
  al = function (t, e, r, n) {
    e.done ||
      ((e.done = !0), n && (e = n), (e.value = r), (e.state = 2), tl(t, e, !0));
  },
  ul = function (t, e, r, n) {
    if (!e.done) {
      (e.done = !0), n && (e = n);
      try {
        if (t === r) throw zf("Promise can't be resolved itself");
        var o = Zf(r);
        o
          ? wf(function () {
              var n = { done: !1 };
              try {
                o.call(r, il(ul, t, n, e), il(al, t, n, e));
              } catch (r) {
                al(t, n, r, e);
              }
            })
          : ((e.value = r), (e.state = 1), tl(t, e, !1));
      } catch (r) {
        al(t, { done: !1 }, r, e);
      }
    }
  };
Kf &&
  ((Bf = function (t) {
    Hs(this, Bf, 'Promise'), Le(t), Pf.call(this);
    var e = $f(this);
    try {
      t(il(ul, this, e), il(al, this, e));
    } catch (t) {
      al(this, e, t);
    }
  }),
  ((Pf = function (t) {
    Df(this, {
      type: 'Promise',
      done: !1,
      notified: !1,
      parent: !1,
      reactions: [],
      rejection: !1,
      state: 0,
      value: void 0,
    });
  }).prototype = Vs(Bf.prototype, {
    then: function (t, e) {
      var r = qf(this),
        n = Gf(Fa(this, Bf));
      return (
        (n.ok = 'function' != typeof t || t),
        (n.fail = 'function' == typeof e && e),
        (n.domain = Jf ? Vf.domain : void 0),
        (r.parent = !0),
        r.reactions.push(n),
        0 != r.state && tl(this, r, !1),
        n.promise
      );
    },
    catch: function (t) {
      return this.then(void 0, t);
    },
  })),
  (Ff = function () {
    var t = new Pf(),
      e = $f(t);
    (this.promise = t),
      (this.resolve = il(ul, t, e)),
      (this.reject = il(al, t, e));
  }),
  (Rf = Gf = function (t) {
    return t === Bf || t === Nf ? new Ff(t) : Yf(t);
  }),
  'function' == typeof Ws &&
    ((Uf = Ws.prototype.then),
    rt(
      Ws.prototype,
      'then',
      function (t, e) {
        var r = this;
        return new Bf(function (t, e) {
          Uf.call(r, t, e);
        }).then(t, e);
      },
      { unsafe: !0 }
    ),
    'function' == typeof Hf &&
      _(
        { global: !0, enumerable: !0, forced: !0 },
        {
          fetch: function (t) {
            return If(Bf, Hf.apply(O, arguments));
          },
        }
      ))),
  _({ global: !0, wrap: !0, forced: Kf }, { Promise: Bf }),
  Te(Bf, 'Promise', !1),
  Ri('Promise'),
  (Nf = Mt('Promise')),
  _(
    { target: 'Promise', stat: !0, forced: Kf },
    {
      reject: function (t) {
        var e = Gf(this);
        return e.reject.call(void 0, t), e.promise;
      },
    }
  ),
  _(
    { target: 'Promise', stat: !0, forced: Kf },
    {
      resolve: function (t) {
        return If(this, t);
      },
    }
  ),
  _(
    { target: 'Promise', stat: !0, forced: Qf },
    {
      all: function (t) {
        var e = this,
          r = Gf(e),
          n = r.resolve,
          o = r.reject,
          i = Lf(function () {
            var r = Le(e.resolve),
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
          r = Gf(e),
          n = r.reject,
          o = Lf(function () {
            var o = Le(e.resolve);
            $r(t, function (t) {
              o.call(e, t).then(r.resolve, n);
            });
          });
        return o.error && n(o.value), r.promise;
      },
    }
  ),
  _(
    { target: 'Promise', stat: !0 },
    {
      allSettled: function (t) {
        var e = this,
          r = Rf(e),
          n = r.resolve,
          o = r.reject,
          i = Lf(function () {
            var r = Le(e.resolve),
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
var cl =
  !!Ws &&
  R(function () {
    Ws.prototype.finally.call({ then: function () {} }, function () {});
  });
_(
  { target: 'Promise', proto: !0, real: !0, forced: cl },
  {
    finally: function (t) {
      var e = Fa(this, Mt('Promise')),
        r = 'function' == typeof t;
      return this.then(
        r
          ? function (r) {
              return If(e, t()).then(function () {
                return r;
              });
            }
          : t,
        r
          ? function (r) {
              return If(e, t()).then(function () {
                throw r;
              });
            }
          : t
      );
    },
  }
),
  'function' != typeof Ws ||
    Ws.prototype.finally ||
    rt(Ws.prototype, 'finally', Mt('Promise').prototype.finally);
var sl;
sl = function (t, e, r) {
  var n = -1 !== t.indexOf('Map'),
    o = -1 !== t.indexOf('Weak'),
    i = n ? 'set' : 'add',
    a = O[t],
    u = a && a.prototype,
    c = a,
    s = {},
    f = function (t) {
      var e = u[t];
      rt(
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
    Kt(
      t,
      'function' != typeof a ||
        !(
          o ||
          (u.forEach &&
            !R(function () {
              new a().entries().next();
            }))
        )
    )
  )
    (c = r.getConstructor(e, t, n, i)), (Ir.REQUIRED = !0);
  else if (Kt(t, !0)) {
    var l = new c(),
      h = l[i](o ? {} : -0, 1) != l,
      p = R(function () {
        l.has(1);
      }),
      d = Bn(function (t) {
        new a(t);
      }),
      v =
        !o &&
        R(function () {
          for (var t = new a(), e = 5; e--; ) t[i](e, e);
          return !t.has(-0);
        });
    d ||
      (((c = e(function (e, r) {
        Hs(e, c, t);
        var o = Ru(new a(), e, c);
        return null != r && $r(r, o[i], o, n), o;
      })).prototype = u),
      (u.constructor = c)),
      (p || v) && (f('delete'), f('has'), n && f('get')),
      (v || h) && f(i),
      o && u.clear && delete u.clear;
  }
  return (
    (s[t] = c),
    _({ global: !0, forced: c != a }, s),
    Te(c, t),
    o || r.setStrong(c, t, n),
    c
  );
};
var fl,
  ll = X,
  hl = Ir.fastKey,
  pl = ct.set,
  dl = ct.getterFor;
sl(
  'Map',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  (fl = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
          Hs(t, o, e),
            pl(t, {
              type: e,
              index: ce(null),
              first: void 0,
              last: void 0,
              size: 0,
            }),
            I || (t.size = 0),
            null != i && $r(i, t[n], t, r);
        }),
        i = dl(e),
        a = function (t, e, r) {
          var n,
            o,
            a = i(t),
            c = u(t, e);
          return (
            c
              ? (c.value = r)
              : ((a.last = c = {
                  index: (o = hl(e, !0)),
                  key: e,
                  value: r,
                  previous: (n = a.last),
                  next: void 0,
                  removed: !1,
                }),
                a.first || (a.first = c),
                n && (n.next = c),
                I ? a.size++ : t.size++,
                'F' !== o && (a.index[o] = c)),
            t
          );
        },
        u = function (t, e) {
          var r,
            n = i(t),
            o = hl(e);
          if ('F' !== o) return n.index[o];
          for (r = n.first; r; r = r.next) if (r.key == e) return r;
        };
      return (
        Vs(o.prototype, {
          clear: function () {
            for (var t = i(this), e = t.index, r = t.first; r; )
              (r.removed = !0),
                r.previous && (r.previous = r.previous.next = void 0),
                delete e[r.index],
                (r = r.next);
            (t.first = t.last = void 0), I ? (t.size = 0) : (this.size = 0);
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
                I ? r.size-- : e.size--;
            }
            return !!n;
          },
          forEach: function (t) {
            for (
              var e,
                r = i(this),
                n = je(t, arguments.length > 1 ? arguments[1] : void 0, 3);
              (e = e ? e.next : r.first);

            )
              for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
          },
          has: function (t) {
            return !!u(this, t);
          },
        }),
        Vs(
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
        I &&
          ll(o.prototype, 'size', {
            get: function () {
              return i(this).size;
            },
          }),
        o
      );
    },
    setStrong: function (t, e, r) {
      var n = e + ' Iterator',
        o = dl(e),
        i = dl(n);
      Li(
        t,
        e,
        function (t, e) {
          pl(this, { type: n, target: t, state: o(t), kind: e, last: void 0 });
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
        Ri(e);
    },
  })
);
sl(
  'Set',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  fl
);
var vl,
  gl = Ir.getWeakData,
  yl = ct.set,
  ml = ct.getterFor,
  bl = Me.find,
  wl = Me.findIndex,
  Sl = 0,
  El = function (t) {
    return t.frozen || (t.frozen = new xl());
  },
  xl = function () {
    this.entries = [];
  },
  _l = function (t, e) {
    return bl(t.entries, function (t) {
      return t[0] === e;
    });
  };
(xl.prototype = {
  get: function (t) {
    var e = _l(this, t);
    if (e) return e[1];
  },
  has: function (t) {
    return !!_l(this, t);
  },
  set: function (t, e) {
    var r = _l(this, t);
    r ? (r[1] = e) : this.entries.push([t, e]);
  },
  delete: function (t) {
    var e = wl(this.entries, function (e) {
      return e[0] === t;
    });
    return ~e && this.entries.splice(e, 1), !!~e;
  },
}),
  (vl = {
    getConstructor: function (t, e, r, n) {
      var o = t(function (t, i) {
          Hs(t, o, e),
            yl(t, { type: e, id: Sl++, frozen: void 0 }),
            null != i && $r(i, t[n], t, r);
        }),
        i = ml(e),
        a = function (t, e, r) {
          var n = i(t),
            o = gl(K(e), !0);
          return !0 === o ? El(n).set(e, r) : (o[n.id] = r), t;
        };
      return (
        Vs(o.prototype, {
          delete: function (t) {
            var e = i(this);
            if (!z(t)) return !1;
            var r = gl(t);
            return !0 === r
              ? El(e).delete(t)
              : r && W(r, e.id) && delete r[e.id];
          },
          has: function (t) {
            var e = i(this);
            if (!z(t)) return !1;
            var r = gl(t);
            return !0 === r ? El(e).has(t) : r && W(r, e.id);
          },
        }),
        Vs(
          o.prototype,
          r
            ? {
                get: function (t) {
                  var e = i(this);
                  if (z(t)) {
                    var r = gl(t);
                    return !0 === r ? El(e).get(t) : r ? r[e.id] : void 0;
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
var Al,
  kl = ct.enforce,
  Ol = !O.ActiveXObject && 'ActiveXObject' in O,
  Tl = Object.isExtensible,
  Il = function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  Rl = sl('WeakMap', Il, vl);
if (st && Ol) {
  (Al = vl.getConstructor(Il, 'WeakMap', !0)), (Ir.REQUIRED = !0);
  var Ml = Rl.prototype,
    jl = Ml.delete,
    Ll = Ml.has,
    Pl = Ml.get,
    Fl = Ml.set;
  Vs(Ml, {
    delete: function (t) {
      if (z(t) && !Tl(t)) {
        var e = kl(this);
        return (
          e.frozen || (e.frozen = new Al()),
          jl.call(this, t) || e.frozen.delete(t)
        );
      }
      return jl.call(this, t);
    },
    has: function (t) {
      if (z(t) && !Tl(t)) {
        var e = kl(this);
        return (
          e.frozen || (e.frozen = new Al()), Ll.call(this, t) || e.frozen.has(t)
        );
      }
      return Ll.call(this, t);
    },
    get: function (t) {
      if (z(t) && !Tl(t)) {
        var e = kl(this);
        return (
          e.frozen || (e.frozen = new Al()),
          Ll.call(this, t) ? Pl.call(this, t) : e.frozen.get(t)
        );
      }
      return Pl.call(this, t);
    },
    set: function (t, e) {
      if (z(t) && !Tl(t)) {
        var r = kl(this);
        r.frozen || (r.frozen = new Al()),
          Ll.call(this, t) ? Fl.call(this, t, e) : r.frozen.set(t, e);
      } else Fl.call(this, t, e);
      return this;
    },
  });
}
sl(
  'WeakSet',
  function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0);
    };
  },
  vl
);
var Nl, Ul;
Ul = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView;
var Cl;
Cl = function (t) {
  if (void 0 === t) return 0;
  var e = $t(t),
    r = Ct(e);
  if (e !== r) throw RangeError('Wrong length or index');
  return r;
};
var $l,
  Dl = Math.abs,
  ql = Math.pow,
  Bl = Math.floor,
  zl = Math.log,
  Wl = Math.LN2;
$l = {
  pack: function (t, e, r) {
    var n,
      o,
      i,
      a = new Array(r),
      u = 8 * r - e - 1,
      c = (1 << u) - 1,
      s = c >> 1,
      f = 23 === e ? ql(2, -24) - ql(2, -77) : 0,
      l = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
      h = 0;
    for (
      (t = Dl(t)) != t || Infinity === t
        ? ((o = t != t ? 1 : 0), (n = c))
        : ((n = Bl(zl(t) / Wl)),
          t * (i = ql(2, -n)) < 1 && (n--, (i *= 2)),
          (t += n + s >= 1 ? f / i : f * ql(2, 1 - s)) * i >= 2 &&
            (n++, (i /= 2)),
          n + s >= c
            ? ((o = 0), (n = c))
            : n + s >= 1
            ? ((o = (t * i - 1) * ql(2, e)), (n += s))
            : ((o = t * ql(2, s - 1) * ql(2, e)), (n = 0)));
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
      if (f === i) return r ? NaN : s ? -Infinity : Infinity;
      (r += ql(2, e)), (f -= a);
    }
    return (s ? -1 : 1) * r * ql(2, f - e);
  },
};
var Vl = Pt,
  Hl = X,
  Gl = ct.get,
  Yl = ct.set,
  Jl = O.ArrayBuffer,
  Xl = Jl,
  Kl = O.DataView,
  Ql = Kl && Kl.prototype,
  Zl = Object.prototype,
  th = O.RangeError,
  eh = $l.pack,
  rh = $l.unpack,
  nh = function (t) {
    return [255 & t];
  },
  oh = function (t) {
    return [255 & t, (t >> 8) & 255];
  },
  ih = function (t) {
    return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
  },
  ah = function (t) {
    return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
  },
  uh = function (t) {
    return eh(t, 23, 4);
  },
  ch = function (t) {
    return eh(t, 52, 8);
  },
  sh = function (t, e) {
    Hl(t.prototype, e, {
      get: function () {
        return Gl(this)[e];
      },
    });
  },
  fh = function (t, e, r, n) {
    var o = Cl(r),
      i = Gl(t);
    if (o + e > i.byteLength) throw th('Wrong index');
    var a = Gl(i.buffer).bytes,
      u = o + i.byteOffset,
      c = a.slice(u, u + e);
    return n ? c : c.reverse();
  },
  lh = function (t, e, r, n, o, i) {
    var a = Cl(r),
      u = Gl(t);
    if (a + e > u.byteLength) throw th('Wrong index');
    for (
      var c = Gl(u.buffer).bytes, s = a + u.byteOffset, f = n(+o), l = 0;
      l < e;
      l++
    )
      c[s + l] = f[i ? l : e - l - 1];
  };
if (Ul) {
  if (
    !R(function () {
      Jl(1);
    }) ||
    !R(function () {
      new Jl(-1);
    }) ||
    R(function () {
      return new Jl(), new Jl(1.5), new Jl(NaN), 'ArrayBuffer' != Jl.name;
    })
  ) {
    for (
      var hh,
        ph = ((Xl = function (t) {
          return Hs(this, Xl), new Jl(Cl(t));
        }).prototype = Jl.prototype),
        dh = Vl(Jl),
        vh = 0;
      dh.length > vh;

    )
      (hh = dh[vh++]) in Xl || tt(Xl, hh, Jl[hh]);
    ph.constructor = Xl;
  }
  An && an(Ql) !== Zl && An(Ql, Zl);
  var gh = new Kl(new Xl(2)),
    yh = Ql.setInt8;
  gh.setInt8(0, 2147483648),
    gh.setInt8(1, 2147483649),
    (!gh.getInt8(0) && gh.getInt8(1)) ||
      Vs(
        Ql,
        {
          setInt8: function (t, e) {
            yh.call(this, t, (e << 24) >> 24);
          },
          setUint8: function (t, e) {
            yh.call(this, t, (e << 24) >> 24);
          },
        },
        { unsafe: !0 }
      );
} else
  (Xl = function (t) {
    Hs(this, Xl, 'ArrayBuffer');
    var e = Cl(t);
    Yl(this, { bytes: Eo.call(new Array(e), 0), byteLength: e }),
      I || (this.byteLength = e);
  }),
    (Kl = function (t, e, r) {
      Hs(this, Kl, 'DataView'), Hs(t, Xl, 'DataView');
      var n = Gl(t).byteLength,
        o = $t(e);
      if (o < 0 || o > n) throw th('Wrong offset');
      if (o + (r = void 0 === r ? n - o : Ct(r)) > n) throw th('Wrong length');
      Yl(this, { buffer: t, byteLength: r, byteOffset: o }),
        I || ((this.buffer = t), (this.byteLength = r), (this.byteOffset = o));
    }),
    I &&
      (sh(Xl, 'byteLength'),
      sh(Kl, 'buffer'),
      sh(Kl, 'byteLength'),
      sh(Kl, 'byteOffset')),
    Vs(Kl.prototype, {
      getInt8: function (t) {
        return (fh(this, 1, t)[0] << 24) >> 24;
      },
      getUint8: function (t) {
        return fh(this, 1, t)[0];
      },
      getInt16: function (t) {
        var e = fh(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return (((e[1] << 8) | e[0]) << 16) >> 16;
      },
      getUint16: function (t) {
        var e = fh(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
        return (e[1] << 8) | e[0];
      },
      getInt32: function (t) {
        return ah(fh(this, 4, t, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (t) {
        return (
          ah(fh(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        );
      },
      getFloat32: function (t) {
        return rh(
          fh(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
          23
        );
      },
      getFloat64: function (t) {
        return rh(
          fh(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
          52
        );
      },
      setInt8: function (t, e) {
        lh(this, 1, t, nh, e);
      },
      setUint8: function (t, e) {
        lh(this, 1, t, nh, e);
      },
      setInt16: function (t, e) {
        lh(this, 2, t, oh, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (t, e) {
        lh(this, 2, t, oh, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (t, e) {
        lh(this, 4, t, ih, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (t, e) {
        lh(this, 4, t, ih, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (t, e) {
        lh(this, 4, t, uh, e, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (t, e) {
        lh(this, 8, t, ch, e, arguments.length > 2 ? arguments[2] : void 0);
      },
    });
Te(Xl, 'ArrayBuffer'), Te(Kl, 'DataView');
var mh = (Nl = { ArrayBuffer: Xl, DataView: Kl }).ArrayBuffer,
  bh = O.ArrayBuffer;
_({ global: !0, forced: bh !== mh }, { ArrayBuffer: mh }), Ri('ArrayBuffer');
var wh,
  Sh,
  Eh = X,
  xh = O.Int8Array,
  _h = xh && xh.prototype,
  Ah = O.Uint8ClampedArray,
  kh = Ah && Ah.prototype,
  Oh = xh && an(xh),
  Th = _h && an(_h),
  Ih = Object.prototype,
  Rh = Ih.isPrototypeOf,
  Mh = Se('toStringTag'),
  jh = pt('TYPED_ARRAY_TAG'),
  Lh = Ul && !!An && 'Opera' !== Hr(O.opera),
  Ph = !1,
  Fh = {
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
  Nh = function (t) {
    return z(t) && W(Fh, Hr(t));
  };
for (Sh in Fh) O[Sh] || (Lh = !1);
if (
  (!Lh || 'function' != typeof Oh || Oh === Function.prototype) &&
  ((Oh = function () {
    throw TypeError('Incorrect invocation');
  }),
  Lh)
)
  for (Sh in Fh) O[Sh] && An(O[Sh], Oh);
if ((!Lh || !Th || Th === Ih) && ((Th = Oh.prototype), Lh))
  for (Sh in Fh) O[Sh] && An(O[Sh].prototype, Th);
if ((Lh && an(kh) !== Th && An(kh, Th), I && !W(Th, Mh)))
  for (Sh in ((Ph = !0),
  Eh(Th, Mh, {
    get: function () {
      return z(this) ? this[jh] : void 0;
    },
  }),
  Fh))
    O[Sh] && tt(O[Sh], jh, Sh);
_(
  {
    target: 'ArrayBuffer',
    stat: !0,
    forced: !(wh = {
      NATIVE_ARRAY_BUFFER_VIEWS: Lh,
      TYPED_ARRAY_TAG: Ph && jh,
      aTypedArray: function (t) {
        if (Nh(t)) return t;
        throw TypeError('Target is not a typed array');
      },
      aTypedArrayConstructor: function (t) {
        if (An) {
          if (Rh.call(Oh, t)) return t;
        } else
          for (var e in Fh)
            if (W(Fh, Sh)) {
              var r = O[e];
              if (r && (t === r || Rh.call(r, t))) return t;
            }
        throw TypeError('Target is not a typed array constructor');
      },
      exportTypedArrayMethod: function (t, e, r) {
        if (I) {
          if (r)
            for (var n in Fh) {
              var o = O[n];
              o && W(o.prototype, t) && delete o.prototype[t];
            }
          (Th[t] && !r) || rt(Th, t, r ? e : (Lh && _h[t]) || e);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var n, o;
        if (I) {
          if (An) {
            if (r) for (n in Fh) (o = O[n]) && W(o, t) && delete o[t];
            if (Oh[t] && !r) return;
            try {
              return rt(Oh, t, r ? e : (Lh && xh[t]) || e);
            } catch (t) {}
          }
          for (n in Fh) !(o = O[n]) || (o[t] && !r) || rt(o, t, e);
        }
      },
      isView: function (t) {
        var e = Hr(t);
        return 'DataView' === e || W(Fh, e);
      },
      isTypedArray: Nh,
      TypedArray: Oh,
      TypedArrayPrototype: Th,
    }).NATIVE_ARRAY_BUFFER_VIEWS,
  },
  { isView: wh.isView }
);
var Uh = Nl.ArrayBuffer,
  Ch = Nl.DataView,
  $h = Uh.prototype.slice,
  Dh = R(function () {
    return !new Uh(2).slice(1, void 0).byteLength;
  });
_(
  { target: 'ArrayBuffer', proto: !0, unsafe: !0, forced: Dh },
  {
    slice: function (t, e) {
      if (void 0 !== $h && void 0 === e) return $h.call(K(this), t);
      for (
        var r = K(this).byteLength,
          n = zt(t, r),
          o = zt(void 0 === e ? r : e, r),
          i = new (Fa(this, Uh))(Ct(o - n)),
          a = new Ch(this),
          u = new Ch(i),
          c = 0;
        n < o;

      )
        u.setUint8(c++, a.getUint8(n++));
      return i;
    },
  }
),
  _({ global: !0, forced: !Ul }, { DataView: Nl.DataView });
var qh,
  Bh = {},
  zh = wh.NATIVE_ARRAY_BUFFER_VIEWS,
  Wh = O.ArrayBuffer,
  Vh = O.Int8Array;
qh =
  !zh ||
  !R(function () {
    Vh(1);
  }) ||
  !R(function () {
    new Vh(-1);
  }) ||
  !Bn(function (t) {
    new Vh(), new Vh(null), new Vh(1.5), new Vh(t);
  }, !0) ||
  R(function () {
    return 1 !== new Vh(new Wh(2), 1, void 0).length;
  });
var Hh, Gh;
(Gh = function (t) {
  var e = $t(t);
  if (e < 0) throw RangeError("The argument can't be less than 0");
  return e;
}),
  (Hh = function (t, e) {
    var r = Gh(t);
    if (r % e) throw RangeError('Wrong offset');
    return r;
  });
var Yh,
  Jh = Pt,
  Xh = wh.aTypedArrayConstructor;
Yh = function (t) {
  var e,
    r,
    n,
    o,
    i,
    a,
    u = ue(t),
    c = arguments.length,
    s = c > 1 ? arguments[1] : void 0,
    f = void 0 !== s,
    l = Wr(u);
  if (null != l && !Dr(l))
    for (a = (i = l.call(u)).next, u = []; !(o = a.call(i)).done; )
      u.push(o.value);
  for (
    f && c > 2 && (s = je(s, arguments[2], 2)),
      r = Ct(u.length),
      n = new (Xh(this))(r),
      e = 0;
    r > e;
    e++
  )
    n[e] = f ? s(u[e], e) : u[e];
  return n;
};
var Kh = Me.forEach,
  Qh = ct.get,
  Zh = ct.set,
  tp = X,
  ep = A,
  rp = Math.round,
  np = O.RangeError,
  op = Nl.ArrayBuffer,
  ip = Nl.DataView,
  ap = wh.NATIVE_ARRAY_BUFFER_VIEWS,
  up = wh.TYPED_ARRAY_TAG,
  cp = wh.TypedArray,
  sp = wh.TypedArrayPrototype,
  fp = wh.aTypedArrayConstructor,
  lp = wh.isTypedArray,
  hp = function (t, e) {
    for (var r = 0, n = e.length, o = new (fp(t))(n); n > r; ) o[r] = e[r++];
    return o;
  },
  pp = function (t, e) {
    tp(t, e, {
      get: function () {
        return Qh(this)[e];
      },
    });
  },
  dp = function (t) {
    var e;
    return (
      t instanceof op ||
      'ArrayBuffer' == (e = Hr(t)) ||
      'SharedArrayBuffer' == e
    );
  },
  vp = function (t, e) {
    return lp(t) && 'symbol' != typeof e && e in t && String(+e) == String(e);
  },
  gp = function (t, e) {
    return vp(t, (e = B(e, !0))) ? F(2, t[e]) : ep(t, e);
  },
  yp = function (t, e, r) {
    return !(vp(t, (e = B(e, !0))) && z(r) && W(r, 'value')) ||
      W(r, 'get') ||
      W(r, 'set') ||
      r.configurable ||
      (W(r, 'writable') && !r.writable) ||
      (W(r, 'enumerable') && !r.enumerable)
      ? tp(t, e, r)
      : ((t[e] = r.value), t);
  };
I
  ? (ap ||
      ((A = gp),
      (X = yp),
      pp(sp, 'buffer'),
      pp(sp, 'byteOffset'),
      pp(sp, 'byteLength'),
      pp(sp, 'length')),
    _(
      { target: 'Object', stat: !0, forced: !ap },
      { getOwnPropertyDescriptor: gp, defineProperty: yp }
    ),
    (Bh = function (t, e, r) {
      var n = t.match(/\d+$/)[0] / 8,
        o = t + (r ? 'Clamped' : '') + 'Array',
        i = 'get' + t,
        a = 'set' + t,
        u = O[o],
        c = u,
        s = c && c.prototype,
        f = {},
        l = function (t, e) {
          tp(t, e, {
            get: function () {
              return (function (t, e) {
                var r = Qh(t);
                return r.view[i](e * n + r.byteOffset, !0);
              })(this, e);
            },
            set: function (t) {
              return (function (t, e, o) {
                var i = Qh(t);
                r && (o = (o = rp(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o),
                  i.view[a](e * n + i.byteOffset, o, !0);
              })(this, e, t);
            },
            enumerable: !0,
          });
        };
      ap
        ? qh &&
          ((c = e(function (t, e, r, i) {
            return (
              Hs(t, c, o),
              Ru(
                z(e)
                  ? dp(e)
                    ? void 0 !== i
                      ? new u(e, Hh(r, n), i)
                      : void 0 !== r
                      ? new u(e, Hh(r, n))
                      : new u(e)
                    : lp(e)
                    ? hp(c, e)
                    : Yh.call(c, e)
                  : new u(Cl(e)),
                t,
                c
              )
            );
          })),
          An && An(c, cp),
          Kh(Jh(u), function (t) {
            t in c || tt(c, t, u[t]);
          }),
          (c.prototype = s))
        : ((c = e(function (t, e, r, i) {
            Hs(t, c, o);
            var a,
              u,
              s,
              f = 0,
              h = 0;
            if (z(e)) {
              if (!dp(e)) return lp(e) ? hp(c, e) : Yh.call(c, e);
              (a = e), (h = Hh(r, n));
              var p = e.byteLength;
              if (void 0 === i) {
                if (p % n) throw np('Wrong length');
                if ((u = p - h) < 0) throw np('Wrong length');
              } else if ((u = Ct(i) * n) + h > p) throw np('Wrong length');
              s = u / n;
            } else (s = Cl(e)), (a = new op((u = s * n)));
            for (
              Zh(t, {
                buffer: a,
                byteOffset: h,
                byteLength: u,
                length: s,
                view: new ip(a),
              });
              f < s;

            )
              l(t, f++);
          })),
          An && An(c, cp),
          (s = c.prototype = ce(sp))),
        s.constructor !== c && tt(s, 'constructor', c),
        up && tt(s, up, o),
        (f[o] = c),
        _({ global: !0, forced: c != u, sham: !ap }, f),
        'BYTES_PER_ELEMENT' in c || tt(c, 'BYTES_PER_ELEMENT', n),
        'BYTES_PER_ELEMENT' in s || tt(s, 'BYTES_PER_ELEMENT', n),
        Ri(o);
    }))
  : (Bh = function () {}),
  Bh('Int8', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Uint8', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh(
    'Uint8',
    function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    },
    !0
  ),
  Bh('Int16', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Uint16', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Int32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Uint32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Float32', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  Bh('Float64', function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
  (0, wh.exportTypedArrayStaticMethod)('from', Yh, qh);
var mp = wh.aTypedArrayConstructor;
(0, wh.exportTypedArrayStaticMethod)(
  'of',
  function () {
    for (var t = 0, e = arguments.length, r = new (mp(this))(e); e > t; )
      r[t] = arguments[t++];
    return r;
  },
  qh
);
var bp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('copyWithin', function (t, e) {
  return co.call(bp(this), t, e, arguments.length > 2 ? arguments[2] : void 0);
});
var wp = Me.every,
  Sp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('every', function (t) {
  return wp(Sp(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Ep = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('fill', function (t) {
  return Eo.apply(Ep(this), arguments);
});
var xp = Me.filter,
  _p = wh.aTypedArray,
  Ap = wh.aTypedArrayConstructor;
(0, wh.exportTypedArrayMethod)('filter', function (t) {
  for (
    var e = xp(_p(this), t, arguments.length > 1 ? arguments[1] : void 0),
      r = Fa(this, this.constructor),
      n = 0,
      o = e.length,
      i = new (Ap(r))(o);
    o > n;

  )
    i[n] = e[n++];
  return i;
});
var kp = Me.find,
  Op = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('find', function (t) {
  return kp(Op(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Tp = Me.findIndex,
  Ip = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('findIndex', function (t) {
  return Tp(Ip(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Rp = Me.forEach,
  Mp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('forEach', function (t) {
  Rp(Mp(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var jp = Ut.includes,
  Lp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('includes', function (t) {
  return jp(Lp(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Pp = Ut.indexOf,
  Fp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('indexOf', function (t) {
  return Pp(Fp(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var Np = Se('iterator'),
  Up = O.Uint8Array,
  Cp = ji.values,
  $p = ji.keys,
  Dp = ji.entries,
  qp = wh.aTypedArray,
  Bp = wh.exportTypedArrayMethod,
  zp = Up && Up.prototype[Np],
  Wp = !!zp && ('values' == zp.name || null == zp.name),
  Vp = function () {
    return Cp.call(qp(this));
  };
Bp('entries', function () {
  return Dp.call(qp(this));
}),
  Bp('keys', function () {
    return $p.call(qp(this));
  }),
  Bp('values', Vp, !Wp),
  Bp(Np, Vp, !Wp);
var Hp = wh.aTypedArray,
  Gp = [].join;
(0, wh.exportTypedArrayMethod)('join', function (t) {
  return Gp.apply(Hp(this), arguments);
});
var Yp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('lastIndexOf', function (t) {
  return Yo.apply(Yp(this), arguments);
});
var Jp = Me.map,
  Xp = wh.aTypedArray,
  Kp = wh.aTypedArrayConstructor;
(0, wh.exportTypedArrayMethod)('map', function (t) {
  return Jp(
    Xp(this),
    t,
    arguments.length > 1 ? arguments[1] : void 0,
    function (t, e) {
      return new (Kp(Fa(t, t.constructor)))(e);
    }
  );
});
var Qp = ni.left,
  Zp = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('reduce', function (t) {
  return Qp(
    Zp(this),
    t,
    arguments.length,
    arguments.length > 1 ? arguments[1] : void 0
  );
});
var ed = ni.right,
  rd = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('reduceRight', function (t) {
  return ed(
    rd(this),
    t,
    arguments.length,
    arguments.length > 1 ? arguments[1] : void 0
  );
});
var nd = wh.aTypedArray,
  od = wh.exportTypedArrayMethod,
  id = Math.floor;
od('reverse', function () {
  for (var t, e = this, r = nd(e).length, n = id(r / 2), o = 0; o < n; )
    (t = e[o]), (e[o++] = e[--r]), (e[r] = t);
  return e;
});
var ad = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)(
  'set',
  function (t) {
    ad(this);
    var e = Hh(arguments.length > 1 ? arguments[1] : void 0, 1),
      r = this.length,
      n = ue(t),
      o = Ct(n.length),
      i = 0;
    if (o + e > r) throw RangeError('Wrong length');
    for (; i < o; ) this[e + i] = n[i++];
  },
  R(function () {
    new Int8Array(1).set({});
  })
);
var ud = wh.aTypedArray,
  cd = wh.aTypedArrayConstructor,
  sd = [].slice;
(0, wh.exportTypedArrayMethod)(
  'slice',
  function (t, e) {
    for (
      var r = sd.call(ud(this), t, e),
        n = Fa(this, this.constructor),
        o = 0,
        i = r.length,
        a = new (cd(n))(i);
      i > o;

    )
      a[o] = r[o++];
    return a;
  },
  R(function () {
    new Int8Array(1).slice();
  })
);
var fd = Me.some,
  ld = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('some', function (t) {
  return fd(ld(this), t, arguments.length > 1 ? arguments[1] : void 0);
});
var hd = wh.aTypedArray,
  pd = [].sort;
(0, wh.exportTypedArrayMethod)('sort', function (t) {
  return pd.call(hd(this), t);
});
var dd = wh.aTypedArray;
(0, wh.exportTypedArrayMethod)('subarray', function (t, e) {
  var r = dd(this),
    n = r.length,
    o = zt(t, n);
  return new (Fa(r, r.constructor))(
    r.buffer,
    r.byteOffset + o * r.BYTES_PER_ELEMENT,
    Ct((void 0 === e ? n : zt(e, n)) - o)
  );
});
var vd = O.Int8Array,
  gd = wh.aTypedArray,
  yd = wh.exportTypedArrayMethod,
  md = [].toLocaleString,
  bd = [].slice,
  wd =
    !!vd &&
    R(function () {
      md.call(new vd(1));
    });
yd(
  'toLocaleString',
  function () {
    return md.apply(wd ? bd.call(gd(this)) : gd(this), arguments);
  },
  R(function () {
    return [1, 2].toLocaleString() != new vd([1, 2]).toLocaleString();
  }) ||
    !R(function () {
      vd.prototype.toLocaleString.call([1, 2]);
    })
);
var Sd = wh.exportTypedArrayMethod,
  Ed = O.Uint8Array,
  xd = (Ed && Ed.prototype) || {},
  _d = [].toString,
  Ad = [].join;
R(function () {
  _d.call({});
}) &&
  (_d = function () {
    return Ad.call(this);
  });
var kd = xd.toString != _d;
Sd('toString', _d, kd);
var Od = Mt('Reflect', 'apply'),
  Td = Function.apply,
  Id = !R(function () {
    Od(function () {});
  });
_(
  { target: 'Reflect', stat: !0, forced: Id },
  {
    apply: function (t, e, r) {
      return Le(t), K(r), Od ? Od(t, e, r) : Td.call(t, e, r);
    },
  }
);
var Rd = Mt('Reflect', 'construct'),
  Md = R(function () {
    function t() {}
    return !(Rd(function () {}, [], t) instanceof t);
  }),
  jd = !R(function () {
    Rd(function () {});
  }),
  Ld = Md || jd;
_(
  { target: 'Reflect', stat: !0, forced: Ld, sham: Ld },
  {
    construct: function (t, e) {
      Le(t), K(e);
      var r = arguments.length < 3 ? t : Le(arguments[2]);
      if (jd && !Md) return Rd(t, e, r);
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
        return n.push.apply(n, e), new (Mn.apply(t, n))();
      }
      var o = r.prototype,
        i = ce(z(o) ? o : Object.prototype),
        a = Function.apply.call(t, i, e);
      return z(a) ? a : i;
    },
  }
);
var Pd = R(function () {
  Reflect.defineProperty(X({}, 1, { value: 1 }), 1, { value: 2 });
});
_(
  { target: 'Reflect', stat: !0, forced: Pd, sham: !I },
  {
    defineProperty: function (t, e, r) {
      K(t);
      var n = B(e, !0);
      K(r);
      try {
        return X(t, n, r), !0;
      } catch (t) {
        return !1;
      }
    },
  }
);
var Fd = A;
_(
  { target: 'Reflect', stat: !0 },
  {
    deleteProperty: function (t, e) {
      var r = Fd(K(t), e);
      return !(r && !r.configurable) && delete t[e];
    },
  }
),
  _(
    { target: 'Reflect', stat: !0 },
    {
      get: function t(e, r) {
        var n,
          o,
          i = arguments.length < 3 ? e : arguments[2];
        return K(e) === i
          ? e[r]
          : (n = A(e, r))
          ? W(n, 'value')
            ? n.value
            : void 0 === n.get
            ? void 0
            : n.get.call(i)
          : z((o = an(e)))
          ? t(o, r, i)
          : void 0;
      },
    }
  ),
  _(
    { target: 'Reflect', stat: !0, sham: !I },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return A(K(t), e);
      },
    }
  ),
  _(
    { target: 'Reflect', stat: !0, sham: !on },
    {
      getPrototypeOf: function (t) {
        return an(K(t));
      },
    }
  ),
  _(
    { target: 'Reflect', stat: !0 },
    {
      has: function (t, e) {
        return e in t;
      },
    }
  );
var Nd = Object.isExtensible;
_(
  { target: 'Reflect', stat: !0 },
  {
    isExtensible: function (t) {
      return K(t), !Nd || Nd(t);
    },
  }
),
  _({ target: 'Reflect', stat: !0 }, { ownKeys: jt }),
  _(
    { target: 'Reflect', stat: !0, sham: !Tr },
    {
      preventExtensions: function (t) {
        K(t);
        try {
          var e = Mt('Object', 'preventExtensions');
          return e && e(t), !0;
        } catch (t) {
          return !1;
        }
      },
    }
  );
var Ud = R(function () {
  var t = X({}, 'a', { configurable: !0 });
  return !1 !== Reflect.set(an(t), 'a', 1, t);
});
_(
  { target: 'Reflect', stat: !0, forced: Ud },
  {
    set: function t(e, r, n) {
      var o,
        i,
        a = arguments.length < 4 ? e : arguments[3],
        u = A(K(e), r);
      if (!u) {
        if (z((i = an(e)))) return t(i, r, n, a);
        u = F(0);
      }
      if (W(u, 'value')) {
        if (!1 === u.writable || !z(a)) return !1;
        if ((o = A(a, r))) {
          if (o.get || o.set || !1 === o.writable) return !1;
          (o.value = n), X(a, r, o);
        } else X(a, r, F(0, n));
        return !0;
      }
      return void 0 !== u.set && (u.set.call(a, n), !0);
    },
  }
),
  An &&
    _(
      { target: 'Reflect', stat: !0 },
      {
        setPrototypeOf: function (t, e) {
          K(t), _n(e);
          try {
            return An(t, e), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
var Cd;
for (var $d in (Cd = {
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
  var Dd = O[$d],
    qd = Dd && Dd.prototype;
  if (qd && qd.forEach !== Po)
    try {
      tt(qd, 'forEach', Po);
    } catch (t) {
      qd.forEach = Po;
    }
}
var Bd = Se('iterator'),
  zd = Se('toStringTag'),
  Wd = ji.values;
for (var Vd in Cd) {
  var Hd = O[Vd],
    Gd = Hd && Hd.prototype;
  if (Gd) {
    if (Gd[Bd] !== Wd)
      try {
        tt(Gd, Bd, Wd);
      } catch (t) {
        Gd[Bd] = Wd;
      }
    if ((Gd[zd] || tt(Gd, zd, Vd), Cd[Vd]))
      for (var Yd in ji)
        if (Gd[Yd] !== ji[Yd])
          try {
            tt(Gd, Yd, ji[Yd]);
          } catch (t) {
            Gd[Yd] = ji[Yd];
          }
  }
}
var Jd = !O.setImmediate || !O.clearImmediate;
_(
  { global: !0, bind: !0, enumerable: !0, forced: Jd },
  { setImmediate: Gs.set, clearImmediate: Gs.clear }
);
var Xd = O.process,
  Kd = 'process' == U(Xd);
_(
  { global: !0, enumerable: !0, noTargetGet: !0 },
  {
    queueMicrotask: function (t) {
      var e = Kd && Xd.domain;
      wf(e ? e.bind(t) : t);
    },
  }
);
var Qd = [].slice,
  Zd = /MSIE .\./.test(Kn),
  tv = function (t) {
    return function (e, r) {
      var n = arguments.length > 2,
        o = n ? Qd.call(arguments, 2) : void 0;
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
_(
  { global: !0, bind: !0, forced: Zd },
  { setTimeout: tv(O.setTimeout), setInterval: tv(O.setInterval) }
);
var ev,
  rv = Se('iterator');
ev = !R(function () {
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
      !e[rv] ||
      'a' !== new URL('https://a@b').username ||
      'b' !== new URLSearchParams(new URLSearchParams('a=b')).get('a') ||
      'xn--e1aybc' !== new URL('http://тест').host ||
      '#%D0%B1' !== new URL('http://a#б').hash ||
      'a1c3' !== r ||
      'x' !== new URL('http://x', void 0).host
  );
});
var nv,
  ov = Qi.codeAt,
  iv = /[^\0-\u007E]/,
  av = /[.\u3002\uFF0E\uFF61]/g,
  uv = Math.floor,
  cv = String.fromCharCode,
  sv = function (t) {
    return t + 22 + 75 * (t < 26);
  },
  fv = function (t, e, r) {
    var n = 0;
    for (t = r ? uv(t / 700) : t >> 1, t += uv(t / e); t > 455; n += 36)
      t = uv(t / 35);
    return uv(n + (36 * t) / (t + 38));
  },
  lv = function (t) {
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
    for (e = 0; e < t.length; e++) (r = t[e]) < 128 && n.push(cv(r));
    var c = n.length,
      s = c;
    for (c && n.push('-'); s < o; ) {
      var f = 2147483647;
      for (e = 0; e < t.length; e++) (r = t[e]) >= i && r < f && (f = r);
      var l = s + 1;
      if (f - i > uv((2147483647 - a) / l))
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
            n.push(cv(sv(d + (v % g)))), (h = uv(v / g));
          }
          n.push(cv(sv(h))), (u = fv(a, l, s == c)), (a = 0), ++s;
        }
      }
      ++a, ++i;
    }
    return n.join('');
  };
nv = function (t) {
  var e,
    r,
    n = [],
    o = t.toLowerCase().replace(av, '.').split('.');
  for (e = 0; e < o.length; e++)
    (r = o[e]), n.push(iv.test(r) ? 'xn--' + lv(r) : r);
  return n.join('.');
};
var hv, pv;
pv = function (t) {
  var e = Wr(t);
  if ('function' != typeof e) throw TypeError(String(t) + ' is not iterable');
  return K(e.call(t));
};
var dv = Mt('fetch'),
  vv = Mt('Headers'),
  gv = Se('iterator'),
  yv = ct.set,
  mv = ct.getterFor('URLSearchParams'),
  bv = ct.getterFor('URLSearchParamsIterator'),
  wv = /\+/g,
  Sv = Array(4),
  Ev = function (t) {
    return (
      Sv[t - 1] || (Sv[t - 1] = RegExp('((?:%[\\da-f]{2}){' + t + '})', 'gi'))
    );
  },
  xv = function (t) {
    try {
      return decodeURIComponent(t);
    } catch (e) {
      return t;
    }
  },
  _v = function (t) {
    var e = t.replace(wv, ' '),
      r = 4;
    try {
      return decodeURIComponent(e);
    } catch (t) {
      for (; r; ) e = e.replace(Ev(r--), xv);
      return e;
    }
  },
  Av = /[!'()~]|%20/g,
  kv = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
  },
  Ov = function (t) {
    return kv[t];
  },
  Tv = function (t) {
    return encodeURIComponent(t).replace(Av, Ov);
  },
  Iv = function (t, e) {
    if (e)
      for (var r, n, o = e.split('&'), i = 0; i < o.length; )
        (r = o[i++]).length &&
          ((n = r.split('=')),
          t.push({ key: _v(n.shift()), value: _v(n.join('=')) }));
  },
  Rv = function (t) {
    (this.entries.length = 0), Iv(this.entries, t);
  },
  Mv = function (t, e) {
    if (t < e) throw TypeError('Not enough arguments');
  },
  jv = Pi(
    function (t, e) {
      yv(this, {
        type: 'URLSearchParamsIterator',
        iterator: pv(mv(t).entries),
        kind: e,
      });
    },
    'Iterator',
    function () {
      var t = bv(this),
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
  Lv = function () {
    Hs(this, Lv, 'URLSearchParams');
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
      (yv(f, {
        type: 'URLSearchParams',
        entries: l,
        updateURL: function () {},
        updateSearchParams: Rv,
      }),
      void 0 !== s)
    )
      if (z(s))
        if ('function' == typeof (t = Wr(s)))
          for (r = (e = t.call(s)).next; !(n = r.call(e)).done; ) {
            if (
              (a = (i = (o = pv(K(n.value))).next).call(o)).done ||
              (u = i.call(o)).done ||
              !i.call(o).done
            )
              throw TypeError('Expected sequence with length 2');
            l.push({ key: a.value + '', value: u.value + '' });
          }
        else for (c in s) W(s, c) && l.push({ key: c, value: s[c] + '' });
      else
        Iv(
          l,
          'string' == typeof s ? ('?' === s.charAt(0) ? s.slice(1) : s) : s + ''
        );
  },
  Pv = Lv.prototype;
Vs(
  Pv,
  {
    append: function (t, e) {
      Mv(arguments.length, 2);
      var r = mv(this);
      r.entries.push({ key: t + '', value: e + '' }), r.updateURL();
    },
    delete: function (t) {
      Mv(arguments.length, 1);
      for (var e = mv(this), r = e.entries, n = t + '', o = 0; o < r.length; )
        r[o].key === n ? r.splice(o, 1) : o++;
      e.updateURL();
    },
    get: function (t) {
      Mv(arguments.length, 1);
      for (var e = mv(this).entries, r = t + '', n = 0; n < e.length; n++)
        if (e[n].key === r) return e[n].value;
      return null;
    },
    getAll: function (t) {
      Mv(arguments.length, 1);
      for (
        var e = mv(this).entries, r = t + '', n = [], o = 0;
        o < e.length;
        o++
      )
        e[o].key === r && n.push(e[o].value);
      return n;
    },
    has: function (t) {
      Mv(arguments.length, 1);
      for (var e = mv(this).entries, r = t + '', n = 0; n < e.length; )
        if (e[n++].key === r) return !0;
      return !1;
    },
    set: function (t, e) {
      Mv(arguments.length, 1);
      for (
        var r,
          n = mv(this),
          o = n.entries,
          i = !1,
          a = t + '',
          u = e + '',
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
        n = mv(this),
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
          r = mv(this).entries,
          n = je(t, arguments.length > 1 ? arguments[1] : void 0, 3),
          o = 0;
        o < r.length;

      )
        n((e = r[o++]).value, e.key, this);
    },
    keys: function () {
      return new jv(this, 'keys');
    },
    values: function () {
      return new jv(this, 'values');
    },
    entries: function () {
      return new jv(this, 'entries');
    },
  },
  { enumerable: !0 }
),
  rt(Pv, gv, Pv.entries),
  rt(
    Pv,
    'toString',
    function () {
      for (var t, e = mv(this).entries, r = [], n = 0; n < e.length; )
        (t = e[n++]), r.push(Tv(t.key) + '=' + Tv(t.value));
      return r.join('&');
    },
    { enumerable: !0 }
  ),
  Te(Lv, 'URLSearchParams'),
  _({ global: !0, forced: !ev }, { URLSearchParams: Lv }),
  ev ||
    'function' != typeof dv ||
    'function' != typeof vv ||
    _(
      { global: !0, enumerable: !0, forced: !0 },
      {
        fetch: function (t) {
          var e,
            r,
            n,
            o = [t];
          return (
            arguments.length > 1 &&
              (z((e = arguments[1])) &&
                ((r = e.body),
                'URLSearchParams' === Hr(r) &&
                  ((n = e.headers ? new vv(e.headers) : new vv()).has(
                    'content-type'
                  ) ||
                    n.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8'
                    ),
                  (e = ce(e, { body: F(0, String(r)), headers: F(0, n) })))),
              o.push(e)),
            dv.apply(this, o)
          );
        },
      }
    ),
  (hv = { URLSearchParams: Lv, getState: mv });
var Fv = O.URL,
  Nv = hv.URLSearchParams,
  Uv = hv.getState,
  Cv = ct.set,
  $v = ct.getterFor('URL'),
  Dv = Math.floor,
  qv = Math.pow,
  Bv = /[A-Za-z]/,
  zv = /[\d+-.A-Za-z]/,
  Wv = /\d/,
  Vv = /^(0x|0X)/,
  Hv = /^[0-7]+$/,
  Gv = /^\d+$/,
  Yv = /^[\dA-Fa-f]+$/,
  Jv = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
  Xv = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
  Kv = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
  Qv = /[\u0009\u000A\u000D]/g,
  Zv = function (t, e) {
    var r, n, o;
    if ('[' == e.charAt(0)) {
      if (']' != e.charAt(e.length - 1)) return 'Invalid host';
      if (!(r = eg(e.slice(1, -1)))) return 'Invalid host';
      t.host = r;
    } else if (sg(t)) {
      if (((e = nv(e)), Jv.test(e))) return 'Invalid host';
      if (null === (r = tg(e))) return 'Invalid host';
      t.host = r;
    } else {
      if (Xv.test(e)) return 'Invalid host';
      for (r = '', n = qn(e), o = 0; o < n.length; o++) r += ug(n[o], ng);
      t.host = r;
    }
  },
  tg = function (t) {
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
          ((i = Vv.test(o) ? 16 : 8), (o = o.slice(8 == i ? 1 : 2))),
        '' === o)
      )
        a = 0;
      else {
        if (!(10 == i ? Gv : 8 == i ? Hv : Yv).test(o)) return t;
        a = parseInt(o, i);
      }
      r.push(a);
    }
    for (n = 0; n < e; n++)
      if (((a = r[n]), n == e - 1)) {
        if (a >= qv(256, 5 - e)) return null;
      } else if (a > 255) return null;
    for (u = r.pop(), n = 0; n < r.length; n++) u += r[n] * qv(256, 3 - n);
    return u;
  },
  eg = function (t) {
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
        for (e = r = 0; r < 4 && Yv.test(h()); )
          (e = 16 * e + parseInt(h(), 16)), l++, r++;
        if ('.' == h()) {
          if (0 == r) return;
          if (((l -= r), s > 6)) return;
          for (n = 0; h(); ) {
            if (((o = null), n > 0)) {
              if (!('.' == h() && n < 4)) return;
              l++;
            }
            if (!Wv.test(h())) return;
            for (; Wv.test(h()); ) {
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
  rg = function (t) {
    var e, r, n, o;
    if ('number' == typeof t) {
      for (e = [], r = 0; r < 4; r++) e.unshift(t % 256), (t = Dv(t / 256));
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
  ng = {},
  og = Sr({}, ng, { ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1 }),
  ig = Sr({}, og, { '#': 1, '?': 1, '{': 1, '}': 1 }),
  ag = Sr({}, ig, {
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
  ug = function (t, e) {
    var r = ov(t, 0);
    return r > 32 && r < 127 && !W(e, t) ? t : encodeURIComponent(t);
  },
  cg = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
  sg = function (t) {
    return W(cg, t.scheme);
  },
  fg = function (t) {
    return '' != t.username || '' != t.password;
  },
  lg = function (t) {
    return !t.host || t.cannotBeABaseURL || 'file' == t.scheme;
  },
  hg = function (t, e) {
    var r;
    return (
      2 == t.length &&
      Bv.test(t.charAt(0)) &&
      (':' == (r = t.charAt(1)) || (!e && '|' == r))
    );
  },
  pg = function (t) {
    var e;
    return (
      t.length > 1 &&
      hg(t.slice(0, 2)) &&
      (2 == t.length ||
        '/' === (e = t.charAt(2)) ||
        '\\' === e ||
        '?' === e ||
        '#' === e)
    );
  },
  dg = function (t) {
    var e = t.path,
      r = e.length;
    !r || ('file' == t.scheme && 1 == r && hg(e[0], !0)) || e.pop();
  },
  vg = function (t) {
    return '.' === t || '%2e' === t.toLowerCase();
  },
  gg = {},
  yg = {},
  mg = {},
  bg = {},
  wg = {},
  Sg = {},
  Eg = {},
  xg = {},
  _g = {},
  Ag = {},
  kg = {},
  Og = {},
  Tg = {},
  Ig = {},
  Rg = {},
  Mg = {},
  jg = {},
  Lg = {},
  Pg = {},
  Fg = {},
  Ng = {},
  Ug = function (t, e, r, n) {
    var o,
      i,
      a,
      u,
      c,
      s = r || gg,
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
        (e = e.replace(Kv, ''))),
        e = e.replace(Qv, ''),
        o = qn(e);
      f <= o.length;

    ) {
      switch (((i = o[f]), s)) {
        case gg:
          if (!i || !Bv.test(i)) {
            if (r) return 'Invalid scheme';
            s = mg;
            continue;
          }
          (l += i.toLowerCase()), (s = yg);
          break;
        case yg:
          if (i && (zv.test(i) || '+' == i || '-' == i || '.' == i))
            l += i.toLowerCase();
          else {
            if (':' != i) {
              if (r) return 'Invalid scheme';
              (l = ''), (s = mg), (f = 0);
              continue;
            }
            if (
              r &&
              (sg(t) != W(cg, l) ||
                ('file' == l && (fg(t) || null !== t.port)) ||
                ('file' == t.scheme && !t.host))
            )
              return;
            if (((t.scheme = l), r))
              return void (sg(t) && cg[t.scheme] == t.port && (t.port = null));
            (l = ''),
              'file' == t.scheme
                ? (s = Ig)
                : sg(t) && n && n.scheme == t.scheme
                ? (s = bg)
                : sg(t)
                ? (s = xg)
                : '/' == o[f + 1]
                ? ((s = wg), f++)
                : ((t.cannotBeABaseURL = !0), t.path.push(''), (s = Pg));
          }
          break;
        case mg:
          if (!n || (n.cannotBeABaseURL && '#' != i)) return 'Invalid scheme';
          if (n.cannotBeABaseURL && '#' == i) {
            (t.scheme = n.scheme),
              (t.path = n.path.slice()),
              (t.query = n.query),
              (t.fragment = ''),
              (t.cannotBeABaseURL = !0),
              (s = Ng);
            break;
          }
          s = 'file' == n.scheme ? Ig : Sg;
          continue;
        case bg:
          if ('/' != i || '/' != o[f + 1]) {
            s = Sg;
            continue;
          }
          (s = _g), f++;
          break;
        case wg:
          if ('/' == i) {
            s = Ag;
            break;
          }
          s = Lg;
          continue;
        case Sg:
          if (((t.scheme = n.scheme), null == i))
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = n.query);
          else if ('/' == i || ('\\' == i && sg(t))) s = Eg;
          else if ('?' == i)
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = ''),
              (s = Fg);
          else {
            if ('#' != i) {
              (t.username = n.username),
                (t.password = n.password),
                (t.host = n.host),
                (t.port = n.port),
                (t.path = n.path.slice()),
                t.path.pop(),
                (s = Lg);
              continue;
            }
            (t.username = n.username),
              (t.password = n.password),
              (t.host = n.host),
              (t.port = n.port),
              (t.path = n.path.slice()),
              (t.query = n.query),
              (t.fragment = ''),
              (s = Ng);
          }
          break;
        case Eg:
          if (!sg(t) || ('/' != i && '\\' != i)) {
            if ('/' != i) {
              (t.username = n.username),
                (t.password = n.password),
                (t.host = n.host),
                (t.port = n.port),
                (s = Lg);
              continue;
            }
            s = Ag;
          } else s = _g;
          break;
        case xg:
          if (((s = _g), '/' != i || '/' != l.charAt(f + 1))) continue;
          f++;
          break;
        case _g:
          if ('/' != i && '\\' != i) {
            s = Ag;
            continue;
          }
          break;
        case Ag:
          if ('@' == i) {
            h && (l = '%40' + l), (h = !0), (a = qn(l));
            for (var v = 0; v < a.length; v++) {
              var g = a[v];
              if (':' != g || d) {
                var y = ug(g, ag);
                d ? (t.password += y) : (t.username += y);
              } else d = !0;
            }
            l = '';
          } else if (
            null == i ||
            '/' == i ||
            '?' == i ||
            '#' == i ||
            ('\\' == i && sg(t))
          ) {
            if (h && '' == l) return 'Invalid authority';
            (f -= qn(l).length + 1), (l = ''), (s = kg);
          } else l += i;
          break;
        case kg:
        case Og:
          if (r && 'file' == t.scheme) {
            s = Mg;
            continue;
          }
          if (':' != i || p) {
            if (
              null == i ||
              '/' == i ||
              '?' == i ||
              '#' == i ||
              ('\\' == i && sg(t))
            ) {
              if (sg(t) && '' == l) return 'Invalid host';
              if (r && '' == l && (fg(t) || null !== t.port)) return;
              if ((u = Zv(t, l))) return u;
              if (((l = ''), (s = jg), r)) return;
              continue;
            }
            '[' == i ? (p = !0) : ']' == i && (p = !1), (l += i);
          } else {
            if ('' == l) return 'Invalid host';
            if ((u = Zv(t, l))) return u;
            if (((l = ''), (s = Tg), r == Og)) return;
          }
          break;
        case Tg:
          if (!Wv.test(i)) {
            if (
              null == i ||
              '/' == i ||
              '?' == i ||
              '#' == i ||
              ('\\' == i && sg(t)) ||
              r
            ) {
              if ('' != l) {
                var m = parseInt(l, 10);
                if (m > 65535) return 'Invalid port';
                (t.port = sg(t) && m === cg[t.scheme] ? null : m), (l = '');
              }
              if (r) return;
              s = jg;
              continue;
            }
            return 'Invalid port';
          }
          l += i;
          break;
        case Ig:
          if (((t.scheme = 'file'), '/' == i || '\\' == i)) s = Rg;
          else {
            if (!n || 'file' != n.scheme) {
              s = Lg;
              continue;
            }
            if (null == i)
              (t.host = n.host), (t.path = n.path.slice()), (t.query = n.query);
            else if ('?' == i)
              (t.host = n.host),
                (t.path = n.path.slice()),
                (t.query = ''),
                (s = Fg);
            else {
              if ('#' != i) {
                pg(o.slice(f).join('')) ||
                  ((t.host = n.host), (t.path = n.path.slice()), dg(t)),
                  (s = Lg);
                continue;
              }
              (t.host = n.host),
                (t.path = n.path.slice()),
                (t.query = n.query),
                (t.fragment = ''),
                (s = Ng);
            }
          }
          break;
        case Rg:
          if ('/' == i || '\\' == i) {
            s = Mg;
            break;
          }
          n &&
            'file' == n.scheme &&
            !pg(o.slice(f).join('')) &&
            (hg(n.path[0], !0) ? t.path.push(n.path[0]) : (t.host = n.host)),
            (s = Lg);
          continue;
        case Mg:
          if (null == i || '/' == i || '\\' == i || '?' == i || '#' == i) {
            if (!r && hg(l)) s = Lg;
            else if ('' == l) {
              if (((t.host = ''), r)) return;
              s = jg;
            } else {
              if ((u = Zv(t, l))) return u;
              if (('localhost' == t.host && (t.host = ''), r)) return;
              (l = ''), (s = jg);
            }
            continue;
          }
          l += i;
          break;
        case jg:
          if (sg(t)) {
            if (((s = Lg), '/' != i && '\\' != i)) continue;
          } else if (r || '?' != i)
            if (r || '#' != i) {
              if (null != i && ((s = Lg), '/' != i)) continue;
            } else (t.fragment = ''), (s = Ng);
          else (t.query = ''), (s = Fg);
          break;
        case Lg:
          if (
            null == i ||
            '/' == i ||
            ('\\' == i && sg(t)) ||
            (!r && ('?' == i || '#' == i))
          ) {
            if (
              ('..' === (c = (c = l).toLowerCase()) ||
              '%2e.' === c ||
              '.%2e' === c ||
              '%2e%2e' === c
                ? (dg(t), '/' == i || ('\\' == i && sg(t)) || t.path.push(''))
                : vg(l)
                ? '/' == i || ('\\' == i && sg(t)) || t.path.push('')
                : ('file' == t.scheme &&
                    !t.path.length &&
                    hg(l) &&
                    (t.host && (t.host = ''), (l = l.charAt(0) + ':')),
                  t.path.push(l)),
              (l = ''),
              'file' == t.scheme && (null == i || '?' == i || '#' == i))
            )
              for (; t.path.length > 1 && '' === t.path[0]; ) t.path.shift();
            '?' == i
              ? ((t.query = ''), (s = Fg))
              : '#' == i && ((t.fragment = ''), (s = Ng));
          } else l += ug(i, ig);
          break;
        case Pg:
          '?' == i
            ? ((t.query = ''), (s = Fg))
            : '#' == i
            ? ((t.fragment = ''), (s = Ng))
            : null != i && (t.path[0] += ug(i, ng));
          break;
        case Fg:
          r || '#' != i
            ? null != i &&
              ("'" == i && sg(t)
                ? (t.query += '%27')
                : (t.query += '#' == i ? '%23' : ug(i, ng)))
            : ((t.fragment = ''), (s = Ng));
          break;
        case Ng:
          null != i && (t.fragment += ug(i, og));
      }
      f++;
    }
  },
  Cg = function (t) {
    var e,
      r,
      n = Hs(this, Cg, 'URL'),
      o = arguments.length > 1 ? arguments[1] : void 0,
      i = String(t),
      a = Cv(n, { type: 'URL' });
    if (void 0 !== o)
      if (o instanceof Cg) e = $v(o);
      else if ((r = Ug((e = {}), String(o)))) throw TypeError(r);
    if ((r = Ug(a, i, null, e))) throw TypeError(r);
    var u = (a.searchParams = new Nv()),
      c = Uv(u);
    c.updateSearchParams(a.query),
      (c.updateURL = function () {
        a.query = String(u) || null;
      }),
      I ||
        ((n.href = Dg.call(n)),
        (n.origin = qg.call(n)),
        (n.protocol = Bg.call(n)),
        (n.username = zg.call(n)),
        (n.password = Wg.call(n)),
        (n.host = Vg.call(n)),
        (n.hostname = Hg.call(n)),
        (n.port = Gg.call(n)),
        (n.pathname = Yg.call(n)),
        (n.search = Jg.call(n)),
        (n.searchParams = Xg.call(n)),
        (n.hash = Kg.call(n)));
  },
  $g = Cg.prototype,
  Dg = function () {
    var t = $v(this),
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
          fg(t) && (s += r + (n ? ':' + n : '') + '@'),
          (s += rg(o)),
          null !== i && (s += ':' + i))
        : 'file' == e && (s += '//'),
      (s += t.cannotBeABaseURL ? a[0] : a.length ? '/' + a.join('/') : ''),
      null !== u && (s += '?' + u),
      null !== c && (s += '#' + c),
      s
    );
  },
  qg = function () {
    var t = $v(this),
      e = t.scheme,
      r = t.port;
    if ('blob' == e)
      try {
        return new URL(e.path[0]).origin;
      } catch (t) {
        return 'null';
      }
    return 'file' != e && sg(t)
      ? e + '://' + rg(t.host) + (null !== r ? ':' + r : '')
      : 'null';
  },
  Bg = function () {
    return $v(this).scheme + ':';
  },
  zg = function () {
    return $v(this).username;
  },
  Wg = function () {
    return $v(this).password;
  },
  Vg = function () {
    var t = $v(this),
      e = t.host,
      r = t.port;
    return null === e ? '' : null === r ? rg(e) : rg(e) + ':' + r;
  },
  Hg = function () {
    var t = $v(this).host;
    return null === t ? '' : rg(t);
  },
  Gg = function () {
    var t = $v(this).port;
    return null === t ? '' : String(t);
  },
  Yg = function () {
    var t = $v(this),
      e = t.path;
    return t.cannotBeABaseURL ? e[0] : e.length ? '/' + e.join('/') : '';
  },
  Jg = function () {
    var t = $v(this).query;
    return t ? '?' + t : '';
  },
  Xg = function () {
    return $v(this).searchParams;
  },
  Kg = function () {
    var t = $v(this).fragment;
    return t ? '#' + t : '';
  },
  Qg = function (t, e) {
    return { get: t, set: e, configurable: !0, enumerable: !0 };
  };
if (
  (I &&
    se($g, {
      href: Qg(Dg, function (t) {
        var e = $v(this),
          r = String(t),
          n = Ug(e, r);
        if (n) throw TypeError(n);
        Uv(e.searchParams).updateSearchParams(e.query);
      }),
      origin: Qg(qg),
      protocol: Qg(Bg, function (t) {
        var e = $v(this);
        Ug(e, String(t) + ':', gg);
      }),
      username: Qg(zg, function (t) {
        var e = $v(this),
          r = qn(String(t));
        if (!lg(e)) {
          e.username = '';
          for (var n = 0; n < r.length; n++) e.username += ug(r[n], ag);
        }
      }),
      password: Qg(Wg, function (t) {
        var e = $v(this),
          r = qn(String(t));
        if (!lg(e)) {
          e.password = '';
          for (var n = 0; n < r.length; n++) e.password += ug(r[n], ag);
        }
      }),
      host: Qg(Vg, function (t) {
        var e = $v(this);
        e.cannotBeABaseURL || Ug(e, String(t), kg);
      }),
      hostname: Qg(Hg, function (t) {
        var e = $v(this);
        e.cannotBeABaseURL || Ug(e, String(t), Og);
      }),
      port: Qg(Gg, function (t) {
        var e = $v(this);
        lg(e) || ('' == (t = String(t)) ? (e.port = null) : Ug(e, t, Tg));
      }),
      pathname: Qg(Yg, function (t) {
        var e = $v(this);
        e.cannotBeABaseURL || ((e.path = []), Ug(e, t + '', jg));
      }),
      search: Qg(Jg, function (t) {
        var e = $v(this);
        '' == (t = String(t))
          ? (e.query = null)
          : ('?' == t.charAt(0) && (t = t.slice(1)),
            (e.query = ''),
            Ug(e, t, Fg)),
          Uv(e.searchParams).updateSearchParams(e.query);
      }),
      searchParams: Qg(Xg),
      hash: Qg(Kg, function (t) {
        var e = $v(this);
        '' != (t = String(t))
          ? ('#' == t.charAt(0) && (t = t.slice(1)),
            (e.fragment = ''),
            Ug(e, t, Ng))
          : (e.fragment = null);
      }),
    }),
  rt(
    $g,
    'toJSON',
    function () {
      return Dg.call(this);
    },
    { enumerable: !0 }
  ),
  rt(
    $g,
    'toString',
    function () {
      return Dg.call(this);
    },
    { enumerable: !0 }
  ),
  Fv)
) {
  var Zg = Fv.createObjectURL,
    ty = Fv.revokeObjectURL;
  Zg &&
    rt(Cg, 'createObjectURL', function (t) {
      return Zg.apply(Fv, arguments);
    }),
    ty &&
      rt(Cg, 'revokeObjectURL', function (t) {
        return ty.apply(Fv, arguments);
      });
}
Te(Cg, 'URL'),
  _({ global: !0, forced: !ev, sham: !I }, { URL: Cg }),
  _(
    { target: 'URL', proto: !0, enumerable: !0 },
    {
      toJSON: function () {
        return URL.prototype.toString.call(this);
      },
    }
  );
const ey = async function () {
    try {
      const t = window.location.hash.slice(1);
      if (!t) return;
      m.renderSpinner(),
        S.update(f()),
        x.update(c.bookmarks),
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
  ry = async function () {
    try {
      S.renderSpinner();
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
        S.render(f()),
        E.render(c.search);
    } catch (t) {
      console.log(t);
    }
  },
  ny = function (t) {
    S.render(f(t)), E.render(c.search);
  },
  oy = function (t) {
    !(function (t) {
      c.recipe.ingredients.forEach(e => {
        e.quantity = (e.quantity * t) / c.recipe.servings;
      }),
        (c.recipe.servings = t);
    })(t),
      m.update(c.recipe);
  },
  iy = function () {
    c.recipe.bookmarked
      ? (function (t) {
          const e = c.bookmarks.findIndex(e => e.id === t);
          c.bookmarks.splice(e, 1),
            t === c.recipe.id && (c.recipe.bookmarked = !1),
            l();
        })(c.recipe.id)
      : h(c.recipe),
      m.update(c.recipe),
      x.render(c.bookmarks);
  },
  ay = function () {
    x.render(c.bookmarks);
  },
  uy = async function (t) {
    try {
      k.renderSpinner(),
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
        k.renderMessage(),
        x.render(c.bookmarks),
        window.history.pushState(null, '', `#${c.recipe.id}`),
        setTimeout(function () {
          k.toggleWindow();
        }, 2500);
    } catch (t) {
      console.error('💥', t), k.renderError(t.message);
    }
  };
x.addHandlerRender(ay),
  m.addHandlerRender(ey),
  m.addHandlerUpdateServings(oy),
  m.addHandlerAddBookmark(iy),
  b.addHandlerSearch(ry),
  E.addHandlerClick(ny),
  k.addHandlerUpload(uy);
//# sourceMappingURL=index.47d2f5e8.js.map
