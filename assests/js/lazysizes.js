/*! lazysizes - v4.1.1 */
!function(a, b) {
  var c = function() {
    b(a.lazySizes), a.removeEventListener('lazyunveilread', c, !0);
  };
  b = b.bind(null, a, a.document), 'object' == typeof module && module.exports
      ? b(require('lazysizes'), require('../fix-ios-sizes/fix-ios-sizes'))
      : a.lazySizes ? c() : a.addEventListener('lazyunveilread', c, !0);
}(window, function(a, b, c) {
  'use strict';
  var d, e = c && c.cfg || a.lazySizesConfig,
      f = b.createElement('img'),
      g = 'sizes' in f && 'srcset' in f,
      h = /\s+\d+h/g,
      i = function() {
        var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            c = Array.prototype.forEach;
        return function(d) {
          var e = b.createElement('img'),
              f = function(b) {
                var c, d, e = b.getAttribute(lazySizesConfig.srcsetAttr);
                e && ((d = e.match(a)) &&
                (c = 'w' == d[2] ? d[1] / d[3] : d[3] / d[1], c &&
                b.setAttribute('data-aspectratio', c)), b.setAttribute(
                    lazySizesConfig.srcsetAttr, e.replace(h, '')));
              },
              g = function(a) {
                var b = a.target.parentNode;
                b && 'PICTURE' == b.nodeName &&
                c.call(b.getElementsByTagName('source'), f), f(a.target);
              },
              i = function() {
                e.currentSrc && b.removeEventListener('lazybeforeunveil', g);
              };
          d[1] && (b.addEventListener('lazybeforeunveil',
              g), e.onload = i, e.onerror = i, e.srcset = 'data:,a 1w 1h', e.complete &&
          i());
        };
      }();
  if (e || (e = {}, a.lazySizesConfig = e), e.supportsType ||
  (e.supportsType = function(a) {
    return !a;
  }), !a.picturefill && !e.pf) {
    if (a.HTMLPictureElement && g) return b.msElementsFromPoint &&
    i(navigator.userAgent.match(/Edge\/(\d+)/)), void (e.pf = function() {});
    e.pf = function(b) {
      var c, e;
      if (!a.picturefill)
        for (c = 0, e = b.elements.length; e > c; c++) d(b.elements[c]);
    }, d = function() {
      var f = function(a, b) {
            return a.w - b.w;
          },
          i = /^\s*\d+\.*\d*px\s*$/,
          j = function(a) {
            var b, c, d = a.length,
                e = a[d - 1],
                f = 0;
            for (f; d > f; f++)
              if (e = a[f], e.d = e.w / a.w, e.d >= a.d) {
                !e.cached && (b = a[f - 1]) && b.d > a.d - .13 *
                Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached &&
                (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b));
                break;
              }
            return e;
          },
          k = function() {
            var a, b = /(([^,\s].[^\s]+)\s+(\d+)w)/g,
                c = /\s/,
                d = function(b, c, d, e) {
                  a.push({
                    c: c,
                    u: d,
                    w: 1 * e,
                  });
                };
            return function(e) {
              return a = [], e = e.trim(), e.replace(h, '').
                  replace(b, d), a.length || !e || c.test(e) || a.push({
                c: e,
                u: e,
                w: 99,
              }), a;
            };
          }(),
          l = function() {
            l.init || (l.init = !0, addEventListener('resize', function() {
              var a, c = b.getElementsByClassName('lazymatchmedia'),
                  e = function() {
                    var a, b;
                    for (a = 0, b = c.length; b > a; a++) d(c[a]);
                  };
              return function() {
                clearTimeout(a), a = setTimeout(e, 66);
              };
            }()));
          },
          m = function(b, d) {
            var f, g = b.getAttribute('srcset') || b.getAttribute(e.srcsetAttr);
            !g && d &&
            (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(
                e.srcAttr) || b.getAttribute('src')), b._lazypolyfill &&
            b._lazypolyfill._set == g || (f = k(g || ''), d && b.parentNode &&
            (f.isPicture = 'PICTURE' ==
                b.parentNode.nodeName.toUpperCase(), f.isPicture &&
            a.matchMedia && (c.aC(b,
                'lazymatchmedia'), l())), f._set = g, Object.defineProperty(b,
                '_lazypolyfill', {
                  value: f,
                  writable: !0,
                }));
          },
          n = function(b) {
            var d = a.devicePixelRatio || 1,
                e = c.getX && c.getX(b);
            return Math.min(e || d, 2.5, d);
          },
          o = function(b) {
            return a.matchMedia ? (o = function(a) {
              return !a || (matchMedia(a) || {}).matches;
            })(b) : !b;
          },
          p = function(a) {
            var b, d, g, h, k, l, p;
            if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture)
              for (d = 0, b = a.parentNode.getElementsByTagName(
                  'source'), g = b.length; g > d; d++)
                if (e.supportsType(b[d].getAttribute('type'), a) &&
                    o(b[d].getAttribute('media'))) {
                  h = b[d], m(h), k = h._lazypolyfill;
                  break;
                }
            return k.length > 1 ? (p = h.getAttribute('sizes') ||
                '', p = i.test(p) && parseInt(p, 10) ||
                c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p
                ? (k.w = p, l = j(k.sort(f)), k.src = l)
                : l = k.src) : l = k[0], l;
          },
          q = function(a) {
            if (!g || !a.parentNode || 'PICTURE' ==
                a.parentNode.nodeName.toUpperCase()) {
              var b = p(a);
              b && b.u && a._lazypolyfill.cur != b.u &&
              (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(
                  e.srcAttr, b.u), a.setAttribute('src', b.u));
            }
          };
      return q.parse = k, q;
    }(), e.loadedClass && e.loadingClass && !function() {
      var a = [];
      ['img[sizes$="px"][srcset].', 'picture > img:not([srcset]).'].forEach(
          function(b) {
            a.push(b + e.loadedClass), a.push(b + e.loadingClass);
          }), e.pf({
        elements: b.querySelectorAll(a.join(', ')),
      });
    }();
  }
});
jQuery(document).ready(function($) {
  $(document).foundation();
});

/*! lazysizes - v4.1.1 */
!function(a, b) {
  var c = b(a, a.document);
  a.lazySizes = c, 'object' == typeof module && module.exports &&
  (module.exports = c);
}(window, function(a, b) {
  'use strict';
  if (b.getElementsByClassName) {
    var c, d, e = b.documentElement,
        f = a.Date,
        g = a.HTMLPictureElement,
        h = 'addEventListener',
        i = 'getAttribute',
        j = a[h],
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ['load', 'error', 'lazyincluded', '_lazyloaded'],
        p = {},
        q = Array.prototype.forEach,
        r = function(a, b) {
          return p[b] ||
          (p[b] = new RegExp('(\\s|^)' + b + '(\\s|$)')), p[b].test(
              a[i]('class') || '') && p[b];
        },
        s = function(a, b) {
          r(a, b) ||
          a.setAttribute('class', (a[i]('class') || '').trim() + ' ' + b);
        },
        t = function(a, b) {
          var c;
          (c = r(a, b)) &&
          a.setAttribute('class', (a[i]('class') || '').replace(c, ' '));
        },
        u = function(a, b, c) {
          var d = c ? h : 'removeEventListener';
          c && u(a, b), o.forEach(function(c) {
            a[d](c, b);
          });
        },
        v = function(a, d, e, f, g) {
          var h = b.createEvent('CustomEvent');
          return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g,
              e), a.dispatchEvent(h), h;
        },
        w = function(b, c) {
          var e;
          !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]('srcset') &&
          b.setAttribute('srcset', c.src), e({
            reevaluate: !0,
            elements: [b],
          })) : c && c.src && (b.src = c.src);
        },
        x = function(a, b) {
          return (getComputedStyle(a, null) || {})[b];
        },
        y = function(a, b, c) {
          for (c = c || a.offsetWidth; c < d.minSize && b &&
          !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
          return c;
        },
        z = function() {
          var a, c, d = [],
              e = [],
              f = d,
              g = function() {
                var b = f;
                for (f = d.length
                    ? e
                    : d, a = !0, c = !1; b.length;) b.shift()();
                a = !1;
              },
              h = function(d, e) {
                a && !e ? d.apply(this, arguments) : (f.push(d), c ||
                (c = !0, (b.hidden ? k : l)(g)));
              };
          return h._lsFlush = g, h;
        }(),
        A = function(a, b) {
          return b ? function() {
            z(a);
          } : function() {
            var b = this,
                c = arguments;
            z(function() {
              a.apply(b, c);
            });
          };
        },
        B = function(a) {
          var b, c = 0,
              e = d.throttleDelay,
              g = d.ricTimeout,
              h = function() {
                b = !1, c = f.now(), a();
              },
              i = m && g > 49 ? function() {
                m(h, {
                  timeout: g,
                }), g !== d.ricTimeout && (g = d.ricTimeout);
              } : A(function() {
                k(h);
              }, !0);
          return function(a) {
            var d;
            (a = a === !0) && (g = 33), b ||
            (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d
                ? i()
                : k(i, d));
          };
        },
        C = function(a) {
          var b, c, d = 99,
              e = function() {
                b = null, a();
              },
              g = function() {
                var a = f.now() - c;
                d > a ? k(g, d - a) : (m || e)(e);
              };
          return function() {
            c = f.now(), b || (b = k(g, d));
          };
        };
    !function() {
      var b, c = {
        lazyClass: 'lazyload',
        loadedClass: 'lazyloaded',
        loadingClass: 'lazyloading',
        preloadClass: 'lazypreload',
        errorClass: 'lazyerror',
        autosizesClass: 'lazyautosizes',
        srcAttr: 'data-src',
        srcsetAttr: 'data-srcset',
        sizesAttr: 'data-sizes',
        minSize: 40,
        customMedia: {},
        init: !0,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: !0,
        ricTimeout: 0,
        throttleDelay: 125,
      };
      d = a.lazySizesConfig || a.lazysizesConfig || {};
      for (b in c) b in d || (d[b] = c[b]);
      a.lazySizesConfig = d, k(function() {
        d.init && F();
      });
    }();
    var D = function() {
          var g, l, m, o, p, y, D, F, G, H, I, J, K, L, M = /^img$/i,
              N = /^iframe$/i,
              O = 'onscroll' in a && !/(gle|ing)bot/.test(navigator.userAgent),
              P = 0,
              Q = 0,
              R = 0,
              S = -1,
              T = function(a) {
                R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) &&
                (R = 0);
              },
              U = function(a, c) {
                var d, f = a,
                    g = 'hidden' == x(b.body, 'visibility') || 'hidden' !=
                        x(a.parentNode, 'visibility') && 'hidden' !=
                        x(a, 'visibility');
                for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) &&
                f != b.body && f != e;) g = (x(f, 'opacity') || 1) > 0, g &&
                'visible' != x(f, 'overflow') &&
                (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I >
                    d.top - 1 && F < d.bottom + 1);
                return g;
              },
              V = function() {
                var a, f, h, j, k, m, n, p, q, r = c.elements;
                if ((o = d.loadMode) && 8 > R && (a = r.length)) {
                  f = 0, S++, null == K && ('expand' in d ||
                  (d.expand = e.clientHeight > 500 && e.clientWidth > 500
                      ? 500
                      : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R &&
                  S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S >
                  1 && 6 > R ? J : P;
                  for (; a > f; f++)
                    if (r[f] && !r[f]._lazyRace)
                      if (O)
                        if ((p = r[f][i]('data-expand')) && (m = 1 * p) ||
                        (m = Q), q !== m &&
                        (y = innerWidth + m * L, D = innerHeight + m, n = -1 *
                            m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >=
                        n && (F = h.top) <= D && (H = h.right) >= n * L &&
                        (G = h.left) <= y && (I || H || G || F) &&
                        (d.loadHidden || 'hidden' != x(r[f], 'visibility')) &&
                        (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                          if (ba(r[f]), k = !0, R > 9) break;
                        } else !k && l && !j && 4 > R && 4 > S && o > 2 &&
                        (g[0] || d.preloadAfterLoad) && (g[0] || !p &&
                            (I || H || G || F || 'auto' != r[f][i](d.sizesAttr))) &&
                        (j = g[0] || r[f]);
                      else ba(r[f]);
                  j && !k && ba(j);
                }
              },
              W = B(V),
              X = function(a) {
                s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target,
                    Z), v(a.target, 'lazyloaded');
              },
              Y = A(X),
              Z = function(a) {
                Y({
                  target: a.target,
                });
              },
              $ = function(a, b) {
                try {
                  a.contentWindow.location.replace(b);
                } catch (c) {
                  a.src = b;
                }
              },
              _ = function(a) {
                var b, c = a[i](d.srcsetAttr);
                (b = d.customMedia[a[i]('data-media') || a[i]('media')]) &&
                a.setAttribute('media', b), c && a.setAttribute('srcset', c);
              },
              aa = A(function(a, b, c, e, f) {
                var g, h, j, l, o, p;
                (o = v(a, 'lazybeforeunveil', b)).defaultPrevented || (e &&
                (c ? s(a, d.autosizesClass) : a.setAttribute('sizes', e)), h = a[i](
                    d.srcsetAttr), g = a[i](d.srcAttr), f &&
                (j = a.parentNode, l = j &&
                    n.test(j.nodeName || '')), p = b.firesLoad || 'src' in a &&
                    (h || g || l), o = {
                  target: a,
                }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a,
                    d.loadingClass), u(a, Z, !0)), l &&
                q.call(j.getElementsByTagName('source'), _), h ? a.setAttribute(
                    'srcset', h) : g && !l &&
                    (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) &&
                w(a, {
                  src: g,
                })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(
                    function() {
                      (!p || a.complete && a.naturalWidth > 1) &&
                      (p ? T(o) : R--, X(o));
                    }, !0);
              }),
              ba = function(a) {
                var b, c = M.test(a.nodeName),
                    e = c && (a[i](d.sizesAttr) || a[i]('sizes')),
                    f = 'auto' == e;
                (!f && l || !c || !a[i]('src') && !a.srcset || a.complete ||
                    r(a, d.errorClass) || !r(a, d.lazyClass)) &&
                (b = v(a, 'lazyunveilread').detail, f &&
                E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b,
                    f, e, c));
              },
              ca = function() {
                if (!l) {
                  if (f.now() - p < 999) return void k(ca, 999);
                  var a = C(function() {
                    d.loadMode = 3, W();
                  });
                  l = !0, d.loadMode = 3, W(), j('scroll', function() {
                    3 == d.loadMode && (d.loadMode = 2), a();
                  }, !0);
                }
              };
          return {
            _: function() {
              p = f.now(), c.elements = b.getElementsByClassName(
                  d.lazyClass), g = b.getElementsByClassName(
                  d.lazyClass + ' ' + d.preloadClass), L = d.hFac, j('scroll', W,
                  !0), j('resize', W, !0), a.MutationObserver
                  ? new MutationObserver(W).observe(e, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                  })
                  : (e[h]('DOMNodeInserted', W, !0), e[h]('DOMAttrModified', W,
                      !0), setInterval(W, 999)), j('hashchange', W, !0), [
                'focus',
                'mouseover',
                'click',
                'load',
                'transitionend',
                'animationend',
                'webkitAnimationEnd'].forEach(function(a) {
                b[h](a, W, !0);
              }), /d$|^c/.test(b.readyState) ? ca() : (j('load', ca), b[h](
                  'DOMContentLoaded', W), k(ca, 2e4)), c.elements.length
                  ? (V(), z._lsFlush())
                  : W();
            },
            checkElems: W,
            unveil: ba,
          };
        }(),
        E = function() {
          var a, c = A(function(a, b, c, d) {
                var e, f, g;
                if (a._lazysizesWidth = d, d += 'px', a.setAttribute('sizes',
                    d), n.test(b.nodeName || ''))
                  for (e = b.getElementsByTagName(
                      'source'), f = 0, g = e.length; g > f; f++) e[f].setAttribute(
                      'sizes', d);
                c.detail.dataAttr || w(a, c.detail);
              }),
              e = function(a, b, d) {
                var e, f = a.parentNode;
                f && (d = y(a, f, d), e = v(a, 'lazybeforesizes', {
                  width: d,
                  dataAttr: !!b,
                }), e.defaultPrevented ||
                (d = e.detail.width, d && d !== a._lazysizesWidth &&
                c(a, f, e, d)));
              },
              f = function() {
                var b, c = a.length;
                if (c)
                  for (b = 0; c > b; b++) e(a[b]);
              },
              g = C(f);
          return {
            _: function() {
              a = b.getElementsByClassName(d.autosizesClass), j('resize', g);
            },
            checkElems: g,
            updateElem: e,
          };
        }(),
        F = function() {
          F.i || (F.i = !0, E._(), D._());
        };
    return c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z,
    };
  }
});
