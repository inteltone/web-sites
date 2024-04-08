/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* binding */ CLASSES),
/* harmony export */   CLASS_ACTIVE: () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   CLASS_ARROW: () => (/* binding */ CLASS_ARROW),
/* harmony export */   CLASS_ARROWS: () => (/* binding */ CLASS_ARROWS),
/* harmony export */   CLASS_ARROW_NEXT: () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   CLASS_ARROW_PREV: () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   CLASS_CLONE: () => (/* binding */ CLASS_CLONE),
/* harmony export */   CLASS_CONTAINER: () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   CLASS_FOCUS_IN: () => (/* binding */ CLASS_FOCUS_IN),
/* harmony export */   CLASS_INITIALIZED: () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   CLASS_LIST: () => (/* binding */ CLASS_LIST),
/* harmony export */   CLASS_LOADING: () => (/* binding */ CLASS_LOADING),
/* harmony export */   CLASS_NEXT: () => (/* binding */ CLASS_NEXT),
/* harmony export */   CLASS_OVERFLOW: () => (/* binding */ CLASS_OVERFLOW),
/* harmony export */   CLASS_PAGINATION: () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   CLASS_PAGINATION_PAGE: () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   CLASS_PREV: () => (/* binding */ CLASS_PREV),
/* harmony export */   CLASS_PROGRESS: () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   CLASS_PROGRESS_BAR: () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   CLASS_ROOT: () => (/* binding */ CLASS_ROOT),
/* harmony export */   CLASS_SLIDE: () => (/* binding */ CLASS_SLIDE),
/* harmony export */   CLASS_SPINNER: () => (/* binding */ CLASS_SPINNER),
/* harmony export */   CLASS_SR: () => (/* binding */ CLASS_SR),
/* harmony export */   CLASS_TOGGLE: () => (/* binding */ CLASS_TOGGLE),
/* harmony export */   CLASS_TOGGLE_PAUSE: () => (/* binding */ CLASS_TOGGLE_PAUSE),
/* harmony export */   CLASS_TOGGLE_PLAY: () => (/* binding */ CLASS_TOGGLE_PLAY),
/* harmony export */   CLASS_TRACK: () => (/* binding */ CLASS_TRACK),
/* harmony export */   CLASS_VISIBLE: () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   DEFAULTS: () => (/* binding */ DEFAULTS),
/* harmony export */   EVENT_ACTIVE: () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   EVENT_ARROWS_MOUNTED: () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   EVENT_ARROWS_UPDATED: () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   EVENT_AUTOPLAY_PAUSE: () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   EVENT_AUTOPLAY_PLAY: () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   EVENT_AUTOPLAY_PLAYING: () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   EVENT_CLICK: () => (/* binding */ EVENT_CLICK),
/* harmony export */   EVENT_DESTROY: () => (/* binding */ EVENT_DESTROY),
/* harmony export */   EVENT_DRAG: () => (/* binding */ EVENT_DRAG),
/* harmony export */   EVENT_DRAGGED: () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   EVENT_DRAGGING: () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   EVENT_END_INDEX_CHANGED: () => (/* binding */ EVENT_END_INDEX_CHANGED),
/* harmony export */   EVENT_HIDDEN: () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   EVENT_INACTIVE: () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   EVENT_LAZYLOAD_LOADED: () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   EVENT_MOUNTED: () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   EVENT_MOVE: () => (/* binding */ EVENT_MOVE),
/* harmony export */   EVENT_MOVED: () => (/* binding */ EVENT_MOVED),
/* harmony export */   EVENT_NAVIGATION_MOUNTED: () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   EVENT_OVERFLOW: () => (/* binding */ EVENT_OVERFLOW),
/* harmony export */   EVENT_PAGINATION_MOUNTED: () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   EVENT_PAGINATION_UPDATED: () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   EVENT_READY: () => (/* binding */ EVENT_READY),
/* harmony export */   EVENT_REFRESH: () => (/* binding */ EVENT_REFRESH),
/* harmony export */   EVENT_RESIZE: () => (/* binding */ EVENT_RESIZE),
/* harmony export */   EVENT_RESIZED: () => (/* binding */ EVENT_RESIZED),
/* harmony export */   EVENT_SCROLL: () => (/* binding */ EVENT_SCROLL),
/* harmony export */   EVENT_SCROLLED: () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   EVENT_SHIFTED: () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   EVENT_SLIDE_KEYDOWN: () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   EVENT_UPDATED: () => (/* binding */ EVENT_UPDATED),
/* harmony export */   EVENT_VISIBLE: () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   EventBinder: () => (/* binding */ EventBinder),
/* harmony export */   EventInterface: () => (/* binding */ EventInterface),
/* harmony export */   FADE: () => (/* binding */ FADE),
/* harmony export */   LOOP: () => (/* binding */ LOOP),
/* harmony export */   LTR: () => (/* binding */ LTR),
/* harmony export */   RTL: () => (/* binding */ RTL),
/* harmony export */   RequestInterval: () => (/* binding */ RequestInterval),
/* harmony export */   SLIDE: () => (/* binding */ SLIDE),
/* harmony export */   STATUS_CLASSES: () => (/* binding */ STATUS_CLASSES),
/* harmony export */   Splide: () => (/* binding */ Splide),
/* harmony export */   SplideRenderer: () => (/* binding */ SplideRenderer),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   TTB: () => (/* binding */ TTB),
/* harmony export */   Throttle: () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ }),

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.4
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,r=this,o=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),r.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,r=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(u(s));this.elements=Array.from(r).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,r=e.querySelector(u(i)),o=l("transitionDuration");r.style[o]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,r=e.querySelector(u(s)),o=e.querySelector(u(i));e.setAttribute("id",e.id||"ac-".concat(t)),r.setAttribute("id",r.id||"ac-trigger-".concat(t)),o.setAttribute("id",o.id||"ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(u(n)),r=e.querySelector(u(s));e.id.startsWith("ac-")&&e.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id")},setARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.setAttribute("role","button"),r.setAttribute("aria-controls",o.id),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",r.id)}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,r=i.ariaEnabled,o=i.triggerClass;if(r){var a=e.querySelector(u(o));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.removeAttribute("role"),r.removeAttribute("aria-controls"),r.removeAttribute("aria-disabled"),r.removeAttribute("aria-expanded"),o.removeAttribute("role"),o.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(u(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.collapse,o=n.beforeOpen;t&&o(e);var a=e.querySelector(u(s)),l=a.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(l,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!r})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.beforeClose,o=e.querySelector(u(s)),a=o.scrollHeight;e.classList.remove(i),t?(r(e),requestAnimationFrame((function(){o.style.height="".concat(a,"px"),requestAnimationFrame((function(){o.style.height=0}))}))):o.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var t=e.currentTarget,n=this.elements.find((function(e){return e.contains(t)}));this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(e){if(e.stopPropagation(),"height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,r=parseInt(i.style.height),o=this.elements.find((function(e){return e.contains(i)}));r>0?(i.style.height="auto",n(o)):s(o)}}};this.attachEvents=function(){if(!o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.addEventListener("click",a.handleClick),s.addEventListener("keydown",a.handleKeydown),s.addEventListener("focus",a.handleFocus),i.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.addEventListener("transitionend",a.handleTransitionEnd)})),o=!0}},this.detachEvents=function(){if(o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.removeEventListener("click",a.handleClick),s.removeEventListener("keydown",a.handleKeydown),s.removeEventListener("focus",a.handleFocus),i.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.removeEventListener("transitionend",a.handleTransitionEnd)})),o=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){var e=a.options,t=e.activeClass,n=e.onOpen;a.elements.forEach((function(e){e.classList.contains(t)||(a.showElement(e,!1),n(e))}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){var e=a.options,t=e.activeClass,n=e.onClose;a.elements.forEach((function(e){e.classList.contains(t)&&(a.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),o=!0},this.update=function(){a.createDefinitions(),i.detachEvents(),i.attachEvents()};var l=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=c(e),e="webkit".concat(e))},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){return".".concat(CSS.escape(e))};a.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// console.log(tabs)

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules = [{
//     ruleSelector: '.input-name',
//     rules: [{
//         rule: 'minLength',
//         value: 3,
//         errorMessage: 'Не менее 3 символов',
//       },
//       {
//         rule: 'required',
//         value: true,
//         errorMessage: 'Введите имя'
//       }
//     ]
//   },
//   {
//     ruleSelector: '.input-tel',
//     tel: true,
//     telError: 'Телефон некорректный',
//     rules: [{
//       rule: 'required',
//       value: true,
//       errorMessage: 'Введите телефон'
//     }]
//   },
//   {
//     ruleSelector: '.input-email',
//     rules: [{
//         rule: 'email',
//         errorMessage: 'Некорректный email',
//       },
//       {
//         rule: 'required',
//         // value: true,
//         errorMessage: 'Введите email'
//       }
//     ]
//   },
// ];

// const afterForm = () => {
// console.log('Произошла отправка, тут можно писать любые действия');
// };

///////////// P O P U P /////////////////////////////////////////////////////

// const modals = document ? .querySelectorAll('.modal')
// modals.forEach(el => el.addEventListener('click', handleModalClicked, false))

// function handleModalClicked() {
//   dialog.showModal()
//   validateForms('.form-modal', rules_modal, afterForm)
// }

// const close_btn = document ? .querySelector(".close-btn")
// const dialog = document ? .querySelector("dialog")

// dialog ? .addEventListener("click", e => {
//   const dialogDimensions = dialog.getBoundingClientRect()
//   if (
//     e.clientX < dialogDimensions.left ||
//     e.clientX > dialogDimensions.right ||
//     e.clientY < dialogDimensions.top ||
//     e.clientY > dialogDimensions.bottom
//   ) {
//     dialog.close()
//   }
// })
// close_btn ? .addEventListener('click', () => {
//   dialog.close()
// })

// if (!dialog ? .hasAttribute('open')) {
//   validateForms('.form-page', rules_page, afterForm)
// }

/***/ }),

/***/ "./node_modules/lightgallery/lightgallery.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/lightgallery/lightgallery.es5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var lightGalleryCoreSettings = {
    mode: 'lg-slide',
    easing: 'ease',
    speed: 400,
    licenseKey: '0000-0000-000-0000',
    height: '100%',
    width: '100%',
    addClass: '',
    startClass: 'lg-start-zoom',
    backdropDuration: 300,
    container: '',
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: '1280-720',
    loadYouTubePoster: true,
    defaultCaptionHeight: 0,
    ariaLabelledby: '',
    ariaDescribedby: '',
    resetScrollPosition: true,
    hideScrollbar: false,
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    trapFocus: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: '.lg-sub-html',
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: '',
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: 0,
    iframeWidth: '100%',
    iframeHeight: '100%',
    iframeMaxWidth: '100%',
    iframeMaxHeight: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: '',
    isMobile: undefined,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
    },
    plugins: [],
    strings: {
        closeGallery: 'Close gallery',
        toggleMaximize: 'Toggle maximize',
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        download: 'Download',
        playVideo: 'Play video',
    },
};

function initLgPolyfills() {
    (function () {
        if (typeof window.CustomEvent === 'function')
            return false;
        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: null,
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    (function () {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector;
        }
    })();
}
var lgQuery = /** @class */ (function () {
    function lgQuery(selector) {
        this.cssVenderPrefixes = [
            'TransitionDuration',
            'TransitionTimingFunction',
            'Transform',
            'Transition',
        ];
        this.selector = this._getSelector(selector);
        this.firstElement = this._getFirstEl();
        return this;
    }
    lgQuery.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    lgQuery.prototype._getSelector = function (selector, context) {
        if (context === void 0) { context = document; }
        if (typeof selector !== 'string') {
            return selector;
        }
        context = context || document;
        var fl = selector.substring(0, 1);
        if (fl === '#') {
            return context.querySelector(selector);
        }
        else {
            return context.querySelectorAll(selector);
        }
    };
    lgQuery.prototype._each = function (func) {
        if (!this.selector) {
            return this;
        }
        if (this.selector.length !== undefined) {
            [].forEach.call(this.selector, func);
        }
        else {
            func(this.selector, 0);
        }
        return this;
    };
    lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
        // prettier-ignore
        var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        });
        if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        }
        else {
            el.style[property] = value;
        }
    };
    lgQuery.prototype._getFirstEl = function () {
        if (this.selector && this.selector.length !== undefined) {
            return this.selector[0];
        }
        else {
            return this.selector;
        }
    };
    lgQuery.prototype.isEventMatched = function (event, eventName) {
        var eventNamespace = eventName.split('.');
        return event
            .split('.')
            .filter(function (e) { return e; })
            .every(function (e) {
            return eventNamespace.indexOf(e) !== -1;
        });
    };
    lgQuery.prototype.attr = function (attr, value) {
        if (value === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.getAttribute(attr);
        }
        this._each(function (el) {
            el.setAttribute(attr, value);
        });
        return this;
    };
    lgQuery.prototype.find = function (selector) {
        return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery.prototype.first = function () {
        if (this.selector && this.selector.length !== undefined) {
            return $LG(this.selector[0]);
        }
        else {
            return $LG(this.selector);
        }
    };
    lgQuery.prototype.eq = function (index) {
        return $LG(this.selector[index]);
    };
    lgQuery.prototype.parent = function () {
        return $LG(this.selector.parentElement);
    };
    lgQuery.prototype.get = function () {
        return this._getFirstEl();
    };
    lgQuery.prototype.removeAttr = function (attributes) {
        var attrs = attributes.split(' ');
        this._each(function (el) {
            attrs.forEach(function (attr) { return el.removeAttribute(attr); });
        });
        return this;
    };
    lgQuery.prototype.wrap = function (className) {
        if (!this.firstElement) {
            return this;
        }
        var wrapper = document.createElement('div');
        wrapper.className = className;
        this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
        this.firstElement.parentNode.removeChild(this.firstElement);
        wrapper.appendChild(this.firstElement);
        return this;
    };
    lgQuery.prototype.addClass = function (classNames) {
        if (classNames === void 0) { classNames = ''; }
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.add(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.removeClass = function (classNames) {
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.remove(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.hasClass = function (className) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.classList.contains(className);
    };
    lgQuery.prototype.hasAttribute = function (attribute) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.hasAttribute(attribute);
    };
    lgQuery.prototype.toggleClass = function (className) {
        if (!this.firstElement) {
            return this;
        }
        if (this.hasClass(className)) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        return this;
    };
    lgQuery.prototype.css = function (property, value) {
        var _this = this;
        this._each(function (el) {
            _this._setCssVendorPrefix(el, property, value);
        });
        return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery.prototype.on = function (events, listener) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        events.split(' ').forEach(function (event) {
            if (!Array.isArray(lgQuery.eventListeners[event])) {
                lgQuery.eventListeners[event] = [];
            }
            lgQuery.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split('.')[0], listener);
        });
        return this;
    };
    // @todo - test this
    lgQuery.prototype.once = function (event, listener) {
        var _this = this;
        this.on(event, function () {
            _this.off(event);
            listener(event);
        });
        return this;
    };
    lgQuery.prototype.off = function (event) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
            if (_this.isEventMatched(event, eventName)) {
                lgQuery.eventListeners[eventName].forEach(function (listener) {
                    _this.selector.removeEventListener(eventName.split('.')[0], listener);
                });
                lgQuery.eventListeners[eventName] = [];
            }
        });
        return this;
    };
    lgQuery.prototype.trigger = function (event, detail) {
        if (!this.firstElement) {
            return this;
        }
        var customEvent = new CustomEvent(event.split('.')[0], {
            detail: detail || null,
        });
        this.firstElement.dispatchEvent(customEvent);
        return this;
    };
    // Does not support IE
    lgQuery.prototype.load = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
            _this.selector.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.html = function (html) {
        if (html === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.innerHTML;
        }
        this._each(function (el) {
            el.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.append = function (html) {
        this._each(function (el) {
            if (typeof html === 'string') {
                el.insertAdjacentHTML('beforeend', html);
            }
            else {
                el.appendChild(html);
            }
        });
        return this;
    };
    lgQuery.prototype.prepend = function (html) {
        this._each(function (el) {
            el.insertAdjacentHTML('afterbegin', html);
        });
        return this;
    };
    lgQuery.prototype.remove = function () {
        this._each(function (el) {
            el.parentNode.removeChild(el);
        });
        return this;
    };
    lgQuery.prototype.empty = function () {
        this._each(function (el) {
            el.innerHTML = '';
        });
        return this;
    };
    lgQuery.prototype.scrollTop = function (scrollTop) {
        if (scrollTop !== undefined) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
        }
        else {
            return (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0);
        }
    };
    lgQuery.prototype.scrollLeft = function (scrollLeft) {
        if (scrollLeft !== undefined) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
        }
        else {
            return (window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0);
        }
    };
    lgQuery.prototype.offset = function () {
        if (!this.firstElement) {
            return {
                left: 0,
                top: 0,
            };
        }
        var rect = this.firstElement.getBoundingClientRect();
        var bodyMarginLeft = $LG('body').style().marginLeft;
        // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
        return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop(),
        };
    };
    lgQuery.prototype.style = function () {
        if (!this.firstElement) {
            return {};
        }
        return (this.firstElement.currentStyle ||
            window.getComputedStyle(this.firstElement));
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery.prototype.width = function () {
        var style = this.style();
        return (this.firstElement.clientWidth -
            parseFloat(style.paddingLeft) -
            parseFloat(style.paddingRight));
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery.prototype.height = function () {
        var style = this.style();
        return (this.firstElement.clientHeight -
            parseFloat(style.paddingTop) -
            parseFloat(style.paddingBottom));
    };
    lgQuery.eventListeners = {};
    return lgQuery;
}());
function $LG(selector) {
    initLgPolyfills();
    return new lgQuery(selector);
}

var defaultDynamicOptions = [
    'src',
    'sources',
    'subHtml',
    'subHtmlUrl',
    'html',
    'video',
    'poster',
    'slideName',
    'responsive',
    'srcset',
    'sizes',
    'iframe',
    'downloadUrl',
    'download',
    'width',
    'facebookShareUrl',
    'tweetText',
    'iframeTitle',
    'twitterShareUrl',
    'pinterestShareUrl',
    'pinterestText',
    'fbHtml',
    'disqusIdentifier',
    'disqusUrl',
];
// Convert html data-attribute to camalcase
function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === 'href') {
        return 'src';
    }
    attr = attr.replace('data-', '');
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return attr;
}
var utils = {
    /**
     * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
     */
    getSize: function (el, container, spacing, defaultLgSize) {
        if (spacing === void 0) { spacing = 0; }
        var LGel = $LG(el);
        var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
        if (!lgSize) {
            return;
        }
        var isResponsiveSizes = lgSize.split(',');
        // if at-least two viewport sizes are available
        if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for (var i = 0; i < isResponsiveSizes.length; i++) {
                var size_1 = isResponsiveSizes[i];
                var responsiveWidth = parseInt(size_1.split('-')[2], 10);
                if (responsiveWidth > wWidth) {
                    lgSize = size_1;
                    break;
                }
                // take last item as last option
                if (i === isResponsiveSizes.length - 1) {
                    lgSize = size_1;
                }
            }
        }
        var size = lgSize.split('-');
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return { width: width * ratio, height: height * ratio };
    },
    /**
     * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
     * @param {jQuery Element}
     * @returns {String} Transform CSS string
     */
    getTransform: function (el, container, top, bottom, imageSize) {
        if (!imageSize) {
            return;
        }
        var LGel = $LG(el).find('img').first();
        if (!LGel.get()) {
            return;
        }
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        // using innerWidth to include mobile safari bottom bar
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 -
            LGel.offset().left +
            (parseFloat(elStyle.paddingLeft) || 0) +
            (parseFloat(elStyle.borderLeft) || 0) +
            $LG(window).scrollLeft() +
            containerRect.left;
        var y = (wHeight - elHeight) / 2 -
            LGel.offset().top +
            (parseFloat(elStyle.paddingTop) || 0) +
            (parseFloat(elStyle.borderTop) || 0) +
            $LG(window).scrollTop() +
            top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = 'translate3d(' +
            (x *= -1) +
            'px, ' +
            (y *= -1) +
            'px, 0) scale3d(' +
            scX +
            ', ' +
            scY +
            ', 1)';
        return transform;
    },
    getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
        return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
    },
    getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
        var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
        var sourceTag = '';
        if (sources) {
            var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function (source) {
                var attrs = '';
                Object.keys(source).forEach(function (key) {
                    // Do not remove the first space as it is required to separate the attributes
                    attrs += " " + key + "=\"" + source[key] + "\"";
                });
                return "<source " + attrs + "></source>";
            });
        }
        return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function (srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = '';
        for (var i = 0; i < srcItms.length; i++) {
            var _src = srcItms[i].split(' ');
            // Manage empty space
            if (_src[0] === '') {
                _src.splice(0, 1);
            }
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for (var j = 0; j < rsWidth.length; j++) {
            if (parseInt(rsWidth[j], 10) > wWidth) {
                src = rsSrc[j];
                break;
            }
        }
        return src;
    },
    isImageLoaded: function (img) {
        if (!img)
            return false;
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    },
    getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = '';
        if (_isVideo && _isVideo.youtube) {
            videoClass = 'lg-has-youtube';
        }
        else if (_isVideo && _isVideo.vimeo) {
            videoClass = 'lg-has-vimeo';
        }
        else {
            videoClass = 'lg-has-html5';
        }
        return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
    },
    getFocusableElements: function (container) {
        var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var visibleElements = [].filter.call(elements, function (element) {
            var style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden';
        });
        return visibleElements;
    },
    /**
     * @desc Create dynamic elements array from gallery items when dynamic option is false
     * It helps to avoid frequent DOM interaction
     * and avoid multiple checks for dynamic elments
     *
     * @returns {Array} dynamicEl
     */
    getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function (item) {
            var dynamicEl = {};
            for (var i = 0; i < item.attributes.length; i++) {
                var attr = item.attributes[i];
                if (attr.specified) {
                    var dynamicAttr = convertToData(attr.name);
                    var label = '';
                    if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                        label = dynamicAttr;
                    }
                    if (label) {
                        dynamicEl[label] = attr.value;
                    }
                }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find('img').first().attr('alt');
            var title = currentItem.attr('title');
            var thumb = exThumbImage
                ? currentItem.attr(exThumbImage)
                : currentItem.find('img').first().attr('src');
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
                dynamicEl.subHtml = title || alt || '';
            }
            dynamicEl.alt = alt || title || '';
            dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
    },
    isMobile: function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    /**
     * @desc Check the given src is video
     * @param {String} src
     * @return {Object} video type
     * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     *
     * @todo - this information can be moved to dynamicEl to avoid frequent calls
     */
    isVideo: function (src, isHTML5VIdeo, index) {
        if (!src) {
            if (isHTML5VIdeo) {
                return {
                    html5: true,
                };
            }
            else {
                console.error('lightGallery :- data-src is not provided on slide item ' +
                    (index + 1) +
                    '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
                return;
            }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) {
            return {
                youtube: youtube,
            };
        }
        else if (vimeo) {
            return {
                vimeo: vimeo,
            };
        }
        else if (wistia) {
            return {
                wistia: wistia,
            };
        }
    },
};

// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */ (function () {
    function LightGallery(element, options) {
        this.lgOpened = false;
        this.index = 0;
        // lightGallery modules
        this.plugins = [];
        // false when lightGallery load first slide content;
        this.lGalleryOn = false;
        // True when a slide animation is in progress
        this.lgBusy = false;
        this.currentItemsInDom = [];
        // Scroll top value before lightGallery is opened
        this.prevScrollTop = 0;
        this.bodyPaddingRight = 0;
        this.isDummyImageRemoved = false;
        this.dragOrSwipeEnabled = false;
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0,
        };
        if (!element) {
            return this;
        }
        lgId++;
        this.lgId = lgId;
        this.el = element;
        this.LGel = $LG(element);
        this.generateSettings(options);
        this.buildModules();
        // When using dynamic mode, ensure dynamicEl is an array
        if (this.settings.dynamic &&
            this.settings.dynamicEl !== undefined &&
            !Array.isArray(this.settings.dynamicEl)) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }
        this.galleryItems = this.getItems();
        this.normalizeSettings();
        // Gallery items
        this.init();
        this.validateLicense();
        return this;
    }
    LightGallery.prototype.generateSettings = function (options) {
        // lightGallery settings
        this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
        if (this.settings.isMobile &&
            typeof this.settings.isMobile === 'function'
            ? this.settings.isMobile()
            : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
        }
    };
    LightGallery.prototype.normalizeSettings = function () {
        if (this.settings.slideEndAnimation) {
            this.settings.hideControlOnEnd = false;
        }
        if (!this.settings.closable) {
            this.settings.swipeToClose = false;
        }
        // And reset it on close to get the correct value next time
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        // At the moment, Zoom from image doesn't support dynamic options
        // @todo add zoomFromOrigin support for dynamic images
        if (this.settings.dynamic) {
            this.zoomFromOrigin = false;
        }
        if (!this.settings.container) {
            this.settings.container = document.body;
        }
        // settings.preload should not be grater than $item.length
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery.prototype.init = function () {
        var _this = this;
        this.addSlideVideoInfo(this.galleryItems);
        this.buildStructure();
        this.LGel.trigger(lGEvents.init, {
            instance: this,
        });
        if (this.settings.keyPress) {
            this.keyPress();
        }
        setTimeout(function () {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
        }, 50);
        this.arrow();
        if (this.settings.mousewheel) {
            this.mousewheel();
        }
        if (!this.settings.dynamic) {
            this.openGalleryOnItemClick();
        }
    };
    LightGallery.prototype.openGalleryOnItemClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var element = this_1.items[index];
            var $element = $LG(element);
            // Using different namespace for click because click event should not unbind if selector is same object('this')
            // @todo manage all event listners - should have namespace that represent element
            var uuid = lgQuery.generateUUID();
            $element
                .attr('data-lg-id', uuid)
                .on("click.lgcustom-item-" + uuid, function (e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index;
                _this.openGallery(currentItemIndex, element);
            });
        };
        var this_1 = this;
        // Using for loop instead of using bubbling as the items can be any html element.
        for (var index = 0; index < this.items.length; index++) {
            _loop_1(index);
        }
    };
    /**
     * Module constructor
     * Modules are build incrementally.
     * Gallery should be opened only once all the modules are initialized.
     * use moduleBuildTimeout to make sure this
     */
    LightGallery.prototype.buildModules = function () {
        var _this = this;
        this.settings.plugins.forEach(function (plugin) {
            _this.plugins.push(new plugin(_this, $LG));
        });
    };
    LightGallery.prototype.validateLicense = function () {
        if (!this.settings.licenseKey) {
            console.error('Please provide a valid license key');
        }
        else if (this.settings.licenseKey === '0000-0000-000-0000') {
            console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
        }
    };
    LightGallery.prototype.getSlideItem = function (index) {
        return $LG(this.getSlideItemId(index));
    };
    LightGallery.prototype.getSlideItemId = function (index) {
        return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery.prototype.getIdName = function (id) {
        return id + "-" + this.lgId;
    };
    LightGallery.prototype.getElementById = function (id) {
        return $LG("#" + this.getIdName(id));
    };
    LightGallery.prototype.manageSingleSlideClassName = function () {
        if (this.galleryItems.length < 2) {
            this.outer.addClass('lg-single-item');
        }
        else {
            this.outer.removeClass('lg-single-item');
        }
    };
    LightGallery.prototype.buildStructure = function () {
        var _this = this;
        var container = this.$container && this.$container.get();
        if (container) {
            return;
        }
        var controls = '';
        var subHtmlCont = '';
        // Create controls
        if (this.settings.controls) {
            controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            subHtmlCont =
                '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
        }
        var addClasses = '';
        if (this.settings.allowMediaOverlap) {
            // Do not remove space before last single quote
            addClasses += 'lg-media-overlap ';
        }
        var ariaLabelledby = this.settings.ariaLabelledby
            ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
            : '';
        var ariaDescribedby = this.settings.ariaDescribedby
            ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
            : '';
        var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
        var closeIcon = this.settings.closable && this.settings.showCloseIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>"
            : '';
        var maximizeIcon = this.settings.showMaximizeIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>"
            : '';
        var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer'
            ? subHtmlCont
            : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html'
            ? subHtmlCont
            : '') + "\n                </div>\n            </div>\n        </div>\n        ";
        $LG(this.settings.container).append(template);
        if (document.body !== this.settings.container) {
            $LG(this.settings.container).css('position', 'relative');
        }
        this.outer = this.getElementById('lg-outer');
        this.$lgComponents = this.getElementById('lg-components');
        this.$backdrop = this.getElementById('lg-backdrop');
        this.$container = this.getElementById('lg-container');
        this.$inner = this.getElementById('lg-inner');
        this.$content = this.getElementById('lg-content');
        this.$toolbar = this.getElementById('lg-toolbar');
        this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
        var outerClassNames = this.settings.mode + " ";
        this.manageSingleSlideClassName();
        if (this.settings.enableDrag) {
            outerClassNames += 'lg-grab ';
        }
        this.outer.addClass(outerClassNames);
        this.$inner.css('transition-timing-function', this.settings.easing);
        this.$inner.css('transition-duration', this.settings.speed + 'ms');
        if (this.settings.download) {
            this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
        }
        this.counter();
        $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
            _this.refreshOnResize();
        });
        this.hideBars();
        this.manageCloseGallery();
        this.toggleMaximize();
        this.initModules();
    };
    LightGallery.prototype.refreshOnResize = function () {
        if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) {
                this.resizeVideoSlide(this.index, this.currentImageSize);
            }
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                    .find('.lg-current .lg-dummy-img')
                    .first()
                    .attr('style', imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
        }
    };
    LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
        var lgVideoStyle = this.getVideoContStyle(imageSize);
        var currentSlide = this.getSlideItem(index);
        currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
    };
    /**
     * Update slides dynamically.
     * Add, edit or delete slides dynamically when lightGallery is opened.
     * Modify the current gallery items and pass it via updateSlides method
     * @note
     * - Do not mutate existing lightGallery items directly.
     * - Always pass new list of gallery items
     * - You need to take care of thumbnails outside the gallery if any
     * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
     * @param items Gallery items
     * @param index After the update operation, which slide gallery should navigate to
     * @category lGPublicMethods
     * @example
     * const plugin = lightGallery();
     *
     * // Adding slides dynamically
     * let galleryItems = [
     * // Access existing lightGallery items
     * // galleryItems are automatically generated internally from the gallery HTML markup
     * // or directly from galleryItems when dynamic gallery is used
     *   ...plugin.galleryItems,
     *     ...[
     *       {
     *         src: 'img/img-1.png',
     *           thumb: 'img/thumb1.png',
     *         },
     *     ],
     *   ];
     *   plugin.updateSlides(
     *     galleryItems,
     *     plugin.index,
     *   );
     *
     *
     * // Remove slides dynamically
     * galleryItems = JSON.parse(
     *   JSON.stringify(updateSlideInstance.galleryItems),
     * );
     * galleryItems.shift();
     * updateSlideInstance.updateSlides(galleryItems, 1);
     * @see <a href="/demos/update-slides/">Demo</a>
     */
    LightGallery.prototype.updateSlides = function (items, index) {
        if (this.index > items.length - 1) {
            this.index = items.length - 1;
        }
        if (items.length === 1) {
            this.index = 0;
        }
        if (!items.length) {
            this.closeGallery();
            return;
        }
        var currentSrc = this.galleryItems[index].src;
        this.galleryItems = items;
        this.updateControls();
        this.$inner.empty();
        this.currentItemsInDom = [];
        var _index = 0;
        // Find the current index based on source value of the slide
        this.galleryItems.some(function (galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
            }
            return false;
        });
        this.currentItemsInDom = this.organizeSlideItems(_index, -1);
        this.loadContent(_index, true);
        this.getSlideItem(_index).addClass('lg-current');
        this.index = _index;
        this.updateCurrentCounter(_index);
        this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery.prototype.getItems = function () {
        // Gallery items
        this.items = [];
        if (!this.settings.dynamic) {
            if (this.settings.selector === 'this') {
                this.items.push(this.el);
            }
            else if (this.settings.selector) {
                if (typeof this.settings.selector === 'string') {
                    if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin
                            .find(this.settings.selector)
                            .get();
                    }
                    else {
                        this.items = this.el.querySelectorAll(this.settings.selector);
                    }
                }
                else {
                    this.items = this.settings.selector;
                }
            }
            else {
                this.items = this.el.children;
            }
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
        }
        else {
            return this.settings.dynamicEl || [];
        }
    };
    LightGallery.prototype.shouldHideScrollbar = function () {
        return (this.settings.hideScrollbar &&
            document.body === this.settings.container);
    };
    LightGallery.prototype.hideScrollbar = function () {
        if (!this.shouldHideScrollbar()) {
            return;
        }
        this.bodyPaddingRight = parseFloat($LG('body').style().paddingRight);
        var bodyRect = document.documentElement.getBoundingClientRect();
        var scrollbarWidth = window.innerWidth - bodyRect.width;
        $LG(document.body).css('padding-right', scrollbarWidth + this.bodyPaddingRight + 'px');
        $LG(document.body).addClass('lg-overlay-open');
    };
    LightGallery.prototype.resetScrollBar = function () {
        if (!this.shouldHideScrollbar()) {
            return;
        }
        $LG(document.body).css('padding-right', this.bodyPaddingRight + 'px');
        $LG(document.body).removeClass('lg-overlay-open');
    };
    /**
     * Open lightGallery.
     * Open gallery with specific slide by passing index of the slide as parameter.
     * @category lGPublicMethods
     * @param {Number} index  - index of the slide
     * @param {HTMLElement} element - Which image lightGallery should zoom from
     *
     * @example
     * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
     * const dynamicGallery = lightGallery($dynamicGallery, {
     *     dynamic: true,
     *     dynamicEl: [
     *         {
     *              src: 'img/1.jpg',
     *              thumb: 'img/thumb-1.jpg',
     *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
     *         },
     *         ...
     *     ],
     * });
     * $dynamicGallery.addEventListener('click', function () {
     *     // Starts with third item.(Optional).
     *     // This is useful if you want use dynamic mode with
     *     // custom thumbnails (thumbnails outside gallery),
     *     dynamicGallery.openGallery(2);
     * });
     *
     */
    LightGallery.prototype.openGallery = function (index, element) {
        var _this = this;
        if (index === void 0) { index = this.settings.index; }
        // prevent accidental double execution
        if (this.lgOpened)
            return;
        this.lgOpened = true;
        this.outer.removeClass('lg-hide-items');
        this.hideScrollbar();
        // Add display block, but still has opacity 0
        this.$container.addClass('lg-show');
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
        this.currentItemsInDom = itemsToBeInsertedToDom;
        var items = '';
        itemsToBeInsertedToDom.forEach(function (item) {
            items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
        });
        this.$inner.append(items);
        this.addHtml(index);
        var transform = '';
        this.mediaContainerPosition = this.getMediaContainerPosition();
        var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
        if (!this.settings.allowMediaOverlap) {
            this.setMediaContainerPosition(top, bottom);
        }
        var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
        if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
        }
        if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass('lg-complete');
        }
        var timeout = this.settings.zoomFromOrigin
            ? 100
            : this.settings.backdropDuration;
        setTimeout(function () {
            _this.outer.addClass('lg-components-open');
        }, timeout);
        this.index = index;
        this.LGel.trigger(lGEvents.beforeOpen);
        // add class lg-current to remove initial transition
        this.getSlideItem(index).addClass('lg-current');
        this.lGalleryOn = false;
        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $LG(window).scrollTop();
        setTimeout(function () {
            // Need to check both zoomFromOrigin and transform values as we need to set set the
            // default opening animation if user missed to add the lg-size attribute
            if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css('transform', transform);
                setTimeout(function () {
                    currentSlide_1
                        .addClass('lg-start-progress lg-start-end-progress')
                        .css('transition-duration', _this.settings.startAnimationDuration + 'ms');
                    _this.outer.addClass('lg-zoom-from-image');
                });
                setTimeout(function () {
                    currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
                }, 100);
            }
            setTimeout(function () {
                _this.$backdrop.addClass('in');
                _this.$container.addClass('lg-show-in');
            }, 10);
            setTimeout(function () {
                if (_this.settings.trapFocus &&
                    document.body === _this.settings.container) {
                    _this.trapFocus();
                }
            }, _this.settings.backdropDuration + 50);
            // lg-visible class resets gallery opacity to 1
            if (!_this.zoomFromOrigin || !transform) {
                setTimeout(function () {
                    _this.outer.addClass('lg-visible');
                }, _this.settings.backdropDuration);
            }
            // initiate slide function
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
        });
        if (document.body === this.settings.container) {
            $LG('html').addClass('lg-on');
        }
    };
    /**
     * Note - Changing the position of the media on every slide transition creates a flickering effect.
     * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
     * if you have dynamic captions for each media,
     * you can provide an appropriate height for the captions via allowMediaOverlap option
     */
    LightGallery.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) {
            return {
                top: 0,
                bottom: 0,
            };
        }
        var top = this.$toolbar.get().clientHeight || 0;
        var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
        var captionHeight = this.settings.defaultCaptionHeight ||
            (subHtml && subHtml.clientHeight) ||
            0;
        var thumbContainer = this.outer.find('.lg-thumb-outer').get();
        var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
        var bottom = thumbHeight + captionHeight;
        return {
            top: top,
            bottom: bottom,
        };
    };
    LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
    };
    LightGallery.prototype.hideBars = function () {
        var _this = this;
        // Hide controllers if mouse doesn't move for some period
        setTimeout(function () {
            _this.outer.removeClass('lg-hide-items');
            if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
                    _this.outer.removeClass('lg-hide-items');
                    clearTimeout(_this.hideBarTimeout);
                    // Timeout will be cleared on each slide movement also
                    _this.hideBarTimeout = setTimeout(function () {
                        _this.outer.addClass('lg-hide-items');
                    }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger('mousemove.lg');
            }
        }, this.settings.showBarsAfter);
    };
    LightGallery.prototype.initPictureFill = function ($img) {
        if (this.settings.supportLegacyBrowser) {
            try {
                picturefill({
                    elements: [$img.get()],
                });
            }
            catch (e) {
                console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
            }
        }
    };
    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    LightGallery.prototype.counter = function () {
        if (this.settings.counter) {
            var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
        }
    };
    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    LightGallery.prototype.addHtml = function (index) {
        var subHtml;
        var subHtmlUrl;
        if (this.galleryItems[index].subHtmlUrl) {
            subHtmlUrl = this.galleryItems[index].subHtmlUrl;
        }
        else {
            subHtml = this.galleryItems[index].subHtml;
        }
        if (!subHtmlUrl) {
            if (subHtml) {
                // get first letter of sub-html
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.settings.subHtmlSelectorRelative &&
                        !this.settings.dynamic) {
                        subHtml = $LG(this.items)
                            .eq(index)
                            .find(subHtml)
                            .first()
                            .html();
                    }
                    else {
                        subHtml = $LG(subHtml).first().html();
                    }
                }
            }
            else {
                subHtml = '';
            }
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            if (subHtmlUrl) {
                this.outer.find('.lg-sub-html').load(subHtmlUrl);
            }
            else {
                this.outer.find('.lg-sub-html').html(subHtml);
            }
        }
        else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) {
                currentSlide.load(subHtmlUrl);
            }
            else {
                currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
            }
        }
        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass('lg-empty-html');
            }
            else {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass('lg-empty-html');
            }
        }
        this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index: index,
        });
    };
    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     * @todo preload not working for the first slide, Also, should work for the first and last slide as well
     */
    LightGallery.prototype.preload = function (index) {
        for (var i = 1; i <= this.settings.preload; i++) {
            if (i >= this.galleryItems.length - index) {
                break;
            }
            this.loadContent(index + i, false);
        }
        for (var j = 1; j <= this.settings.preload; j++) {
            if (index - j < 0) {
                break;
            }
            this.loadContent(index - j, false);
        }
    };
    LightGallery.prototype.getDummyImgStyles = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getVideoContStyle = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
        var $currentItem;
        if (!this.settings.dynamic) {
            $currentItem = $LG(this.items).eq(index);
        }
        if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) {
                _dummyImgSrc = $currentItem.find('img').first().attr('src');
            }
            else {
                _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            }
            if (!_dummyImgSrc)
                return '';
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
            $currentSlide.addClass('lg-first-slide');
            this.outer.addClass('lg-first-slide-loading');
            return dummyImgContent;
        }
        return '';
    };
    LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
        var currentGalleryItem = this.galleryItems[index];
        var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        // Use the thumbnail as dummy image which will be resized to actual image size and
        // displayed on top of actual image
        var imgContent = '';
        var altAttr = alt ? 'alt="' + alt + '"' : '';
        if (this.isFirstSlideWithZoomAnimation()) {
            imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
        }
        else {
            imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
        }
        var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
        $currentSlide.prepend(imgMarkup);
    };
    LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
        var mediaObject = $slide.find('.lg-object').first();
        if (utils.isImageLoaded(mediaObject.get()) ||
            isHTML5VideoWithoutPoster) {
            onLoad();
        }
        else {
            mediaObject.on('load.lg error.lg', function () {
                onLoad && onLoad();
            });
            mediaObject.on('error.lg', function () {
                onError && onError();
            });
        }
    };
    /**
     *
     * @param $el Current slide item
     * @param index
     * @param delay Delay is 0 except first time
     * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
     * @param isFirstSlide
     */
    LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
        var _this = this;
        this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
        }, function () {
            currentSlide.addClass('lg-complete lg-complete_');
            currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
        });
    };
    LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        // Adding delay for video slides without poster for better performance and user experience
        // Videos should start playing once once the gallery is completely loaded
        var _speed = isFirstSlide &&
            this.getSlideType(currentGalleryItem) === 'video' &&
            !currentGalleryItem.poster
            ? speed
            : 0;
        setTimeout(function () {
            $currentSlide.addClass('lg-complete lg-complete_');
            _this.LGel.trigger(lGEvents.slideItemLoad, {
                index: index,
                delay: delay || 0,
                isFirstSlide: isFirstSlide,
            });
        }, _speed);
    };
    LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
        return !!(!this.lGalleryOn &&
            this.zoomFromOrigin &&
            this.currentImageSize);
    };
    // Add video slideInfo
    LightGallery.prototype.addSlideVideoInfo = function (items) {
        var _this = this;
        items.forEach(function (element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo &&
                _this.settings.loadYouTubePoster &&
                !element.poster &&
                element.__slideVideoInfo.youtube) {
                element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
            }
        });
    };
    /**
     *  Load slide content into slide.
     *  This is used to load content into slides that is not visible too
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     */
    LightGallery.prototype.loadContent = function (index, rec) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        var $currentSlide = $LG(this.getSlideItemId(index));
        var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        var src = currentGalleryItem.src;
        var video = currentGalleryItem.video;
        var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
        if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(',');
            src = utils.getResponsiveSrc(srcDyItms) || src;
        }
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var lgVideoStyle = '';
        var iframe = !!currentGalleryItem.iframe;
        var isFirstSlide = !this.lGalleryOn;
        // delay for adding complete class. it is 0 except first time.
        var delay = 0;
        if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) {
                delay = this.settings.startAnimationDuration + 10;
            }
            else {
                delay = this.settings.backdropDuration + 10;
            }
        }
        if (!$currentSlide.hasClass('lg-loaded')) {
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
            }
            else if (poster) {
                var dummyImg = '';
                var hasStartAnimation = isFirstSlide &&
                    this.zoomFromOrigin &&
                    this.currentImageSize;
                if (hasStartAnimation) {
                    dummyImg = this.getDummyImageContent($currentSlide, index, '');
                }
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
                $currentSlide.prepend(markup);
            }
            else if (videoInfo) {
                var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
                $currentSlide.prepend(markup);
            }
            else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                    var $img = $currentSlide.find('.lg-object');
                    this.initPictureFill($img);
                }
            }
            if (poster || videoInfo) {
                this.LGel.trigger(lGEvents.hasVideo, {
                    index: index,
                    src: src,
                    html5Video: _html5Video,
                    hasPoster: !!poster,
                });
            }
            this.LGel.trigger(lGEvents.afterAppendSlide, { index: index });
            if (this.lGalleryOn &&
                this.settings.appendSubHtmlTo === '.lg-item') {
                this.addHtml(index);
            }
        }
        // For first time add some delay for displaying the start animation.
        var _speed = 0;
        // Do not change the delay value because it is required for zoom plugin.
        // If gallery opened from direct url (hash) speed value should be 0
        if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
            _speed = delay;
        }
        // Only for first slide and zoomFromOrigin is enabled
        if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function () {
                $currentSlide
                    .removeClass('lg-start-end-progress lg-start-progress')
                    .removeAttr('style');
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass('lg-loaded')) {
                setTimeout(function () {
                    if (_this.getSlideType(currentGalleryItem) === 'image') {
                        var alt = currentGalleryItem.alt;
                        var altAttr = alt ? 'alt="' + alt + '"' : '';
                        $currentSlide
                            .find('.lg-img-wrap')
                            .append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                        if (srcset || sources) {
                            var $img = $currentSlide.find('.lg-object');
                            _this.initPictureFill($img);
                        }
                    }
                    if (_this.getSlideType(currentGalleryItem) === 'image' ||
                        (_this.getSlideType(currentGalleryItem) === 'video' &&
                            poster)) {
                        _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                        // load remaining slides once the slide is completely loaded
                        _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        }, function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        });
                    }
                }, this.settings.startAnimationDuration + 100);
            }
        }
        // SLide content has been added to dom
        $currentSlide.addClass('lg-loaded');
        if (!this.isFirstSlideWithZoomAnimation() ||
            (this.getSlideType(currentGalleryItem) === 'video' && !poster)) {
            this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
        }
        // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
        if ((!this.zoomFromOrigin || !this.currentImageSize) &&
            $currentSlide.hasClass('lg-complete_') &&
            !this.lGalleryOn) {
            setTimeout(function () {
                $currentSlide.addClass('lg-complete');
            }, this.settings.backdropDuration);
        }
        // Content loaded
        // Need to set lGalleryOn before calling preload function
        this.lGalleryOn = true;
        if (rec === true) {
            if (!$currentSlide.hasClass('lg-complete_')) {
                $currentSlide
                    .find('.lg-object')
                    .first()
                    .on('load.lg error.lg', function () {
                    _this.preload(index);
                });
            }
            else {
                this.preload(index);
            }
        }
    };
    /**
     * @desc Remove dummy image content and load next slides
     * Called only for the first time if zoomFromOrigin animation is enabled
     * @param index
     * @param $currentSlide
     * @param speed
     */
    LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
        var _this = this;
        setTimeout(function () {
            $currentSlide.find('.lg-dummy-img').remove();
            $currentSlide.removeClass('lg-first-slide');
            _this.outer.removeClass('lg-first-slide-loading');
            _this.isDummyImageRemoved = true;
            _this.preload(index);
        }, speed + 300);
    };
    LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
        var _this = this;
        if (numberOfItems === void 0) { numberOfItems = 0; }
        var itemsToBeInsertedToDom = [];
        // Minimum 2 items should be there
        var possibleNumberOfItems = Math.max(numberOfItems, 3);
        possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
        var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
        if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function (_element, index) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
            });
            return itemsToBeInsertedToDom;
        }
        if (index < (this.galleryItems.length - 1) / 2) {
            for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
            }
        }
        else {
            for (var idx = index; idx <= this.galleryItems.length - 1 &&
                idx < index + possibleNumberOfItems / 2; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
            }
        }
        if (this.settings.loop) {
            if (index === this.galleryItems.length - 1) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
            }
            else if (index === 0) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
            }
        }
        if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
        }
        return itemsToBeInsertedToDom;
    };
    LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
        var _this = this;
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
        itemsToBeInsertedToDom.forEach(function (item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) {
                _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
            }
        });
        this.currentItemsInDom.forEach(function (item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                $LG("#" + item).remove();
            }
        });
        return itemsToBeInsertedToDom;
    };
    /**
     * Get previous index of the slide
     */
    LightGallery.prototype.getPreviousSlideIndex = function () {
        var prevIndex = 0;
        try {
            var currentItemId = this.outer
                .find('.lg-current')
                .first()
                .attr('id');
            prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
        }
        catch (error) {
            prevIndex = 0;
        }
        return prevIndex;
    };
    LightGallery.prototype.setDownloadValue = function (index) {
        if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false ||
                currentGalleryItem.downloadUrl === 'false';
            if (hideDownloadBtn) {
                this.outer.addClass('lg-hide-download');
            }
            else {
                var $download = this.getElementById('lg-download');
                this.outer.removeClass('lg-hide-download');
                $download.attr('href', currentGalleryItem.downloadUrl ||
                    currentGalleryItem.src);
                if (currentGalleryItem.download) {
                    $download.attr('download', currentGalleryItem.download);
                }
            }
        }
    };
    LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
        var _this = this;
        if (this.lGalleryOn) {
            previousSlideItem.addClass('lg-slide-progress');
        }
        setTimeout(function () {
            // remove all transitions
            _this.outer.addClass('lg-no-trans');
            _this.outer
                .find('.lg-item')
                .removeClass('lg-prev-slide lg-next-slide');
            if (direction === 'prev') {
                //prevslide
                currentSlideItem.addClass('lg-prev-slide');
                previousSlideItem.addClass('lg-next-slide');
            }
            else {
                // next slide
                currentSlideItem.addClass('lg-next-slide');
                previousSlideItem.addClass('lg-prev-slide');
            }
            // give 50 ms for browser to add/remove class
            setTimeout(function () {
                _this.outer.find('.lg-item').removeClass('lg-current');
                currentSlideItem.addClass('lg-current');
                // reset all transitions
                _this.outer.removeClass('lg-no-trans');
            }, 50);
        }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
     * Goto a specific slide.
     * @param {Number} index - index of the slide
     * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
     * @param {Boolean} fromThumb - true if slide function called via thumbnail click
     * @param {String} direction - Direction of the slide(next/prev)
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // to go to 3rd slide
     *  plugin.slide(2);
     *
     */
    LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
        var _this = this;
        var prevIndex = this.getPreviousSlideIndex();
        this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
        // Prevent multiple call, Required for hsh plugin
        if (this.lGalleryOn && prevIndex === index) {
            return;
        }
        var numberOfGalleryItems = this.galleryItems.length;
        if (!this.lgBusy) {
            if (this.settings.counter) {
                this.updateCurrentCounter(index);
            }
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex: prevIndex,
                index: index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb,
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
                if (index < prevIndex) {
                    direction = 'prev';
                }
                else if (index > prevIndex) {
                    direction = 'next';
                }
            }
            if (!fromTouch) {
                this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            }
            else {
                this.outer
                    .find('.lg-item')
                    .removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;
                    if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                        // next slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                    else if (index === numberOfGalleryItems - 1 &&
                        prevIndex === 0) {
                        // prev slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                }
                else {
                    touchPrev = 0;
                    touchNext = 1;
                }
                if (direction === 'prev') {
                    this.getSlideItem(touchNext).addClass('lg-next-slide');
                }
                else {
                    this.getSlideItem(touchPrev).addClass('lg-prev-slide');
                }
                currentSlideItem.addClass('lg-current');
            }
            // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
            if (!this.lGalleryOn) {
                this.loadContent(index, true);
            }
            else {
                setTimeout(function () {
                    _this.loadContent(index, true);
                    // Add title if this.settings.appendSubHtmlTo === lg-sub-html
                    if (_this.settings.appendSubHtmlTo !== '.lg-item') {
                        _this.addHtml(index);
                    }
                }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            }
            setTimeout(function () {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass('lg-slide-progress');
                _this.LGel.trigger(lGEvents.afterSlide, {
                    prevIndex: prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb,
                });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
        }
        this.index = index;
    };
    LightGallery.prototype.updateCurrentCounter = function (index) {
        this.getElementById('lg-counter-current').html(index + 1 + '');
    };
    LightGallery.prototype.updateCounterTotal = function () {
        this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
    };
    LightGallery.prototype.getSlideType = function (item) {
        if (item.__slideVideoInfo) {
            return 'video';
        }
        else if (item.iframe) {
            return 'iframe';
        }
        else {
            return 'image';
        }
    };
    LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
        var distanceX = endCoords.pageX - startCoords.pageX;
        var distanceY = endCoords.pageY - startCoords.pageY;
        var allowSwipe = false;
        if (this.swipeDirection) {
            allowSwipe = true;
        }
        else {
            if (Math.abs(distanceX) > 15) {
                this.swipeDirection = 'horizontal';
                allowSwipe = true;
            }
            else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = 'vertical';
                allowSwipe = true;
            }
        }
        if (!allowSwipe) {
            return;
        }
        var $currentSlide = this.getSlideItem(this.index);
        if (this.swipeDirection === 'horizontal') {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            // reset opacity and transition duration
            this.outer.addClass('lg-dragging');
            // move current slide
            this.setTranslate($currentSlide, distanceX, 0);
            // move next and prev slide with current slide
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = (width * 15) / 100;
            var gutter = slideWidthAmount - Math.abs((distanceX * 10) / 100);
            this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
        }
        else if (this.swipeDirection === 'vertical') {
            if (this.settings.swipeToClose) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                this.$container.addClass('lg-dragging-vertical');
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css('opacity', opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) {
                    this.outer
                        .addClass('lg-hide-items')
                        .removeClass('lg-components-open');
                }
            }
        }
    };
    LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
        var _this = this;
        var distance;
        // keep slide animation for any mode while dragg/swipe
        if (this.settings.mode !== 'lg-slide') {
            this.outer.addClass('lg-slide');
        }
        // set transition duration
        setTimeout(function () {
            _this.$container.removeClass('lg-dragging-vertical');
            _this.outer
                .removeClass('lg-dragging lg-hide-items')
                .addClass('lg-components-open');
            var triggerClick = true;
            if (_this.swipeDirection === 'horizontal') {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToNextSlide(true);
                    triggerClick = false;
                }
                else if (distance > 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToPrevSlide(true);
                    triggerClick = false;
                }
            }
            else if (_this.swipeDirection === 'vertical') {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable &&
                    _this.settings.swipeToClose &&
                    distance > 100) {
                    _this.closeGallery();
                    return;
                }
                else {
                    _this.$backdrop.css('opacity', 1);
                }
            }
            _this.outer.find('.lg-item').removeAttr('style');
            if (triggerClick &&
                Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                // Trigger click if distance is less than 5 pix
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
            }
            _this.swipeDirection = undefined;
        });
        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_this.outer.hasClass('lg-dragging') &&
                _this.settings.mode !== 'lg-slide') {
                _this.outer.removeClass('lg-slide');
            }
        }, this.settings.speed + 100);
    };
    LightGallery.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        var isSwiping = false;
        if (this.settings.enableSwipe) {
            this.$inner.on('touchstart.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) &&
                    !_this.outer.hasClass('lg-zoomed') &&
                    !_this.lgBusy &&
                    e.touches.length === 1) {
                    isSwiping = true;
                    _this.touchAction = 'swipe';
                    _this.manageSwipeClass();
                    startCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY,
                    };
                }
            });
            this.$inner.on('touchmove.lg', function (e) {
                if (isSwiping &&
                    _this.touchAction === 'swipe' &&
                    e.touches.length === 1) {
                    endCoords = {
                        pageX: e.touches[0].pageX,
                        pageY: e.touches[0].pageY,
                    };
                    _this.touchMove(startCoords, endCoords, e);
                    isMoved = true;
                }
            });
            this.$inner.on('touchend.lg', function (event) {
                if (_this.touchAction === 'swipe') {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords, startCoords, event);
                    }
                    else if (isSwiping) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) {
                            _this.LGel.trigger(lGEvents.posterClick);
                        }
                    }
                    _this.touchAction = undefined;
                    isSwiping = false;
                }
            });
        }
    };
    LightGallery.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;
        if (this.settings.enableDrag) {
            this.outer.on('mousedown.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) {
                    if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY,
                            };
                            isDraging = true;
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.outer.get().scrollLeft += 1;
                            _this.outer.get().scrollLeft -= 1;
                            // *
                            _this.outer
                                .removeClass('lg-grab')
                                .addClass('lg-grabbing');
                            _this.LGel.trigger(lGEvents.dragStart);
                        }
                    }
                }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
                if (isDraging && _this.lgOpened) {
                    isMoved = true;
                    endCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY,
                    };
                    _this.touchMove(startCoords, endCoords);
                    _this.LGel.trigger(lGEvents.dragMove);
                }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
                if (!_this.lgOpened) {
                    return;
                }
                var target = $LG(event.target);
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                    _this.LGel.trigger(lGEvents.dragEnd);
                }
                else if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });
        }
    };
    LightGallery.prototype.triggerPosterClick = function () {
        var _this = this;
        this.$inner.on('click.lg', function (event) {
            if (!_this.dragOrSwipeEnabled &&
                _this.isPosterElement($LG(event.target))) {
                _this.LGel.trigger(lGEvents.posterClick);
            }
        });
    };
    LightGallery.prototype.manageSwipeClass = function () {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.galleryItems.length - 1;
            }
            else if (this.index === this.galleryItems.length - 1) {
                _touchNext = 0;
            }
        }
        this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
        }
        this.getSlideItem(_touchNext).addClass('lg-next-slide');
    };
    /**
     * Go to next slide
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.goToNextSlide();
     * @see <a href="/demos/methods/">Demo</a>
     */
    LightGallery.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index,
                });
                this.slide(this.index, !!fromTouch, false, 'next');
            }
            else {
                if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index,
                    });
                    this.slide(this.index, !!fromTouch, false, 'next');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-right-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };
    /**
     * Go to previous slides
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery({});
     *  plugin.goToPrevSlide();
     * @see <a href="/demos/methods/">Demo</a>
     *
     */
    LightGallery.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch: fromTouch,
                });
                this.slide(this.index, !!fromTouch, false, 'prev');
            }
            else {
                if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch: fromTouch,
                    });
                    this.slide(this.index, !!fromTouch, false, 'prev');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-left-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };
    LightGallery.prototype.keyPress = function () {
        var _this = this;
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (_this.lgOpened &&
                _this.settings.escKey === true &&
                e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap &&
                    _this.outer.hasClass('lg-can-toggle') &&
                    _this.outer.hasClass('lg-components-open')) {
                    _this.outer.removeClass('lg-components-open');
                }
                else {
                    _this.closeGallery();
                }
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                    e.preventDefault();
                    _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                    e.preventDefault();
                    _this.goToNextSlide();
                }
            }
        });
    };
    LightGallery.prototype.arrow = function () {
        var _this = this;
        this.getElementById('lg-prev').on('click.lg', function () {
            _this.goToPrevSlide();
        });
        this.getElementById('lg-next').on('click.lg', function () {
            _this.goToNextSlide();
        });
    };
    LightGallery.prototype.arrowDisable = function (index) {
        // Disable arrows if settings.hideControlOnEnd is true
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById('lg-prev');
            var $next = this.getElementById('lg-next');
            if (index + 1 === this.galleryItems.length) {
                $next.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $next.removeAttr('disabled').removeClass('disabled');
            }
            if (index === 0) {
                $prev.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $prev.removeAttr('disabled').removeClass('disabled');
            }
        }
    };
    LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        $el.css('transform', 'translate3d(' +
            xValue +
            'px, ' +
            yValue +
            'px, 0px) scale3d(' +
            scaleX +
            ', ' +
            scaleY +
            ', 1)');
    };
    LightGallery.prototype.mousewheel = function () {
        var _this = this;
        var lastCall = 0;
        this.outer.on('wheel.lg', function (e) {
            if (!e.deltaY || _this.galleryItems.length < 2) {
                return;
            }
            e.preventDefault();
            var now = new Date().getTime();
            if (now - lastCall < 1000) {
                return;
            }
            lastCall = now;
            if (e.deltaY > 0) {
                _this.goToNextSlide();
            }
            else if (e.deltaY < 0) {
                _this.goToPrevSlide();
            }
        });
    };
    LightGallery.prototype.isSlideElement = function (target) {
        return (target.hasClass('lg-outer') ||
            target.hasClass('lg-item') ||
            target.hasClass('lg-img-wrap'));
    };
    LightGallery.prototype.isPosterElement = function (target) {
        var playButton = this.getSlideItem(this.index)
            .find('.lg-video-play-button')
            .get();
        return (target.hasClass('lg-video-poster') ||
            target.hasClass('lg-video-play-button') ||
            (playButton && playButton.contains(target.get())));
    };
    /**
     * Maximize minimize inline gallery.
     * @category lGPublicMethods
     */
    LightGallery.prototype.toggleMaximize = function () {
        var _this = this;
        this.getElementById('lg-maximize').on('click.lg', function () {
            _this.$container.toggleClass('lg-inline');
            _this.refreshOnResize();
        });
    };
    LightGallery.prototype.invalidateItems = function () {
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
        }
    };
    LightGallery.prototype.trapFocus = function () {
        var _this = this;
        this.$container.get().focus({
            preventScroll: true,
        });
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (!_this.lgOpened) {
                return;
            }
            var isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) {
                return;
            }
            var focusableEls = utils.getFocusableElements(_this.$container.get());
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            }
            else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    };
    LightGallery.prototype.manageCloseGallery = function () {
        var _this = this;
        if (!this.settings.closable)
            return;
        var mousedown = false;
        this.getElementById('lg-close').on('click.lg', function () {
            _this.closeGallery();
        });
        if (this.settings.closeOnTap) {
            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            this.outer.on('mousedown.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) {
                    mousedown = true;
                }
                else {
                    mousedown = false;
                }
            });
            this.outer.on('mousemove.lg', function () {
                mousedown = false;
            });
            this.outer.on('mouseup.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                    if (!_this.outer.hasClass('lg-dragging')) {
                        _this.closeGallery();
                    }
                }
            });
        }
    };
    /**
     * Close lightGallery if it is opened.
     *
     * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
     * @return returns the estimated time to close gallery completely including the close animation duration
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.closeGallery();
     *
     */
    LightGallery.prototype.closeGallery = function (force) {
        var _this = this;
        if (!this.lgOpened || (!this.settings.closable && !force)) {
            return 0;
        }
        this.LGel.trigger(lGEvents.beforeClose);
        if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
            $LG(window).scrollTop(this.prevScrollTop);
        }
        var currentItem = this.items[this.index];
        var transform;
        if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
        }
        if (this.zoomFromOrigin && transform) {
            this.outer.addClass('lg-closing lg-zoom-from-image');
            this.getSlideItem(this.index)
                .addClass('lg-start-end-progress')
                .css('transition-duration', this.settings.startAnimationDuration + 'ms')
                .css('transform', transform);
        }
        else {
            this.outer.addClass('lg-hide-items');
            // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
            // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
            this.outer.removeClass('lg-zoom-from-image');
        }
        // Unbind all events added by lightGallery
        // @todo
        //this.$el.off('.lg.tm');
        this.destroyModules();
        this.lGalleryOn = false;
        this.isDummyImageRemoved = false;
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        clearTimeout(this.hideBarTimeout);
        this.hideBarTimeout = false;
        $LG('html').removeClass('lg-on');
        this.outer.removeClass('lg-visible lg-components-open');
        // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
        this.$backdrop.removeClass('in').css('opacity', 0);
        var removeTimeout = this.zoomFromOrigin && transform
            ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration)
            : this.settings.backdropDuration;
        this.$container.removeClass('lg-show-in');
        // Once the closign animation is completed and gallery is invisible
        setTimeout(function () {
            if (_this.zoomFromOrigin && transform) {
                _this.outer.removeClass('lg-zoom-from-image');
            }
            _this.$container.removeClass('lg-show');
            // Reset scrollbar
            _this.resetScrollBar();
            // Need to remove inline opacity as it is used in the stylesheet as well
            _this.$backdrop
                .removeAttr('style')
                .css('transition-duration', _this.settings.backdropDuration + 'ms');
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
            _this.$inner.empty();
            if (_this.lgOpened) {
                _this.LGel.trigger(lGEvents.afterClose, {
                    instance: _this,
                });
            }
            if (_this.$container.get()) {
                _this.$container.get().blur();
            }
            _this.lgOpened = false;
        }, removeTimeout + 100);
        return removeTimeout + 100;
    };
    LightGallery.prototype.initModules = function () {
        this.plugins.forEach(function (module) {
            try {
                module.init();
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
        });
    };
    LightGallery.prototype.destroyModules = function (destroy) {
        this.plugins.forEach(function (module) {
            try {
                if (destroy) {
                    module.destroy();
                }
                else {
                    module.closeGallery && module.closeGallery();
                }
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
        });
    };
    /**
     * Refresh lightGallery with new set of children.
     *
     * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
     *
     * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
     * @see <a href="/demos/dynamic-mode/">Demo</a>
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // Delete or add children, then call
     *  plugin.refresh();
     *
     */
    LightGallery.prototype.refresh = function (galleryItems) {
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        if (galleryItems) {
            this.galleryItems = galleryItems;
        }
        else {
            this.galleryItems = this.getItems();
        }
        this.updateControls();
        this.openGalleryOnItemClick();
        this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems);
        this.updateCounterTotal();
        this.manageSingleSlideClassName();
    };
    LightGallery.prototype.destroyGallery = function () {
        this.destroyModules(true);
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        $LG(window).off(".lg.global" + this.lgId);
        this.LGel.off('.lg');
        this.$container.remove();
    };
    /**
     * Destroy lightGallery.
     * Destroy lightGallery and its plugin instances completely
     *
     * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
     * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
     * You can use refresh method most of the times.
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.destroy();
     *
     */
    LightGallery.prototype.destroy = function () {
        var closeTimeout = this.closeGallery(true);
        if (closeTimeout) {
            setTimeout(this.destroyGallery.bind(this), closeTimeout);
        }
        else {
            this.destroyGallery();
        }
        return closeTimeout;
    };
    return LightGallery;
}());

function lightGallery(el, options) {
    return new LightGallery(el, options);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightGallery);
//# sourceMappingURL=lightgallery.es5.js.map


/***/ }),

/***/ "./node_modules/lightgallery/plugins/autoplay/lg-autoplay.es5.js":
/*!***********************************************************************!*\
  !*** ./node_modules/lightgallery/plugins/autoplay/lg-autoplay.es5.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*!
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var autoplaySettings = {
    autoplay: true,
    slideShowAutoplay: false,
    slideShowInterval: 5000,
    progressBar: true,
    forceSlideShowAutoplay: false,
    autoplayControls: true,
    appendAutoplayControlsTo: '.lg-toolbar',
    autoplayPluginStrings: {
        toggleAutoplay: 'Toggle Autoplay',
    },
};

/**
 * Creates the autoplay plugin.
 * @param {object} element - lightGallery element
 */
var Autoplay = /** @class */ (function () {
    function Autoplay(instance) {
        this.core = instance;
        // extend module default settings with lightGallery core settings
        this.settings = __assign(__assign({}, autoplaySettings), this.core.settings);
        return this;
    }
    Autoplay.prototype.init = function () {
        var _this = this;
        if (!this.settings.autoplay) {
            return;
        }
        this.interval = false;
        // Identify if slide happened from autoplay
        this.fromAuto = true;
        // Identify if autoplay canceled from touch/drag
        this.pausedOnTouchDrag = false;
        this.pausedOnSlideChange = false;
        // append autoplay controls
        if (this.settings.autoplayControls) {
            this.controls();
        }
        // Create progress bar
        if (this.settings.progressBar) {
            this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
        }
        // Start autoplay
        if (this.settings.slideShowAutoplay) {
            this.core.LGel.once(lGEvents.slideItemLoad + ".autoplay", function () {
                _this.startAutoPlay();
            });
        }
        // cancel interval on touchstart and dragstart
        this.core.LGel.on(lGEvents.dragStart + ".autoplay touchstart.lg.autoplay", function () {
            if (_this.interval) {
                _this.stopAutoPlay();
                _this.pausedOnTouchDrag = true;
            }
        });
        // restore autoplay if autoplay canceled from touchstart / dragstart
        this.core.LGel.on(lGEvents.dragEnd + ".autoplay touchend.lg.autoplay", function () {
            if (!_this.interval && _this.pausedOnTouchDrag) {
                _this.startAutoPlay();
                _this.pausedOnTouchDrag = false;
            }
        });
        this.core.LGel.on(lGEvents.beforeSlide + ".autoplay", function () {
            _this.showProgressBar();
            if (!_this.fromAuto && _this.interval) {
                _this.stopAutoPlay();
                _this.pausedOnSlideChange = true;
            }
            else {
                _this.pausedOnSlideChange = false;
            }
            _this.fromAuto = false;
        });
        // restore autoplay if autoplay canceled from touchstart / dragstart
        this.core.LGel.on(lGEvents.afterSlide + ".autoplay", function () {
            if (_this.pausedOnSlideChange &&
                !_this.interval &&
                _this.settings.forceSlideShowAutoplay) {
                _this.startAutoPlay();
                _this.pausedOnSlideChange = false;
            }
        });
        // set progress
        this.showProgressBar();
    };
    Autoplay.prototype.showProgressBar = function () {
        var _this = this;
        if (this.settings.progressBar && this.fromAuto) {
            var _$progressBar_1 = this.core.outer.find('.lg-progress-bar');
            var _$progress_1 = this.core.outer.find('.lg-progress');
            if (this.interval) {
                _$progress_1.removeAttr('style');
                _$progressBar_1.removeClass('lg-start');
                setTimeout(function () {
                    _$progress_1.css('transition', 'width ' +
                        (_this.core.settings.speed +
                            _this.settings.slideShowInterval) +
                        'ms ease 0s');
                    _$progressBar_1.addClass('lg-start');
                }, 20);
            }
        }
    };
    // Manage autoplay via play/stop buttons
    Autoplay.prototype.controls = function () {
        var _this = this;
        var _html = "<button aria-label=\"" + this.settings.autoplayPluginStrings['toggleAutoplay'] + "\" type=\"button\" class=\"lg-autoplay-button lg-icon\"></button>";
        // Append autoplay controls
        this.core.outer
            .find(this.settings.appendAutoplayControlsTo)
            .append(_html);
        this.core.outer
            .find('.lg-autoplay-button')
            .first()
            .on('click.lg.autoplay', function () {
            if (_this.core.outer.hasClass('lg-show-autoplay')) {
                _this.stopAutoPlay();
            }
            else {
                if (!_this.interval) {
                    _this.startAutoPlay();
                }
            }
        });
    };
    // Autostart gallery
    Autoplay.prototype.startAutoPlay = function () {
        var _this = this;
        this.core.outer
            .find('.lg-progress')
            .css('transition', 'width ' +
            (this.core.settings.speed +
                this.settings.slideShowInterval) +
            'ms ease 0s');
        this.core.outer.addClass('lg-show-autoplay');
        this.core.outer.find('.lg-progress-bar').addClass('lg-start');
        this.core.LGel.trigger(lGEvents.autoplayStart, {
            index: this.core.index,
        });
        this.interval = setInterval(function () {
            if (_this.core.index + 1 < _this.core.galleryItems.length) {
                _this.core.index++;
            }
            else {
                _this.core.index = 0;
            }
            _this.core.LGel.trigger(lGEvents.autoplay, {
                index: _this.core.index,
            });
            _this.fromAuto = true;
            _this.core.slide(_this.core.index, false, false, 'next');
        }, this.core.settings.speed + this.settings.slideShowInterval);
    };
    // cancel Autostart
    Autoplay.prototype.stopAutoPlay = function () {
        if (this.interval) {
            this.core.LGel.trigger(lGEvents.autoplayStop, {
                index: this.core.index,
            });
            this.core.outer.find('.lg-progress').removeAttr('style');
            this.core.outer.removeClass('lg-show-autoplay');
            this.core.outer.find('.lg-progress-bar').removeClass('lg-start');
        }
        clearInterval(this.interval);
        this.interval = false;
    };
    Autoplay.prototype.closeGallery = function () {
        this.stopAutoPlay();
    };
    Autoplay.prototype.destroy = function () {
        if (this.settings.autoplay) {
            this.core.outer.find('.lg-progress-bar').remove();
        }
        // Remove all event listeners added by autoplay plugin
        this.core.LGel.off('.lg.autoplay');
        this.core.LGel.off('.autoplay');
    };
    return Autoplay;
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Autoplay);
//# sourceMappingURL=lg-autoplay.es5.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var lightgallery_plugins_autoplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery/plugins/autoplay */ "./node_modules/lightgallery/plugins/autoplay/lg-autoplay.es5.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");


//////// L I G H T  G A L L E R Y  ////////////////////////////////



const lightgallery = document.getElementById('lightgallery');
if (lightgallery) {
  const imgs = lightgallery.querySelectorAll('a');
  const txt = document.createTextNode(`+${imgs.length}`);
  const num = document.createElement('span');
  num.className = 'num';
  num.appendChild(txt);
  let show_more = lightgallery.querySelector('.show-more');
  show_more.appendChild(num);
  (0,lightgallery__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('lightgallery'), {
    plugins: [lightgallery_plugins_autoplay__WEBPACK_IMPORTED_MODULE_2__["default"]],
    licenseKey: 'your_license_key',
    speed: 500,
    download: false
  });
}

//---------------------------------------------------------//

const lightgallery_2 = document.getElementById('lightgallery-2');
if (lightgallery_2) {
  const imgs = lightgallery_2.querySelectorAll('a');
  const txt = document.createTextNode(`+${imgs.length}`);
  const num = document.createElement('span');
  num.className = 'num';
  num.appendChild(txt);
  let show_more = lightgallery_2.querySelector('.show-more');
  show_more.appendChild(num);
  (0,lightgallery__WEBPACK_IMPORTED_MODULE_1__["default"])(document.getElementById('lightgallery-2'), {
    plugins: [lightgallery_plugins_autoplay__WEBPACK_IMPORTED_MODULE_2__["default"]],
    licenseKey: 'your_license_key',
    speed: 500,
    download: false
  });
}

//////// L I G H T B O X //////////////////////////////////////////
// import SimpleLightbox from "simplelightbox";
// new SimpleLightbox('.gallery a', {
//   overlayOpacity: .7,
//   //   spinner: false,
//   //   nav: false,
//   //   close: false,
//   //   showCounter: false,
//   //   heightRatio: 1,
//   //   widthRatio: 1
// });

//////// A C C O R D I O N S ///////////////////////////////////////

const accordion_container = document.querySelector('.accordion-container');
if (accordion_container) {
  new (accordion_js__WEBPACK_IMPORTED_MODULE_3___default())('.accordion-container', {
    openOnInit: [0]
  });
}

/////////////// T A B S ////////////////////////////////////////////
// import GraphTabs from 'graph-tabs';
// const data_tabs = document.querySelector('[data-tabs]')
// if (data_tabs) {
//   const tabs = new GraphTabs('tab');
// }

/////////////// B U R G E R + M E N U - T O P ////////////////////////////////////////
const burger = document.querySelector('.burger');
if (burger) {
  const header = document.querySelector('.header-site');
  const switch_lang = document.querySelector('.switch-lang');
  const menu = document.querySelector('.menu-top-wrap');
  const menu_items_all = document.querySelectorAll('.menu-top .menu-item');
  const menu_items = Array.from(menu_items_all).filter(el => el.querySelector('.menu-sub'));
  const btns = burger.querySelectorAll('img');
  burger.addEventListener('click', onBurger);
  function onBurger(e) {
    // переключатель кнопок бургера
    if (e.target.tagName == 'IMG') {
      btns.forEach(btn => {
        btn.classList.toggle('hidden');
      });
    }
    // показываем / скрываем меню на планшетах и мобильных
    if (!btns[1].classList.contains('hidden')) {
      header.classList.add('menu-show');
      if (window.innerWidth < 400) {
        switch_lang.classList.add('show');
      }
    } else {
      header.classList.remove('menu-show');
      if (window.innerWidth < 400) {
        switch_lang.classList.remove('show');
      }
    }
    // показываем меню
    // добаляем декоративную разделительную линию внизу меню
    if (!btns[1].classList.contains('hidden')) {
      if (window.innerWidth < 1024 && window.innerWidth > 800) {
        menu_items.forEach(el => el.onmouseover = () => {
          menu.querySelector('.menu-top').classList.add('btm-line');
        });
        menu_items.forEach(el => el.onmouseout = () => {
          menu.querySelector('.menu-top').classList.remove('btm-line');
        });
      }
      menu.style.display = 'grid';
    } else {
      if (window.innerWidth < 1024 || window.innerWidth > 800) {
        menu_items.forEach(el => el.onmouseover = null);
        menu_items.forEach(el => el.onmouseout = null);
      }
      menu.style.display = 'none';
    }
  }
  function initTopMenu() {
    menu.removeAttribute('style');
    header.classList.remove('menu-show');
    switch_lang.classList.remove('show');
    menu.querySelector('.menu-top').classList.remove('btm-line');
    menu_items.forEach(el => {
      if (el.onmouseover) {
        el.onmouseover = null;
      }
      if (el.onmouseout) {
        el.onmouseout = null;
      }
    });
    if (btns[0].classList.contains('hidden')) {
      btns.forEach(btn => {
        btn.classList.toggle('hidden');
      });
    }
  }
  window.addEventListener('resize', onResizeMenu);
  function onResizeMenu(e) {
    // location.reload()
    if (window.innerWidth > 1023) {
      initTopMenu();
    }
    if (window.innerWidth < 800) {
      initTopMenu();
    }
  }
}

// //////////// S L I D E R S ///////////////////////////////////////



//--------------  S L I D E R  D R U G  ---------------------------//

var check_slider_drug = document.querySelector(".slider-drug");
if (check_slider_drug) {
  // console.log(`slider-drug is present`);

  var slider_drug = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-drug', {
    arrows: false,
    pagination: false
  });
  var thumbnails = document.getElementsByClassName('thumbnail');
  var current;
  for (var i = 0; i < thumbnails.length; i++) {
    initThumbnail(thumbnails[i], i);
  }
  function initThumbnail(thumbnail, index) {
    thumbnail.addEventListener('click', function () {
      slider_drug.go(index);
    });
  }
  slider_drug.on('mounted move', function () {
    var thumbnail = thumbnails[slider_drug.index];
    if (thumbnail) {
      if (current) {
        current.classList.remove('is-active');
      }
      thumbnail.classList.add('is-active');
      current = thumbnail;
    }
  });
  slider_drug.mount();
} else {
  // console.log(`slider-drug is NOT present`);
}

//--------------  S L I D E R  N E W S  ---------------------------//

var check_slider_news = document.querySelector(".slider-news");
if (check_slider_news) {
  // console.log(`slider-news is present`);

  var slider_news = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-news', {
    type: 'loop',
    height: 409,
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false,
    breakpoints: {
      767: {
        perPage: 2,
        gap: 20
      },
      599: {
        perPage: 1
      }
    }
  });
  slider_news.mount();
} else {
  // console.log(`slider-news is NOT present`);
}

//-----------------slider-blockquote-1-------------------------------//

var check_slider_blockquote_1 = document.querySelector(".slider-blockquote-1");
if (check_slider_blockquote_1) {
  // console.log(`slider-blockquote-1 is present`);

  var check_slider_blockquote_1 = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-blockquote-1', {
    type: 'loop',
    autoplay: true,
    interval: 3000,
    arrows: true,
    pagination: false
  });
  check_slider_blockquote_1.mount();
} else {
  // console.log(`slider-blockquote-1 is NOT present`);
}
//-----------------slider-blockquote-2-------------------------------//

var check_slider_blockquote_2 = document.querySelector(".slider-blockquote-2");
if (check_slider_blockquote_2) {
  // console.log(`slider-blockquote-2 is present`);

  var check_slider_blockquote_2 = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-blockquote-2', {
    type: 'loop',
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: false
  });
  check_slider_blockquote_2.mount();
} else {
  // console.log(`slider-blockquote-2 is NOT present`);
}
//-----------------slider-blockquote-3-------------------------------//

var check_slider_blockquote_3 = document.querySelector(".slider-blockquote-3");
if (check_slider_blockquote_3) {
  // console.log(`slider-blockquote-3 is present`);

  var check_slider_blockquote_3 = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-blockquote-3', {
    type: 'loop',
    autoplay: true,
    interval: 2500,
    arrows: true,
    pagination: false
  });
  check_slider_blockquote_3.mount();
} else {
  // console.log(`slider-blockquote-3 is NOT present`);
}
//----------------- SLIDER EVENTS SEARCH -------------------------------//

var check_events_search = document.querySelector(".slider-events-search");
if (check_events_search) {
  // console.log(`slider-events-search is present`);

  var slider_events_search = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_4__["default"]('.slider-events-search', {
    type: 'loop',
    autoplay: true,
    interval: 4000,
    arrows: true,
    pagination: false
  });
  slider_events_search.mount();
} else {
  // console.log(`slider-events-search is NOT present`);
}

/////////////// M O D A L S /////////////////////////////////////////////////////
const html = document.querySelector('html');
const modals = document.querySelectorAll('.modal');
if (modals) {
  const dialogs = document.querySelectorAll("dialog");
  const close_btns = document.querySelectorAll(".btn-close");
  modals.forEach(el => {
    el.addEventListener('click', e => {
      if (e.currentTarget.classList.contains('reaction')) {
        e.preventDefault();
        html.classList.add('fixed');
        dialogs.forEach(el => {
          if (el.classList.contains('reaction')) {
            el.showModal();
          }
        });
      }
      if (e.currentTarget.classList.contains('partnerships')) {
        html.classList.add('fixed');
        dialogs.forEach(el => {
          if (el.classList.contains('partnerships')) {
            el.showModal();
          }
        });
      }
    });
  });
  dialogs.forEach(el => {
    el.onclick = e => {
      const dialogDimensions = el.getBoundingClientRect();
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        html.classList.remove('fixed');
        el.close();
      }
    };
  });
  close_btns.forEach(el => {
    el.addEventListener('click', () => {
      html.classList.remove('fixed');
      el.closest('dialog').close();
    });
  });
}
//---------- C O N F I R M A T I O N   M O D A L  --------------------------------//
// if (document.querySelector('.page-drugs') || document.querySelector('.page-drug')) {
//   let confirmation = document.querySelector('.confirmation')
//   const yes = document.querySelector('.yes')
//   yes.addEventListener('click', () => {
//     html.classList.remove('fixed')
//     confirmation.close()
//   })
//   confirmation.showModal()
//   html.classList.add('fixed')
//   confirmation.onclick = ''
// }
//---------- E V E N T S  P O P U P  --------------------------------//
const popup = document.querySelector('.events-popup');
if (popup) {
  const popup_btn_close = document.querySelector('.popup-btn-close');
  popup_btn_close.addEventListener('click', onPopupClose);
  function onPopupClose() {
    const popup_open = document.querySelector('dialog[open]');
    popup_open.close();
  }
}
/////////////// L A N G  S W I T C H E R /////////////////////////////////////////////////////
const switch_lang = document.querySelector('.switch-lang');
if (switch_lang) {
  const body = document.querySelector('body');
  initSwitchLang();
  const switch_items = switch_lang.querySelectorAll('.switch-item');
  switch_lang.addEventListener('click', onSwitchLang);
  function onSwitchLang(e) {
    if (e.target.classList.contains('switch-item')) {
      if (!e.target.classList.contains('active')) {
        switch_items.forEach(el => {
          el.classList.toggle('active');
        });
      }
    }
    // change body's class lang_ru/lang_en
    if (switch_lang.querySelector('.switch-item').classList.contains('active')) {
      body.classList.remove('lang_en');
      body.classList.add('lang_ru');
    } else {
      body.classList.remove('lang_ru');
      body.classList.add('lang_en');
    }
  }
  function initSwitchLang() {
    switch_lang.querySelector('.switch-item').classList.add('active');
    if (switch_lang.querySelector('.switch-item').classList.contains('ru')) {
      body.classList.add('lang_ru');
    } else {
      body.classList.add('lang_en');
    }
  }
}
/////////////// D R U G   S E A R C H  //////////////////////////////
let page_drugs = document.querySelector('.page-drugs');
if (page_drugs) {
  let drugs = document.querySelectorAll('.card-drug-block .card-drug');
  let input = document.querySelector('.search');
  input.addEventListener('input', onSearch);
  function onSearch(e) {
    let val = e.currentTarget.value.toLowerCase();
    if (val != '') {
      hideAllDrugs();
      drugs.forEach(drug => {
        let name = drug.querySelector('.name').innerText.toLowerCase();
        if (name.indexOf(val) != -1) {
          drug.classList.remove('hidden');
        }
      });
    }
    if (val === '') {
      showAllDrugs();
    }
  }
  function hideAllDrugs() {
    drugs.forEach(drug => drug.classList.add('hidden'));
  }
  function showAllDrugs() {
    drugs.forEach(drug => {
      if (drug.classList.contains('hidden')) {
        drug.classList.remove('hidden');
      }
    });
  }
}

////////////// next-events BLOCK /////////////////////////////////
const next_events = document.querySelector('.next-events');
if (next_events) {
  let w = 840;
  const events = next_events.querySelectorAll('.event');
  if (window.innerWidth <= w) {
    wrapEvents(next_events);
  }
  window.addEventListener('resize', onResizeNextEvents);
  function onResizeNextEvents() {
    if (window.innerWidth > w) {
      if (next_events.querySelector('.wrapper')) {
        unwrapEvents(next_events.querySelector('.wrapper'));
      }
    }
    if (window.innerWidth <= w) {
      if (!next_events.querySelector('.wrapper')) {
        wrapEvents(next_events);
      }
    }
  }
  function wrapEvents(parent) {
    let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wrapper';
    const wrapper = document.createElement('div');
    wrapper.classList = className;
    events.forEach(event => {
      wrapper.appendChild(event);
    });
    parent.querySelector('.desc').after(wrapper);
  }
  function unwrapEvents(parent) {
    parent.replaceWith(...parent.children);
  }
}
/////////////  F O R M  Z A P R O S  B L O C K   ///////////////////
const zapros_block = document.querySelector('.zapros-block');
if (zapros_block) {
  let cur_text;
  const input = zapros_block.nextElementSibling;
  const zapros_active = zapros_block.querySelector('.zapros-active');
  const def = zapros_block.querySelector('.def');
  const cur = zapros_block.querySelector('.cur');
  const zapros_items = zapros_block.querySelectorAll('.zapros-item');
  zapros_items.forEach(el => {
    el.addEventListener('click', e => {
      hideZaprosItem(e);
      hideDef();
      fillCur(e);
      fillInputValue();
      toggleList();
      highlightZaprosActive();
    });
  });
  zapros_block.querySelector('p').addEventListener('click', () => {
    clearInputValue();
    toggleList();
    initZaprosBlock();
    highlightZaprosActive();
  });
  function toggleList() {
    zapros_block.querySelector('.zapros-list-wrap').classList.toggle('show');
    zapros_block.querySelector('svg').classList.toggle('rotate');
  }
  function hideZaprosItem(e) {
    e.currentTarget.classList.add('hidden');
    cur_text = e.currentTarget.innerText;
  }
  function initZaprosBlock() {
    zapros_items.forEach(el => el.classList.remove('hidden'));
    def.classList.remove('hidden');
    cur.innerText = '';
  }
  function hideDef() {
    def.classList.add('hidden');
  }
  function fillCur(e) {
    cur.innerText = cur_text;
  }
  function highlightZaprosActive() {
    if (def.classList.contains('hidden')) {
      zapros_active.classList.add('hl');
      zapros_block.classList.add('change-clr');
    } else {
      zapros_active.classList.remove('hl');
      zapros_block.classList.remove('change-clr');
    }
  }
  function fillInputValue() {
    input.value = cur_text;
  }
  function clearInputValue() {
    input.value = '';
  }
}

/////////////  E V E N T S  C A L E N D A R  /////////////////////
const page_events_calendar = document.querySelector('.page-events-calendar');
if (page_events_calendar) {
  const arrEvents = [
  // { year: 2023, month: 4, day: 29, title: 'Биологическая стоматология', town: 'Липецк', link: 'event-single.html' },
  // { year: 2023, month: 4, day: 29, title: 'Стоматология завтрашнего дня', town: 'Воронеж', link: 'event-single.html' },
  // { year: 2023, month: 4, day: 29, title: 'Стоматология будущего', town: 'Тула', link: 'event-single.html' },
  // { year: 2023, month: 5, day: 16, title: 'Проблемы стоматологии', town: 'Смоленск', link: 'event-single.html' },

  {
    year: 2023,
    month: 8,
    day: 1,
    title: 'Региональная конференция',
    town: 'Санкт-Петербург',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 1,
    title: 'Лекция',
    town: 'Норильск',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 1,
    title: 'Федеральный конгресс',
    town: 'Орел',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 3,
    title: 'Круглый стол',
    town: 'Москва',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 1,
    title: 'Региональный проект',
    town: 'Белгород',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Региональная конференция',
    town: 'Краснодар',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Региональный проект',
    town: 'Ростов',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Федеральный конгресс',
    town: 'Ростов-на-Дону',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Круглый стол',
    town: 'Вологда',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Лекция',
    town: 'Тольятти',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Региональная конференция',
    town: 'Краснодар',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Региональный проект',
    town: 'Ростов',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Федеральный конгресс',
    town: 'Ростов-на-Дону',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Круглый стол',
    town: 'Вологда',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Лекция',
    town: 'Тольятти',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Региональный проект',
    town: 'Ростов',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Федеральный конгресс',
    town: 'Ростов-на-Дону',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Круглый стол',
    town: 'Вологда',
    link: 'event-single.html'
  }, {
    year: 2023,
    month: 8,
    day: 5,
    title: 'Лекция',
    town: 'Тольятти',
    link: 'event-single.html'
  }
  // { year: 2023, month: 9, day: 14, title: 'Проблемы стоматологии', town: 'Смоленск', link: 'event-single.html' },
  // { year: 2023, month: 9, day: 21, title: 'Новости стоматологии', town: 'Калининград', link: 'event-single.html' },
  // { year: 2023, month: 10, day: 11, title: 'Стоматология будущего', town: 'Рязань', link: 'event-single.html' },
  ];

  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const initDay = new Date();
  let month = initDay.getMonth();
  let year = initDay.getFullYear();
  let daysInCurrentMonth;
  let daysInPrevMonth;
  let weekDay;
  const table_event_calendar = document.querySelector('.table-event-calendar');
  const dates = table_event_calendar.querySelectorAll('.date');
  const contents = table_event_calendar.querySelectorAll('.content');
  const btn_prev = page_events_calendar.querySelector('.btn-event.prev');
  const btn_next = page_events_calendar.querySelector('.btn-event.next');
  const btn_now = page_events_calendar.querySelector('.btn-now');
  const cal_month = page_events_calendar.querySelectorAll('.cal-month');
  const cal_year = page_events_calendar.querySelectorAll('.cal-year');
  let events_list = page_events_calendar.querySelector('.events-list');
  btn_prev.addEventListener('click', onBtnPrev);
  btn_next.addEventListener('click', onBtnNext);
  btn_now.addEventListener('click', onBtnNow);
  initCalendar();
  function initCalendar() {
    removeClassSeveralEvents();
    cal_month.forEach(el => {
      el.innerText = showMonth(month);
    });
    cal_year.forEach(el => {
      el.innerText = year;
    });
    daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
    daysInPrevMonth = new Date(year, month, 0).getDate();
    weekDay = getWeekDay();
    fillCalendar(weekDay);
    if (window.innerWidth > 680) {
      handleSeveralEvents();
    }
    lastWeek();
  }
  function onBtnPrev() {
    removeClassSeveralEvents();
    if (month == 0) {
      month = 11;
      year = year - 1;
    } else {
      month--;
    }
    initCalendar();
  }
  function onBtnNext() {
    removeClassSeveralEvents();
    if (month == 11) {
      month = 0;
      year = year + 1;
    } else {
      month++;
    }
    initCalendar();
  }
  function onBtnNow() {
    removeClassSeveralEvents();
    month = initDay.getMonth();
    year = initDay.getFullYear();
    initCalendar();
  }
  function showMonth(month) {
    let m = months[month];
    return m;
  }
  function fillCalendar(weekDay) {
    dates.forEach(el => {
      el.innerText = '';
      el.classList.remove('bright', 'today');
    });
    contents.forEach(el => {
      el.innerHTML = '';
    });
    events_list.innerHTML = '';
    let arrCurMonthEvents = arrEvents.filter(el => {
      return el.year == year && el.month == month + 1;
    });
    for (let i = 0; i < daysInCurrentMonth; i++) {
      dates[i + weekDay - 1].innerText = i + 1;
      dates[i + weekDay - 1].classList.add('bright');
    }
    const ss = table_event_calendar.querySelectorAll('.bright');
    if (month == initDay.getMonth() && year == initDay.getFullYear()) {
      ss.forEach(s => {
        if (s.classList.contains('bright') && s.innerText == initDay.getDate()) {
          s.classList.add('today');
        }
      });
    }
    ss.forEach(s => {
      arrCurMonthEvents.forEach(ev => {
        if (ev.day == s.innerText) {
          const a = document.createElement('a');
          const name = document.createElement('span');
          name.classList.add('name');
          name.innerText = ev.title;
          const place = document.createElement('span');
          place.classList.add('place');
          place.innerText = ev.town;
          a.classList.add('event');
          a.setAttribute('href', `/${ev.link}`);
          a.appendChild(name);
          a.appendChild(place);
          s.nextElementSibling.appendChild(a);
          let li = document.createElement('li');
          let e_date = document.createElement('span');
          e_date.classList.add('e-date');
          e_date.innerText = ev.day;
          let e_day = document.createElement('span');
          e_day.classList.add('e-day');
          let wD = new Date(year, month, s.innerText).getDay();
          e_day.innerText = weekDays[wD];
          let e_name = document.createElement('span');
          e_name.classList.add('e-name');
          e_name.innerText = ev.title;
          let e_place = document.createElement('span');
          e_place.classList.add('e-place');
          e_place.innerText = ev.town;
          let e_content = document.createElement('a');
          e_content.setAttribute('href', `/${ev.link}`);
          e_content.classList.add('e-content');
          e_content.appendChild(e_name);
          e_content.appendChild(e_place);
          li.appendChild(e_date);
          li.appendChild(e_day);
          li.appendChild(e_content);
          events_list.appendChild(li);
        }
      });
    });
    let daysBefore = weekDay - 1;
    let daysAfter = 42 - (weekDay + daysInCurrentMonth - 1);
    for (let a = 0; a < daysAfter; a++) {
      dates[41 - a].innerText = daysAfter - a;
    }
    for (let b = 0; b < daysBefore; b++) {
      dates[b].innerText = daysInPrevMonth - daysBefore + 1 + b;
    }
  } // fillCalendar end

  function getWeekDay() {
    let wd = new Date(year, month, 1).getDay();
    if (wd == 0) wd = 7;
    return wd;
  }
  function handleSeveralEvents() {
    const all_contents = document.querySelectorAll('.sell .content');
    const filtered_contents = Array.from(all_contents).filter(el => el.children.length > 0);
    filtered_contents.forEach(el => {
      el.classList.add('several-events');
      const all_a = el.querySelectorAll('a');
      let a_lenth = all_a.length;
      all_a.forEach(el => {
        el.style.display = 'none';
      });
      let span = document.createElement('span');
      let text;
      text = document.createTextNode(`Несколько мероприятий (${a_lenth})`);
      span.appendChild(text);
      el.appendChild(span);
      el.addEventListener('click', onContentClick);
    });
  }
  function onContentClick(e) {
    let picked_day = e.currentTarget.previousElementSibling;
    let picked_day_text = picked_day.innerText;
    let picked_month = document.querySelector('.cal-month');
    let picked_month_text = picked_month.innerText;
    console.log(picked_day_text, picked_month_text);
    const links = e.currentTarget.querySelectorAll('a');
    let arr = [];
    links.forEach(el => {
      let obj = {};
      obj.name = el.firstElementChild.innerText;
      obj.place = el.lastElementChild.innerText;
      arr.push(obj);
    });
    let events_popup = document.querySelector('.events-popup');
    let events_date = events_popup.querySelector('#date');
    events_date.innerText = picked_day_text;
    let events_month = events_popup.querySelector('#month');
    events_month.innerText = picked_month_text;
    let list = events_popup.querySelector('.events-list');
    list.innerHTML = '';
    for (let i = 0; i < links.length; i++) {
      let li = document.createElement('li');
      let text = document.createTextNode(`${arr[i].name} - ${arr[i].place}`);
      li.appendChild(text);
      list.appendChild(li);
    }
    events_popup.showModal();
  }
  window.addEventListener('resize', () => initCalendar());
  if (window.innerWidth <= 680) {
    const all_contents = document.querySelectorAll('.sell .content');
    const with_a_contents = Array.from(all_contents).filter(el => el.children.length > 0);
    with_a_contents.forEach(el => {
      let as = el.querySelectorAll('a');
      as.forEach(a => a.addEventListener('click', e => e.preventDefault()));
    });
  }
  function removeClassSeveralEvents() {
    let elems = document.querySelectorAll('.content.several-events');
    elems.forEach(el => {
      el.classList.remove('several-events');
    });
  }
  function lastWeek() {
    const tr_last = table_event_calendar.querySelector('tbody tr:last-child');
    const first_week_day = tr_last.firstElementChild.firstElementChild.firstElementChild.innerText;
    console.log(first_week_day);
    tr_last.classList.remove('hidden');
    if (Number(first_week_day) > 0 && Number(first_week_day) < 8) {
      tr_last.classList.add('hidden');
    }
  }
}

/////////////  D R U G  C H O O S I N G  /////////////////////////

const search_block = document.querySelector('.search-block');
if (search_block) {
  const btns_req = search_block.querySelectorAll('.btn-req');
  btns_req.forEach(btn => btn.addEventListener('click', onClickBtn));
  const drug_cards = document.querySelectorAll('.card-drug-block .card-drug');
  const defs = document.querySelectorAll('.search-block .def');
  const curs = document.querySelectorAll('.search-block .cur');
  const level_tops = document.querySelectorAll('.search-block .level-top');
  level_tops.forEach(el => el.addEventListener('click', onClickLevelTop));
  function onClickBtn(e) {
    hideCards();
    showBtnsReq();
    showDefs();
    emptyCurs();
    disactiveLevelTops();
    const request = e.currentTarget.innerText;
    drug_cards.forEach(card => {
      const attrs = card.attributes;
      for (var k = 0; k < attrs.length; k++) {
        if (attrs[k].value == request) {
          card.classList.remove('hidden');
        }
      }
    });
    e.currentTarget.parentElement.classList.add('hidden');
    const cls = e.currentTarget.closest('.parent');
    const cur = cls.querySelector('.cur');
    cur.innerText = request;
    cur.previousElementSibling.classList.add('hidden');
    cls.querySelector('.level-top').classList.add('active');
  }
  function hideCards() {
    drug_cards.forEach(el => el.classList.add('hidden'));
  }
  function showCards() {
    drug_cards.forEach(el => el.classList.remove('hidden'));
  }
  function showBtnsReq() {
    btns_req.forEach(el => el.parentElement.classList.remove('hidden'));
  }
  function showDefs() {
    defs.forEach(el => el.classList.remove('hidden'));
  }
  function emptyCurs() {
    curs.forEach(el => el.innerText = '');
  }
  function disactiveLevelTops() {
    level_tops.forEach(el => el.classList.remove('active'));
  }
  function onClickLevelTop() {
    disactiveLevelTops();
    showBtnsReq();
    showDefs();
    emptyCurs();
    showCards();
  }
}

/////////////  F O R M  A T T A C H  F I L E  /////////////////////////

const vacancy_form_block = document.querySelector('.vacancy-form-block');
if (vacancy_form_block) {
  const input_file = vacancy_form_block.querySelector('.input-file');
  const btn_attach = vacancy_form_block.querySelector('.btn-attach');
  input_file.addEventListener('change', onChange);
  function onChange() {
    if (input_file.value != '') {
      btn_attach.classList.add('attached');
      btn_attach.querySelector('.text').innerText = 'Файл прикреплен';
    }
  }
}

///////////// FORM SELECT ACCORDIONS //////////////////////////////////
let selects = document.querySelectorAll('.select');
if (selects) {
  selects.forEach(select => {
    let current = select.querySelector('.select__current');
    let current_text = current.querySelector('span');
    let arrow = select.querySelector('.select__arrow');
    let options_block = select.querySelector('.select__options');
    let options = select.querySelectorAll('.select__option');
    let hidden_inputs = select.closest('dialog').querySelectorAll('.select-hidden');
    current.addEventListener('click', () => {
      selectToggle();
      if (select.classList.contains('active')) {
        current.classList.remove('active');
      } else {
        if (current_text.innerText != options[0].innerText) {
          current.classList.add('active');
        }
      }
    });
    options.forEach((option, i) => {
      option.addEventListener('click', onOption);
      if (i === 0) option.classList.add('hidden');
    });
    function onOption(e) {
      let text = e.currentTarget.innerText;
      options.forEach(option => option.classList.remove('hidden'));
      e.currentTarget.classList.add('hidden');
      current_text.innerText = text;
      selectToggle();
      let name = e.currentTarget.closest('.select').getAttribute('data-name');
      if (e.currentTarget.innerText !== options[0].innerText) {
        current.classList.add('active');
        hidden_inputs.forEach(input => {
          if (input.name === name) {
            input.value = text;
          }
        });
      } else {
        current.classList.remove('active');
        hidden_inputs.forEach(input => {
          if (input.name === name) {
            input.value = '';
          }
        });
      }
    }
    function selectToggle() {
      select.classList.add('active');
      options_block.classList.toggle('expand');
      arrow.classList.toggle('rotate');
      if (!options_block.classList.contains('expand') && current_text.innerText === options[0].innerText) {
        select.classList.remove('active');
      }
    }
    let sub_select = select.querySelector('.sub-select');
    if (sub_select) {
      let sub_current = sub_select.querySelector('.sub-select__current');
      let sub_current_text = sub_current.querySelector('span');
      let sub_arrow = sub_select.querySelector('.sub-select__arrow');
      let sub_options_block = sub_select.querySelector('.sub-select__options');
      let sub_options = sub_options_block.querySelectorAll('.select__option');
      sub_options[0].classList.add('hidden');
      sub_current.addEventListener('click', onSubCurrent);
      sub_options.forEach(option => option.addEventListener('click', onSubOption));
      function onSubCurrent() {
        subSelectToggle();
      }
      function onSubOption(e) {
        let name = e.currentTarget.innerText;
        options.forEach(option => option.classList.remove('hidden'));
        e.currentTarget.classList.add('hidden');
        sub_current_text.innerText = name;
        subSelectToggle();
      }
      function subSelectToggle() {
        sub_options_block.classList.toggle('expand');
        sub_arrow.classList.toggle('rotate');
      }
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map