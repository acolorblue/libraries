// ORIGINAL CREDIT TO https://github.com/bfred-it/iphone-inline-video. CODE EXTRACTED MANUALLY TO TIDY.




// INLINE JQUERY IOS
var enableInlineVideo = (function() {
  "use strict" /*! npm.im/intervalometer */;
  function e(e, i, n, r) {
    function t(n) {
      (d = i(t, r)), e(n - (a || n)), (a = n);
    }
    var d, a;
    return {
      start: function() {
        d || t(0);
      },
      stop: function() {
        n(d), (d = null), (a = 0);
      }
    };
  }
  function i(i) {
    return e(i, requestAnimationFrame, cancelAnimationFrame);
  }
  function n(e, i, n) {
    function r(r) {
      (n && !n(e, i)) || r.stopImmediatePropagation();
    }
    return e.addEventListener(i, r), r;
  }
  function r(e, i, n, r) {
    function t() {
      return n[i];
    }
    function d(e) {
      n[i] = e;
    }
    r && d(e[i]), Object.defineProperty(e, i, { get: t, set: d });
  }
  function t(e, i, n) {
    n.addEventListener(i, function() {
      return e.dispatchEvent(new Event(i));
    });
  }
  function d(e, i) {
    Promise.resolve().then(function() {
      e.dispatchEvent(new Event(i));
    });
  }
  function a(e) {
    var i = new Audio();
    return (
      t(e, "play", i),
      t(e, "playing", i),
      t(e, "pause", i),
      (i.crossOrigin = e.crossOrigin),
      (i.src = e.src || e.currentSrc || "data:"),
      i
    );
  }
  function u(e, i, n) {
    (m || 0) + 200 < Date.now() && ((e[h] = !0), (m = Date.now())),
      n || (e.currentTime = i),
      (k[++T % 3] = (100 * i) | 0);
  }
  function o(e) {
    return e.driver.currentTime >= e.video.duration;
  }
  function s(e) {
    var i = this;
    i.video.readyState >= i.video.HAVE_FUTURE_DATA
      ? (i.hasAudio ||
          ((i.driver.currentTime =
            i.video.currentTime + e * i.video.playbackRate / 1e3),
          i.video.loop && o(i) && (i.driver.currentTime = 0)),
        u(i.video, i.driver.currentTime))
      : i.video.networkState === i.video.NETWORK_IDLE &&
        0 === i.video.buffered.length &&
        i.video.load(),
      i.video.ended && (delete i.video[h], i.video.pause(!0));
  }
  function c() {
    var e = this,
      i = e[g];
    if (e.webkitDisplayingFullscreen) return void e[E]();
    "data:" !== i.driver.src &&
      i.driver.src !== e.src &&
      (u(e, 0, !0), (i.driver.src = e.src)),
      e.paused &&
        ((i.paused = !1),
        0 === e.buffered.length && e.load(),
        i.driver.play(),
        i.updater.start(),
        i.hasAudio ||
          (d(e, "play"),
          i.video.readyState >= i.video.HAVE_ENOUGH_DATA && d(e, "playing")));
  }
  function v(e) {
    var i = this,
      n = i[g];
    n.driver.pause(),
      n.updater.stop(),
      i.webkitDisplayingFullscreen && i[w](),
      (n.paused && !e) ||
        ((n.paused = !0),
        n.hasAudio || d(i, "pause"),
        i.ended &&
          !i.webkitDisplayingFullscreen &&
          ((i[h] = !0), d(i, "ended")));
  }
  function p(e, n) {
    var r = {};
    (e[g] = r),
      (r.paused = !0),
      (r.hasAudio = n),
      (r.video = e),
      (r.updater = i(s.bind(r))),
      n
        ? (r.driver = a(e))
        : (e.addEventListener("canplay", function() {
            e.paused || d(e, "playing");
          }),
          (r.driver = {
            src: e.src || e.currentSrc || "data:",
            muted: !0,
            paused: !0,
            pause: function() {
              r.driver.paused = !0;
            },
            play: function() {
              (r.driver.paused = !1), o(r) && u(e, 0);
            },
            get ended() {
              return o(r);
            }
          })),
      e.addEventListener(
        "emptied",
        function() {
          var i = !r.driver.src || "data:" === r.driver.src;
          r.driver.src &&
            r.driver.src !== e.src &&
            (u(e, 0, !0),
            (r.driver.src = e.src),
            i || (!n && e.autoplay) ? r.driver.play() : r.updater.stop());
        },
        !1
      ),
      e.addEventListener("webkitbeginfullscreen", function() {
        e.paused
          ? n && 0 === r.driver.buffered.length && r.driver.load()
          : (e.pause(), e[E]());
      }),
      n &&
        (e.addEventListener("webkitendfullscreen", function() {
          r.driver.currentTime = e.currentTime;
        }),
        e.addEventListener("seeking", function() {
          k.indexOf((100 * e.currentTime) | 0) < 0 &&
            (r.driver.currentTime = e.currentTime);
        }));
  }
  function l(e) {
    var i = e[h];
    return delete e[h], !e.webkitDisplayingFullscreen && !i;
  }
  function f(e) {
    var i = e[g];
    (e[E] = e.play),
      (e[w] = e.pause),
      (e.play = c),
      (e.pause = v),
      r(e, "paused", i.driver),
      r(e, "muted", i.driver, !0),
      r(e, "playbackRate", i.driver, !0),
      r(e, "ended", i.driver),
      r(e, "loop", i.driver, !0),
      n(e, "seeking", function(e) {
        return !e.webkitDisplayingFullscreen;
      }),
      n(e, "seeked", function(e) {
        return !e.webkitDisplayingFullscreen;
      }),
      n(e, "timeupdate", l),
      n(e, "ended", l);
  }
  function y(e, i) {
    if ((void 0 === i && (i = {}), !e[g])) {
      if (!i.everywhere) {
        if (!b) return;
        if (
          !(i.iPad || i.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(
            navigator.userAgent
          )
        )
          return;
      }
      e.pause();
      var n = e.autoplay;
      (e.autoplay = !1),
        p(e, !e.muted),
        f(e),
        e.classList.add("IIV"),
        e.muted &&
          n &&
          (e.play(),
          e.addEventListener("playing", function i() {
            (e.autoplay = !0), e.removeEventListener("playing", i);
          })),
        /iPhone|iPod|iPad/.test(navigator.platform) ||
          console.warn(
            "iphone-inline-video is not guaranteed to work in emulated environments"
          );
    }
  }
  var m,
    b =
      "object" == typeof document &&
      "object-fit" in document.head.style &&
      !matchMedia("(-webkit-video-playable-inline)").matches,
    g = "bfred-it:iphone-inline-video",
    h = "bfred-it:iphone-inline-video:event",
    E = "bfred-it:iphone-inline-video:nativeplay",
    w = "bfred-it:iphone-inline-video:nativepause",
    k = [],
    T = 0;
  return y;
})();




// INLINE VIDEO CHANGE ANDROID
function enableInlineVideoAndroid(element) {
  $(element).each(function() {
    video = $(this);
    source_link = video.attr('src');
    source = video.find('source');
    
    source.attr('src', source_link).attr('type', 'video/mp4');
    video.append(source).removeAttr('src playsinline').attr('controls', '');
  });
}
