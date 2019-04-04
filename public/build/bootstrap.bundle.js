(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bootstrap.bundle"],{

/***/ "./assets/js/bootstrap.bundle.js":
/*!***************************************!*\
  !*** ./assets/js/bootstrap.bundle.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, global) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = function (exports, $) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function () {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var transition = false;
    var MAX_UID = 1000000;
    var TransitionEndEvent = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend' // shoutout AngusCroll (https://goo.gl/pxwQGp)

    };

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: transition.end,
        delegateType: transition.end,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndTest() {
      if (window.QUnit) {
        return false;
      }

      var el = document.createElement('bootstrap');

      for (var name in TransitionEndEvent) {
        if (typeof el.style[name] !== 'undefined') {
          return {
            end: TransitionEndEvent[name]
          };
        }
      }

      return false;
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      transition = transitionEndTest();
      $.fn.emulateTransitionEnd = transitionEndEmulator;

      if (Util.supportsTransitionEnd()) {
        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
      }
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          var $selector = $(document).find(selector);
          return $selector.length > 0 ? selector : null;
        } catch (error) {
          return null;
        }
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(transition.end);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(transition);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }($);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var inheritsLoose = _inheritsLoose;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'alert';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Alert =
    /*#__PURE__*/
    function () {
      function Alert(element) {
        this._element = element;
      } // getters


      var _proto = Alert.prototype; // public

      _proto.close = function close(element) {
        element = element || this._element;

        var rootElement = this._getRootElement(element);

        var customEvent = this._triggerCloseEvent(rootElement);

        if (customEvent.isDefaultPrevented()) {
          return;
        }

        this._removeElement(rootElement);
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // private


      _proto._getRootElement = function _getRootElement(element) {
        var selector = Util.getSelectorFromElement(element);
        var parent = false;

        if (selector) {
          parent = $(selector)[0];
        }

        if (!parent) {
          parent = $(element).closest("." + ClassName.ALERT)[0];
        }

        return parent;
      };

      _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
        var closeEvent = $.Event(Event.CLOSE);
        $(element).trigger(closeEvent);
        return closeEvent;
      };

      _proto._removeElement = function _removeElement(element) {
        var _this = this;

        $(element).removeClass(ClassName.SHOW);

        if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
          this._destroyElement(element);

          return;
        }

        $(element).one(Util.TRANSITION_END, function (event) {
          return _this._destroyElement(element, event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      };

      _proto._destroyElement = function _destroyElement(element) {
        $(element).detach().trigger(Event.CLOSED).remove();
      }; // static


      Alert._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Alert(this);
            $element.data(DATA_KEY, data);
          }

          if (config === 'close') {
            data[config](this);
          }
        });
      };

      Alert._handleDismiss = function _handleDismiss(alertInstance) {
        return function (event) {
          if (event) {
            event.preventDefault();
          }

          alertInstance.close(this);
        };
      };

      createClass(Alert, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Alert;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Alert._jQueryInterface;
    $.fn[NAME].Constructor = Alert;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    return Alert;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Button = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'button';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Button =
    /*#__PURE__*/
    function () {
      function Button(element) {
        this._element = element;
      } // getters


      var _proto = Button.prototype; // public

      _proto.toggle = function toggle() {
        var triggerChangeEvent = true;
        var addAriaPressed = true;
        var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

        if (rootElement) {
          var input = $(this._element).find(Selector.INPUT)[0];

          if (input) {
            if (input.type === 'radio') {
              if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
                triggerChangeEvent = false;
              } else {
                var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

                if (activeElement) {
                  $(activeElement).removeClass(ClassName.ACTIVE);
                }
              }
            }

            if (triggerChangeEvent) {
              if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                return;
              }

              input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
              $(input).trigger('change');
            }

            input.focus();
            addAriaPressed = false;
          }
        }

        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(ClassName.ACTIVE);
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // static


      Button._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Button(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
            data[config]();
          }
        });
      };

      createClass(Button, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Button;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $(event.target).closest(Selector.BUTTON)[0];
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Button._jQueryInterface;
    $.fn[NAME].Constructor = Button;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };

    return Button;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Carousel = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'carousel';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Carousel =
    /*#__PURE__*/
    function () {
      function Carousel(element, config) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this._config = this._getConfig(config);
        this._element = $(element)[0];
        this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

        this._addEventListeners();
      } // getters


      var _proto = Carousel.prototype; // public

      _proto.next = function next() {
        if (!this._isSliding) {
          this._slide(Direction.NEXT);
        }
      };

      _proto.nextWhenVisible = function nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
          this.next();
        }
      };

      _proto.prev = function prev() {
        if (!this._isSliding) {
          this._slide(Direction.PREV);
        }
      };

      _proto.pause = function pause(event) {
        if (!event) {
          this._isPaused = true;
        }

        if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
          Util.triggerTransitionEnd(this._element);
          this.cycle(true);
        }

        clearInterval(this._interval);
        this._interval = null;
      };

      _proto.cycle = function cycle(event) {
        if (!event) {
          this._isPaused = false;
        }

        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }

        if (this._config.interval && !this._isPaused) {
          this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
      };

      _proto.to = function to(index) {
        var _this = this;

        this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeIndex = this._getItemIndex(this._activeElement);

        if (index > this._items.length - 1 || index < 0) {
          return;
        }

        if (this._isSliding) {
          $(this._element).one(Event.SLID, function () {
            return _this.to(index);
          });
          return;
        }

        if (activeIndex === index) {
          this.pause();
          this.cycle();
          return;
        }

        var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

        this._slide(direction, this._items[index]);
      };

      _proto.dispose = function dispose() {
        $(this._element).off(EVENT_KEY);
        $.removeData(this._element, DATA_KEY);
        this._items = null;
        this._config = null;
        this._element = null;
        this._interval = null;
        this._isPaused = null;
        this._isSliding = null;
        this._activeElement = null;
        this._indicatorsElement = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        if (this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN, function (event) {
            return _this2._keydown(event);
          });
        }

        if (this._config.pause === 'hover') {
          $(this._element).on(Event.MOUSEENTER, function (event) {
            return _this2.pause(event);
          }).on(Event.MOUSELEAVE, function (event) {
            return _this2.cycle(event);
          });

          if ('ontouchstart' in document.documentElement) {
            // if it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            $(this._element).on(Event.TOUCHEND, function () {
              _this2.pause();

              if (_this2.touchTimeout) {
                clearTimeout(_this2.touchTimeout);
              }

              _this2.touchTimeout = setTimeout(function (event) {
                return _this2.cycle(event);
              }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
            });
          }
        }
      };

      _proto._keydown = function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }

        switch (event.which) {
          case ARROW_LEFT_KEYCODE:
            event.preventDefault();
            this.prev();
            break;

          case ARROW_RIGHT_KEYCODE:
            event.preventDefault();
            this.next();
            break;

          default:
            return;
        }
      };

      _proto._getItemIndex = function _getItemIndex(element) {
        this._items = $.makeArray($(element).parent().find(Selector.ITEM));
        return this._items.indexOf(element);
      };

      _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
        var isNextDirection = direction === Direction.NEXT;
        var isPrevDirection = direction === Direction.PREV;

        var activeIndex = this._getItemIndex(activeElement);

        var lastItemIndex = this._items.length - 1;
        var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

        if (isGoingToWrap && !this._config.wrap) {
          return activeElement;
        }

        var delta = direction === Direction.PREV ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this._items.length;
        return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
      };

      _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
        var targetIndex = this._getItemIndex(relatedTarget);

        var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);

        var slideEvent = $.Event(Event.SLIDE, {
          relatedTarget: relatedTarget,
          direction: eventDirectionName,
          from: fromIndex,
          to: targetIndex
        });
        $(this._element).trigger(slideEvent);
        return slideEvent;
      };

      _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
          $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

          var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

          if (nextIndicator) {
            $(nextIndicator).addClass(ClassName.ACTIVE);
          }
        }
      };

      _proto._slide = function _slide(direction, element) {
        var _this3 = this;

        var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

        var activeElementIndex = this._getItemIndex(activeElement);

        var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

        var nextElementIndex = this._getItemIndex(nextElement);

        var isCycling = Boolean(this._interval);
        var directionalClassName;
        var orderClassName;
        var eventDirectionName;

        if (direction === Direction.NEXT) {
          directionalClassName = ClassName.LEFT;
          orderClassName = ClassName.NEXT;
          eventDirectionName = Direction.LEFT;
        } else {
          directionalClassName = ClassName.RIGHT;
          orderClassName = ClassName.PREV;
          eventDirectionName = Direction.RIGHT;
        }

        if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
          this._isSliding = false;
          return;
        }

        var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

        if (slideEvent.isDefaultPrevented()) {
          return;
        }

        if (!activeElement || !nextElement) {
          // some weirdness is happening, so we bail
          return;
        }

        this._isSliding = true;

        if (isCycling) {
          this.pause();
        }

        this._setActiveIndicatorElement(nextElement);

        var slidEvent = $.Event(Event.SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {
          $(nextElement).addClass(orderClassName);
          Util.reflow(nextElement);
          $(activeElement).addClass(directionalClassName);
          $(nextElement).addClass(directionalClassName);
          $(activeElement).one(Util.TRANSITION_END, function () {
            $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
            $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
            _this3._isSliding = false;
            setTimeout(function () {
              return $(_this3._element).trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          $(activeElement).removeClass(ClassName.ACTIVE);
          $(nextElement).addClass(ClassName.ACTIVE);
          this._isSliding = false;
          $(this._element).trigger(slidEvent);
        }

        if (isCycling) {
          this.cycle();
        }
      }; // static


      Carousel._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Default, $(this).data());

          if (_typeof(config) === 'object') {
            $.extend(_config, config);
          }

          var action = typeof config === 'string' ? config : _config.slide;

          if (!data) {
            data = new Carousel(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'number') {
            data.to(config);
          } else if (typeof action === 'string') {
            if (typeof data[action] === 'undefined') {
              throw new Error("No method named \"" + action + "\"");
            }

            data[action]();
          } else if (_config.interval) {
            data.pause();
            data.cycle();
          }
        });
      };

      Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
        var selector = Util.getSelectorFromElement(this);

        if (!selector) {
          return;
        }

        var target = $(selector)[0];

        if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
          return;
        }

        var config = $.extend({}, $(target).data(), $(this).data());
        var slideIndex = this.getAttribute('data-slide-to');

        if (slideIndex) {
          config.interval = false;
        }

        Carousel._jQueryInterface.call($(target), config);

        if (slideIndex) {
          $(target).data(DATA_KEY).to(slideIndex);
        }

        event.preventDefault();
      };

      createClass(Carousel, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Carousel;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $(window).on(Event.LOAD_DATA_API, function () {
      $(Selector.DATA_RIDE).each(function () {
        var $carousel = $(this);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Carousel._jQueryInterface;
    $.fn[NAME].Constructor = Carousel;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };

    return Carousel;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Collapse = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'collapse';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 600;
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Collapse =
    /*#__PURE__*/
    function () {
      function Collapse(element, config) {
        this._isTransitioning = false;
        this._element = element;
        this._config = this._getConfig(config);
        this._triggerArray = $.makeArray($("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
        var tabToggles = $(Selector.DATA_TOGGLE);

        for (var i = 0; i < tabToggles.length; i++) {
          var elem = tabToggles[i];
          var selector = Util.getSelectorFromElement(elem);

          if (selector !== null && $(selector).filter(element).length > 0) {
            this._triggerArray.push(elem);
          }
        }

        this._parent = this._config.parent ? this._getParent() : null;

        if (!this._config.parent) {
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        }

        if (this._config.toggle) {
          this.toggle();
        }
      } // getters


      var _proto = Collapse.prototype; // public

      _proto.toggle = function toggle() {
        if ($(this._element).hasClass(ClassName.SHOW)) {
          this.hide();
        } else {
          this.show();
        }
      };

      _proto.show = function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var actives;
        var activesData;

        if (this._parent) {
          actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));

          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);

          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');

          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
        this._element.style[dimension] = 0;

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll" + capitalizedDimension;
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        this._element.style[dimension] = this._element[scrollSize] + "px";
      };

      _proto.hide = function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);

        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();

        this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
        Util.reflow(this._element);
        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

        if (this._triggerArray.length) {
          for (var i = 0; i < this._triggerArray.length; i++) {
            var trigger = this._triggerArray[i];
            var selector = Util.getSelectorFromElement(trigger);

            if (selector !== null) {
              var $elem = $(selector);

              if (!$elem.hasClass(ClassName.SHOW)) {
                $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
              }
            }
          }
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);

          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = '';

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      };

      _proto.setTransitioning = function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getDimension = function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      };

      _proto._getParent = function _getParent() {
        var _this3 = this;

        var parent = null;

        if (Util.isElement(this._config.parent)) {
          parent = this._config.parent; // it's a jQuery object

          if (typeof this._config.parent.jquery !== 'undefined') {
            parent = this._config.parent[0];
          }
        } else {
          parent = $(this._config.parent)[0];
        }

        var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });
        return parent;
      };

      _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.SHOW);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }; // static


      Collapse._getTargetFromElement = function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      };

      Collapse._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          var _config = $.extend({}, Default, $this.data(), _typeof(config) === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Collapse, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Collapse;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $(this);
      var selector = Util.getSelectorFromElement(this);
      $(selector).each(function () {
        var $target = $(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Collapse._jQueryInterface;
    $.fn[NAME].Constructor = Collapse;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };

    return Collapse;
  }($);
  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.12.5
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */


  var nativeHints = ['native code', '[object MutationObserverConstructor]'];
  /**
   * Determine if a function is implemented natively (as opposed to a polyfill).
   * @method
   * @memberof Popper.Utils
   * @argument {Function | undefined} fn the function to check
   * @returns {Boolean}
   */

  var isNative = function isNative(fn) {
    return nativeHints.some(function (hint) {
      return (fn || '').toString().indexOf(hint) > -1;
    });
  };

  var isBrowser = typeof window !== 'undefined';
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  var timeoutDuration = 0;

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      timeoutDuration = 1;
      break;
    }
  }

  function microtaskDebounce(fn) {
    var scheduled = false;
    var i = 0;
    var elem = document.createElement('span'); // MutationObserver provides a mechanism for scheduling microtasks, which
    // are scheduled *before* the next task. This gives us a way to debounce
    // a function but ensure it's called *before* the next paint.

    var observer = new MutationObserver(function () {
      fn();
      scheduled = false;
    });
    observer.observe(elem, {
      attributes: true
    });
    return function () {
      if (!scheduled) {
        scheduled = true;
        elem.setAttribute('x-index', i);
        i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
      }
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  } // It's common for MutationObserver polyfills to be seen in the wild, however
  // these rely on Mutation Events which only occur when an element is connected
  // to the DOM. The algorithm used in this module does not use a connected element,
  // and so we must ensure that a *native* MutationObserver is available.


  var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);
  /**
  * Create a debounced version of a method, that's asynchronously deferred
  * but called in the minimum time possible.
  *
  * @method
  * @memberof Popper.Utils
  * @argument {Function} fn
  * @returns {Function}
  */

  var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;
  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */


  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    } // NOTE: 1 DOM access here


    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }
  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */


  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }

    return element.parentNode || element.host;
  }
  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */


  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
      return window.document.body;
    } // Firefox want us to check `-x` and `-y` variations as well


    var _getStyleComputedProp = getStyleComputedProperty(element),
        overflow = _getStyleComputedProp.overflow,
        overflowX = _getStyleComputedProp.overflowX,
        overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }
  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */


  function getOffsetParent(element) {
    // NOTE: 1 DOM access here
    var offsetParent = element && element.offsetParent;
    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return window.document.documentElement;
    } // .offsetParent will return the closest TD or TABLE in case
    // no offsetParent is present, I hate this job...


    if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }

    return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
  }
  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */


  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }
  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */


  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return window.document.documentElement;
    } // Here we make sure to give as "start" the element that comes first in the DOM


    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1; // Get common ancestor container

    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

    if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    } // one of the nodes is inside shadowDOM, find which one


    var element1root = getRoot(element1);

    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }
  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */


  function getScroll(element) {
    var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = window.document.documentElement;
      var scrollingElement = window.document.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }
  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */


  function includeScroll(rect, element) {
    var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }
  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */


  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
  }
  /**
   * Tells if you are running Internet Explorer 10
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean} isIE10
   */


  var isIE10 = undefined;

  var isIE10$1 = function isIE10$1() {
    if (isIE10 === undefined) {
      isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
    }

    return isIE10;
  };

  function getSize(axis, body, html, computedStyle) {
    return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
  }

  function getWindowSizes() {
    var body = window.document.body;
    var html = window.document.documentElement;
    var computedStyle = isIE10$1() && window.getComputedStyle(html);
    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle)
    };
  }

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass$1 = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */


  function getClientRect(offsets) {
    return _extends$1({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height
    });
  }
  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */


  function getBoundingClientRect(element) {
    var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11

    if (isIE10$1()) {
      try {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } catch (err) {}
    } else {
      rect = element.getBoundingClientRect();
    }

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    }; // subtract scrollbar size from sizes

    var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
    var width = sizes.width || element.clientWidth || result.right - result.left;
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons

    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');
      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var isIE10 = isIE10$1();
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);
    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = +styles.borderTopWidth.split('px')[0];
    var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.

    if (!isIE10 && isHTML) {
      var marginTop = +styles.marginTop.split('px')[0];
      var marginLeft = +styles.marginLeft.split('px')[0];
      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var html = window.document.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    var scrollTop = getScroll(html);
    var scrollLeft = getScroll(html, 'left');
    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height
    };
    return getClientRect(offset);
  }
  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */


  function isFixed(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }

    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }

    return isFixed(getParentNode(element));
  }
  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @returns {Object} Coordinates of the boundaries
   */


  function getBoundaries(popper, reference, padding, boundariesElement) {
    // NOTE: 1 DOM access here
    var boundaries = {
      top: 0,
      left: 0
    };
    var offsetParent = findCommonOffsetParent(popper, reference); // Handle viewport case

    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;

      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(popper));

        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = window.document.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = window.document.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent); // In case of HTML, we need a different computation

      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(),
            height = _getWindowSizes.height,
            width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    } // Add paddings


    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return width * height;
  }
  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
    var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height
      }
    };
    var sortedAreas = Object.keys(rects).map(function (key) {
      return _extends$1({
        key: key
      }, rects[key], {
        area: getArea(rects[key])
      });
    }).sort(function (a, b) {
      return b.area - a.area;
    });
    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });
    var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
    var variation = placement.split('-')[1];
    return computedPlacement + (variation ? '-' + variation : '');
  }
  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */


  function getReferenceOffsets(state, popper, reference) {
    var commonOffsetParent = findCommonOffsetParent(popper, reference);
    return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
  }
  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */


  function getOuterSizes(element) {
    var styles = window.getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    };
    return result;
  }
  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */


  function getOppositePlacement(placement) {
    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }
  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */


  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0]; // Get popper node sizes

    var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height
    }; // depending by the popper placement we have to compute its offsets slightly differently

    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

    if (placement === secondarySide) {
      popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }
  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    } // use `filter` to obtain the same behavior of `find`


    return arr.filter(check)[0];
  }
  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */


  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    } // use `find` + `indexOf` if `findIndex` isn't supported


    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }
  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */


  function runModifiers(modifiers, data, ends) {
    var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
    modifiersToRun.forEach(function (modifier) {
      if (modifier.function) {
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }

      var fn = modifier.function || modifier.fn;

      if (modifier.enabled && isFunction(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);
        data = fn(data, modifier);
      }
    });
    return data;
  }
  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */


  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {}
    }; // compute reference element offsets

    data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

    data.originalPlacement = data.placement; // compute the popper offsets

    data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
    data.offsets.popper.position = 'absolute'; // run the modifiers

    data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback

    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }
  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */


  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
          enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }
  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */


  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length - 1; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;

      if (typeof window.document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }

    return null;
  }
  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */


  function destroy() {
    this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.left = '';
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it

    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }

    return this;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? window : scrollParent;
    target.addEventListener(event, callback, {
      passive: true
    });

    if (!isBody) {
      attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
    }

    scrollParents.push(target);
  }
  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    window.addEventListener('resize', state.updateBound, {
      passive: true
    }); // Scroll event listener on scroll parents

    var scrollElement = getScrollParent(reference);
    attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;
    return state;
  }
  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */


  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
    }
  }
  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */


  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    window.removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    }); // Reset state

    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }
  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger onUpdate callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */


  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      window.cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }
  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */


  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }
  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = ''; // add unit if the value is numeric and is one of the following

      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
        unit = 'px';
      }

      element.style[prop] = styles[prop] + unit;
    });
  }
  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */


  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];

      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */


  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element

    setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }
  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Popper.js options
   */


  function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(state, popper, reference); // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value

    var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
    popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations

    setStyles(popper, {
      position: 'absolute'
    });
    return options;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function computeStyle(data, options) {
    var x = options.x,
        y = options.y;
    var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'applyStyle';
    }).gpuAcceleration;

    if (legacyGpuAccelerationOption !== undefined) {
      console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
    }

    var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

    var styles = {
      position: popper.position
    }; // floor sides to avoid blurry text

    var offsets = {
      left: Math.floor(popper.left),
      top: Math.floor(popper.top),
      bottom: Math.floor(popper.bottom),
      right: Math.floor(popper.right)
    };
    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed

    var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.

    var left = void 0,
        top = void 0;

    if (sideA === 'bottom') {
      top = -offsetParentRect.height + offsets.bottom;
    } else {
      top = offsets.top;
    }

    if (sideB === 'right') {
      left = -offsetParentRect.width + offsets.right;
    } else {
      left = offsets.left;
    }

    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    } // Attributes


    var attributes = {
      'x-placement': data.placement
    }; // Update `data` attributes, styles and arrowStyles

    data.attributes = _extends$1({}, attributes, data.attributes);
    data.styles = _extends$1({}, styles, data.styles);
    data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
    return data;
  }
  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */


  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });
    var isRequired = !!requesting && modifiers.some(function (modifier) {
      return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
    });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';

      var requested = '`' + requestedName + '`';
      console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
    }

    return isRequired;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function arrow(data, options) {
    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn('WARNING: `arrow.element` must be child of its popper element!');
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len]; //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjuction
    //
    // top/left side

    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
    } // bottom/right side


    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
    } // compute center of the popper


    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available

    var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
    var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide; // prevent arrowElement from being placed not contiguously to its popper

    sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
    data.arrowElement = arrowElement;
    data.offsets.arrow = {};
    data.offsets.arrow[side] = Math.round(sideValue);
    data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

    return data;
  }
  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */


  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }

    return variation;
  }
  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-right` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */


  var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

  var validPlacements = placements.slice(3);
  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */

  function clockwise(placement) {
    var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var index = validPlacements.indexOf(placement);
    var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */

  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);
    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;

      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;

      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;

      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

      var floor = Math.floor;
      var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
      var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future

        data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function keepTogether(data) {
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
    }

    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }
  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */


  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2]; // If it's not a number it's an operator, I guess

    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;

      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;

        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return rect[measurement] / 100 * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;

      if (unit === 'vh') {
        size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      } else {
        size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      }

      return size / 100 * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }
  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */


  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one

    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    }); // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space

    var divider = fragments.indexOf(find(fragments, function (frag) {
      return frag.search(/,|\s/) !== -1;
    }));

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    } // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.


    var splitRegex = /\s*,\s*|\s+/;
    var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
      var mergeWithPrevious = false;
      return op // This aggregates any `+` or `-` sign that aren't considered operators
      // e.g.: 10 + +5 => [10, +, +5]
      .reduce(function (a, b) {
        if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
          a[a.length - 1] = b;
          mergeWithPrevious = true;
          return a;
        } else if (mergeWithPrevious) {
          a[a.length - 1] += b;
          mergeWithPrevious = false;
          return a;
        } else {
          return a.concat(b);
        }
      }, []) // Here we convert the string values into number values (in px)
      .map(function (str) {
        return toValue(str, measurement, popperOffsets, referenceOffsets);
      });
    }); // Loop trough the offsets arrays and execute the operations

    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */


  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
        _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var basePlacement = placement.split('-')[0];
    var offsets = void 0;

    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function preventOverflow(data, options) {
    var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken

    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
    options.boundaries = boundaries;
    var order = options.priority;
    var popper = data.offsets.popper;
    var check = {
      primary: function primary(placement) {
        var value = popper[placement];

        if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
          value = Math.max(popper[placement], boundaries[placement]);
        }

        return defineProperty({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];

        if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
          value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
        }

        return defineProperty({}, mainSide, value);
      }
    };
    order.forEach(function (placement) {
      var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends$1({}, popper, check[side](placement));
    });
    data.offsets.popper = popper;
    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

    if (shiftvariation) {
      var _data$offsets = data.offsets,
          reference = _data$offsets.reference,
          popper = _data$offsets.popper;
      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';
      var shiftOffsets = {
        start: defineProperty({}, side, reference[side]),
        end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
      };
      data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function hide(data) {
    if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }
  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */


  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
        popper = _data$offsets.popper,
        reference = _data$offsets.reference;
    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
    popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);
    return data;
  }
  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */


  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: shift
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unitless, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the height.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: offset,

      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * An scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: preventOverflow,

      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],

      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper this makes sure the popper has always a little padding
       * between the edges of its container
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier, can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent'
    },

    /**
     * Modifier used to make sure the reference and its popper stay near eachothers
     * without leaving any gap between the two. Expecially useful when the arrow is
     * enabled and you want to assure it to point to its reference element.
     * It cares only about the first axis, you can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: keepTogether
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjuction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: arrow,

      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]'
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: flip,

      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations).
       */
      behavior: 'flip',

      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,

      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position,
       * the popper will never be placed outside of the defined boundaries
       * (except if keepTogether is enabled)
       */
      boundariesElement: 'viewport'
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,

      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,

      /** @prop {ModifierFn} */
      fn: inner
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: hide
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: computeStyle,

      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: true,

      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',

      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right'
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define you own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,

      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,

      /** @prop {ModifierFn} */
      fn: applyStyle,

      /** @prop {Function} */
      onLoad: applyStyleOnLoad,

      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3d transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties.
       */
      gpuAcceleration: undefined
    }
  };
  /**
   * The `dataObject` is an object containing all the informations used by Popper.js
   * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overriden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass as 3rd argument an object with the same
   * structure of this object, example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */

  var Defaults = {
    /**
     * Popper's placement
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Whether events (resize, scroll) are initially enabled
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated, this callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js
     * @prop {modifiers}
     */
    modifiers: modifiers
  };
  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */
  // Utils
  // Methods

  var Popper = function () {
    /**
     * Create a new Popper.js instance
     * @class Popper
     * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
     * @param {HTMLElement} popper - The HTML element used as popper.
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      }; // make update() debounced, so that it only runs at most once-per-tick


      this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

      this.options = _extends$1({}, Popper.Defaults, options); // init state

      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: []
      }; // get reference and popper elements (allow jQuery wrappers)

      this.reference = reference.jquery ? reference[0] : reference;
      this.popper = popper.jquery ? popper[0] : popper; // Deep merge modifiers options

      this.options.modifiers = {};
      Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
        _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
      }); // Refactoring modifiers' list (Object => Array)

      this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
        return _extends$1({
          name: name
        }, _this.options.modifiers[name]);
      }) // sort the modifiers by order
      .sort(function (a, b) {
        return a.order - b.order;
      }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
          modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
        }
      }); // fire the first update to position the popper in the right place

      this.update();
      var eventsEnabled = this.options.eventsEnabled;

      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    } // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs


    createClass$1(Popper, [{
      key: 'update',
      value: function update$$1() {
        return update.call(this);
      }
    }, {
      key: 'destroy',
      value: function destroy$$1() {
        return destroy.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
      /**
       * Schedule an update, it will run on the next UI update available
       * @method scheduleUpdate
       * @memberof Popper
       */

      /**
       * Collection of utilities useful when writing custom modifiers.
       * Starting from version 1.7, this method is available only if you
       * include `popper-utils.js` before `popper.js`.
       *
       * **DEPRECATION**: This way to access PopperUtils is deprecated
       * and will be removed in v2! Use the PopperUtils module directly instead.
       * Due to the high instability of the methods contained in Utils, we can't
       * guarantee them to follow semver. Use them at your own risk!
       * @static
       * @private
       * @type {Object}
       * @deprecated since version 1.8
       * @member Utils
       * @memberof Popper
       */

    }]);
    return Popper;
  }();
  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */


  Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
  Popper.placements = placements;
  Popper.Defaults = Defaults;
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function () {
    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'dropdown';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end'
    };
    var Default = {
      offset: 0,
      flip: true
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Dropdown =
    /*#__PURE__*/
    function () {
      function Dropdown(element, config) {
        this._element = element;
        this._popper = null;
        this._config = this._getConfig(config);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();

        this._addEventListeners();
      } // getters


      var _proto = Dropdown.prototype; // public

      _proto.toggle = function toggle() {
        if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this._element);

        var isActive = $(this._menu).hasClass(ClassName.SHOW);

        Dropdown._clearMenus();

        if (isActive) {
          return;
        }

        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = $.Event(Event.SHOW, relatedTarget);
        $(parent).trigger(showEvent);

        if (showEvent.isDefaultPrevented()) {
          return;
        }

        var element = this._element; // for dropup with alignment we use the parent as popper container

        if ($(parent).hasClass(ClassName.DROPUP)) {
          if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig()); // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
          $('body').children().on('mouseover', null, $.noop);
        }

        this._element.focus();

        this._element.setAttribute('aria-expanded', true);

        $(this._menu).toggleClass(ClassName.SHOW);
        $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._element).off(EVENT_KEY);
        this._element = null;
        this._menu = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
      };

      _proto.update = function update() {
        this._inNavbar = this._detectNavbar();

        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // private


      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(this._element).on(Event.CLICK, function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this.toggle();
        });
      };

      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this._element).data(), config);
        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getMenuElement = function _getMenuElement() {
        if (!this._menu) {
          var parent = Dropdown._getParentFromElement(this._element);

          this._menu = $(parent).find(Selector.MENU)[0];
        }

        return this._menu;
      };

      _proto._getPlacement = function _getPlacement() {
        var $parentDropdown = $(this._element).parent();
        var placement = AttachmentMap.BOTTOM; // Handle dropup

        if ($parentDropdown.hasClass(ClassName.DROPUP)) {
          placement = AttachmentMap.TOP;

          if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.TOPEND;
          }
        } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.BOTTOMEND;
        }

        return placement;
      };

      _proto._detectNavbar = function _detectNavbar() {
        return $(this._element).closest('.navbar').length > 0;
      };

      _proto._getPopperConfig = function _getPopperConfig() {
        var _this2 = this;

        var offsetConf = {};

        if (typeof this._config.offset === 'function') {
          offsetConf.fn = function (data) {
            data.offsets = $.extend({}, data.offsets, _this2._config.offset(data.offsets) || {});
            return data;
          };
        } else {
          offsetConf.offset = this._config.offset;
        }

        var popperConfig = {
          placement: this._getPlacement(),
          modifiers: {
            offset: offsetConf,
            flip: {
              enabled: this._config.flip
            } // Disable Popper.js for Dropdown in Navbar

          }
        };

        if (this._inNavbar) {
          popperConfig.modifiers.applyStyle = {
            enabled: !this._inNavbar
          };
        }

        return popperConfig;
      }; // static


      Dropdown._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _typeof(config) === 'object' ? config : null;

          if (!data) {
            data = new Dropdown(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      Dropdown._clearMenus = function _clearMenus(event) {
        if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
          return;
        }

        var toggles = $.makeArray($(Selector.DATA_TOGGLE));

        for (var i = 0; i < toggles.length; i++) {
          var parent = Dropdown._getParentFromElement(toggles[i]);

          var context = $(toggles[i]).data(DATA_KEY);
          var relatedTarget = {
            relatedTarget: toggles[i]
          };

          if (!context) {
            continue;
          }

          var dropdownMenu = context._menu;

          if (!$(parent).hasClass(ClassName.SHOW)) {
            continue;
          }

          if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
            continue;
          }

          var hideEvent = $.Event(Event.HIDE, relatedTarget);
          $(parent).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            continue;
          } // if this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support


          if ('ontouchstart' in document.documentElement) {
            $('body').children().off('mouseover', null, $.noop);
          }

          toggles[i].setAttribute('aria-expanded', 'false');
          $(dropdownMenu).removeClass(ClassName.SHOW);
          $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
        }
      };

      Dropdown._getParentFromElement = function _getParentFromElement(element) {
        var parent;
        var selector = Util.getSelectorFromElement(element);

        if (selector) {
          parent = $(selector)[0];
        }

        return parent || element.parentNode;
      };

      Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
        if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
          return;
        }

        var parent = Dropdown._getParentFromElement(this);

        var isActive = $(parent).hasClass(ClassName.SHOW);

        if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
          if (event.which === ESCAPE_KEYCODE) {
            var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
            $(toggle).trigger('focus');
          }

          $(this).trigger('click');
          return;
        }

        var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

        if (!items.length) {
          return;
        }

        var index = items.indexOf(event.target);

        if (event.which === ARROW_UP_KEYCODE && index > 0) {
          // up
          index--;
        }

        if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
          // down
          index++;
        }

        if (index < 0) {
          index = 0;
        }

        items[index].focus();
      };

      createClass(Dropdown, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Dropdown;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Dropdown._jQueryInterface;
    $.fn[NAME].Constructor = Dropdown;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }($, Popper);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Modal = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'modal';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 300;
    var BACKDROP_TRANSITION_DURATION = 150;
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Modal =
    /*#__PURE__*/
    function () {
      function Modal(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        this._dialog = $(element).find(Selector.DIALOG)[0];
        this._backdrop = null;
        this._isShown = false;
        this._isBodyOverflowing = false;
        this._ignoreBackdropClick = false;
        this._originalBodyPadding = 0;
        this._scrollbarWidth = 0;
      } // getters


      var _proto = Modal.prototype; // public

      _proto.toggle = function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      };

      _proto.show = function show(relatedTarget) {
        var _this = this;

        if (this._isTransitioning || this._isShown) {
          return;
        }

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          this._isTransitioning = true;
        }

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: relatedTarget
        });
        $(this._element).trigger(showEvent);

        if (this._isShown || showEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = true;

        this._checkScrollbar();

        this._setScrollbar();

        this._adjustDialog();

        $(document.body).addClass(ClassName.OPEN);

        this._setEscapeEvent();

        this._setResizeEvent();

        $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
          return _this.hide(event);
        });
        $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
          $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
            if ($(event.target).is(_this._element)) {
              _this._ignoreBackdropClick = true;
            }
          });
        });

        this._showBackdrop(function () {
          return _this._showElement(relatedTarget);
        });
      };

      _proto.hide = function hide(event) {
        var _this2 = this;

        if (event) {
          event.preventDefault();
        }

        if (this._isTransitioning || !this._isShown) {
          return;
        }

        var hideEvent = $.Event(Event.HIDE);
        $(this._element).trigger(hideEvent);

        if (!this._isShown || hideEvent.isDefaultPrevented()) {
          return;
        }

        this._isShown = false;
        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (transition) {
          this._isTransitioning = true;
        }

        this._setEscapeEvent();

        this._setResizeEvent();

        $(document).off(Event.FOCUSIN);
        $(this._element).removeClass(ClassName.SHOW);
        $(this._element).off(Event.CLICK_DISMISS);
        $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

        if (transition) {
          $(this._element).one(Util.TRANSITION_END, function (event) {
            return _this2._hideModal(event);
          }).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          this._hideModal();
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(window, document, this._element, this._backdrop).off(EVENT_KEY);
        this._config = null;
        this._element = null;
        this._dialog = null;
        this._backdrop = null;
        this._isShown = null;
        this._isBodyOverflowing = null;
        this._ignoreBackdropClick = null;
        this._scrollbarWidth = null;
      };

      _proto.handleUpdate = function handleUpdate() {
        this._adjustDialog();
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._showElement = function _showElement(relatedTarget) {
        var _this3 = this;

        var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
          // don't move modals dom position
          document.body.appendChild(this._element);
        }

        this._element.style.display = 'block';

        this._element.removeAttribute('aria-hidden');

        this._element.scrollTop = 0;

        if (transition) {
          Util.reflow(this._element);
        }

        $(this._element).addClass(ClassName.SHOW);

        if (this._config.focus) {
          this._enforceFocus();
        }

        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: relatedTarget
        });

        var transitionComplete = function transitionComplete() {
          if (_this3._config.focus) {
            _this3._element.focus();
          }

          _this3._isTransitioning = false;
          $(_this3._element).trigger(shownEvent);
        };

        if (transition) {
          $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          transitionComplete();
        }
      };

      _proto._enforceFocus = function _enforceFocus() {
        var _this4 = this;

        $(document).off(Event.FOCUSIN) // guard against infinite focus loop
        .on(Event.FOCUSIN, function (event) {
          if (document !== event.target && _this4._element !== event.target && !$(_this4._element).has(event.target).length) {
            _this4._element.focus();
          }
        });
      };

      _proto._setEscapeEvent = function _setEscapeEvent() {
        var _this5 = this;

        if (this._isShown && this._config.keyboard) {
          $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
            if (event.which === ESCAPE_KEYCODE) {
              event.preventDefault();

              _this5.hide();
            }
          });
        } else if (!this._isShown) {
          $(this._element).off(Event.KEYDOWN_DISMISS);
        }
      };

      _proto._setResizeEvent = function _setResizeEvent() {
        var _this6 = this;

        if (this._isShown) {
          $(window).on(Event.RESIZE, function (event) {
            return _this6.handleUpdate(event);
          });
        } else {
          $(window).off(Event.RESIZE);
        }
      };

      _proto._hideModal = function _hideModal() {
        var _this7 = this;

        this._element.style.display = 'none';

        this._element.setAttribute('aria-hidden', true);

        this._isTransitioning = false;

        this._showBackdrop(function () {
          $(document.body).removeClass(ClassName.OPEN);

          _this7._resetAdjustments();

          _this7._resetScrollbar();

          $(_this7._element).trigger(Event.HIDDEN);
        });
      };

      _proto._removeBackdrop = function _removeBackdrop() {
        if (this._backdrop) {
          $(this._backdrop).remove();
          this._backdrop = null;
        }
      };

      _proto._showBackdrop = function _showBackdrop(callback) {
        var _this8 = this;

        var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

        if (this._isShown && this._config.backdrop) {
          var doAnimate = Util.supportsTransitionEnd() && animate;
          this._backdrop = document.createElement('div');
          this._backdrop.className = ClassName.BACKDROP;

          if (animate) {
            $(this._backdrop).addClass(animate);
          }

          $(this._backdrop).appendTo(document.body);
          $(this._element).on(Event.CLICK_DISMISS, function (event) {
            if (_this8._ignoreBackdropClick) {
              _this8._ignoreBackdropClick = false;
              return;
            }

            if (event.target !== event.currentTarget) {
              return;
            }

            if (_this8._config.backdrop === 'static') {
              _this8._element.focus();
            } else {
              _this8.hide();
            }
          });

          if (doAnimate) {
            Util.reflow(this._backdrop);
          }

          $(this._backdrop).addClass(ClassName.SHOW);

          if (!callback) {
            return;
          }

          if (!doAnimate) {
            callback();
            return;
          }

          $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else if (!this._isShown && this._backdrop) {
          $(this._backdrop).removeClass(ClassName.SHOW);

          var callbackRemove = function callbackRemove() {
            _this8._removeBackdrop();

            if (callback) {
              callback();
            }
          };

          if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
            $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
          } else {
            callbackRemove();
          }
        } else if (callback) {
          callback();
        }
      }; // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // todo (fat): these should probably be refactored out of modal.js
      // ----------------------------------------------------------------------


      _proto._adjustDialog = function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!this._isBodyOverflowing && isModalOverflowing) {
          this._element.style.paddingLeft = this._scrollbarWidth + "px";
        }

        if (this._isBodyOverflowing && !isModalOverflowing) {
          this._element.style.paddingRight = this._scrollbarWidth + "px";
        }
      };

      _proto._resetAdjustments = function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      };

      _proto._checkScrollbar = function _checkScrollbar() {
        var rect = document.body.getBoundingClientRect();
        this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this._scrollbarWidth = this._getScrollbarWidth();
      };

      _proto._setScrollbar = function _setScrollbar() {
        var _this9 = this;

        if (this._isBodyOverflowing) {
          // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
          //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
          // Adjust fixed content padding
          $(Selector.FIXED_CONTENT).each(function (index, element) {
            var actualPadding = $(element)[0].style.paddingRight;
            var calculatedPadding = $(element).css('padding-right');
            $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
          }); // Adjust sticky content margin

          $(Selector.STICKY_CONTENT).each(function (index, element) {
            var actualMargin = $(element)[0].style.marginRight;
            var calculatedMargin = $(element).css('margin-right');
            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
          }); // Adjust navbar-toggler margin

          $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
            var actualMargin = $(element)[0].style.marginRight;
            var calculatedMargin = $(element).css('margin-right');
            $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
          }); // Adjust body padding

          var actualPadding = document.body.style.paddingRight;
          var calculatedPadding = $('body').css('padding-right');
          $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
        }
      };

      _proto._resetScrollbar = function _resetScrollbar() {
        // Restore fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var padding = $(element).data('padding-right');

          if (typeof padding !== 'undefined') {
            $(element).css('padding-right', padding).removeData('padding-right');
          }
        }); // Restore sticky content and navbar-toggler margin

        $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var margin = $(element).data('margin-right');

          if (typeof margin !== 'undefined') {
            $(element).css('margin-right', margin).removeData('margin-right');
          }
        }); // Restore body padding

        var padding = $('body').data('padding-right');

        if (typeof padding !== 'undefined') {
          $('body').css('padding-right', padding).removeData('padding-right');
        }
      };

      _proto._getScrollbarWidth = function _getScrollbarWidth() {
        // thx d.walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      }; // static


      Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = $.extend({}, Modal.Default, $(this).data(), _typeof(config) === 'object' && config);

          if (!data) {
            data = new Modal(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config](relatedTarget);
          } else if (_config.show) {
            data.show(relatedTarget);
          }
        });
      };

      createClass(Modal, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return Modal;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $(selector)[0];
      }

      var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call($(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Modal._jQueryInterface;
    $.fn[NAME].Constructor = Modal;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Tooltip = function () {
    /**
     * Check for Popper dependency
     * Popper - https://popper.js.org
     */
    if (typeof Popper === 'undefined') {
      throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
    }
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */


    var NAME = 'tooltip';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tooltip =
    /*#__PURE__*/
    function () {
      function Tooltip(element, config) {
        // private
        this._isEnabled = true;
        this._timeout = 0;
        this._hoverState = '';
        this._activeTrigger = {};
        this._popper = null; // protected

        this.element = element;
        this.config = this._getConfig(config);
        this.tip = null;

        this._setListeners();
      } // getters


      var _proto = Tooltip.prototype; // public

      _proto.enable = function enable() {
        this._isEnabled = true;
      };

      _proto.disable = function disable() {
        this._isEnabled = false;
      };

      _proto.toggleEnabled = function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      };

      _proto.toggle = function toggle(event) {
        if (!this._isEnabled) {
          return;
        }

        if (event) {
          var dataKey = this.constructor.DATA_KEY;
          var context = $(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $(event.currentTarget).data(dataKey, context);
          }

          context._activeTrigger.click = !context._activeTrigger.click;

          if (context._isWithActiveTrigger()) {
            context._enter(null, context);
          } else {
            context._leave(null, context);
          }
        } else {
          if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
            this._leave(null, this);

            return;
          }

          this._enter(null, this);
        }
      };

      _proto.dispose = function dispose() {
        clearTimeout(this._timeout);
        $.removeData(this.element, this.constructor.DATA_KEY);
        $(this.element).off(this.constructor.EVENT_KEY);
        $(this.element).closest('.modal').off('hide.bs.modal');

        if (this.tip) {
          $(this.tip).remove();
        }

        this._isEnabled = null;
        this._timeout = null;
        this._hoverState = null;
        this._activeTrigger = null;

        if (this._popper !== null) {
          this._popper.destroy();
        }

        this._popper = null;
        this.element = null;
        this.config = null;
        this.tip = null;
      };

      _proto.show = function show() {
        var _this = this;

        if ($(this.element).css('display') === 'none') {
          throw new Error('Please use show on visible elements');
        }

        var showEvent = $.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          $(this.element).trigger(showEvent);
          var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

          if (showEvent.isDefaultPrevented() || !isInTheDom) {
            return;
          }

          var tip = this.getTipElement();
          var tipId = Util.getUID(this.constructor.NAME);
          tip.setAttribute('id', tipId);
          this.element.setAttribute('aria-describedby', tipId);
          this.setContent();

          if (this.config.animation) {
            $(tip).addClass(ClassName.FADE);
          }

          var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

          var attachment = this._getAttachment(placement);

          this.addAttachmentClass(attachment);
          var container = this.config.container === false ? document.body : $(this.config.container);
          $(tip).data(this.constructor.DATA_KEY, this);

          if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
            $(tip).appendTo(container);
          }

          $(this.element).trigger(this.constructor.Event.INSERTED);
          this._popper = new Popper(this.element, tip, {
            placement: attachment,
            modifiers: {
              offset: {
                offset: this.config.offset
              },
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: Selector.ARROW
              }
            },
            onCreate: function onCreate(data) {
              if (data.originalPlacement !== data.placement) {
                _this._handlePopperPlacementChange(data);
              }
            },
            onUpdate: function onUpdate(data) {
              _this._handlePopperPlacementChange(data);
            }
          });
          $(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

          if ('ontouchstart' in document.documentElement) {
            $('body').children().on('mouseover', null, $.noop);
          }

          var complete = function complete() {
            if (_this.config.animation) {
              _this._fixTransition();
            }

            var prevHoverState = _this._hoverState;
            _this._hoverState = null;
            $(_this.element).trigger(_this.constructor.Event.SHOWN);

            if (prevHoverState === HoverState.OUT) {
              _this._leave(null, _this);
            }
          };

          if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
            $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
          } else {
            complete();
          }
        }
      };

      _proto.hide = function hide(callback) {
        var _this2 = this;

        var tip = this.getTipElement();
        var hideEvent = $.Event(this.constructor.Event.HIDE);

        var complete = function complete() {
          if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
            tip.parentNode.removeChild(tip);
          }

          _this2._cleanTipClass();

          _this2.element.removeAttribute('aria-describedby');

          $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

          if (_this2._popper !== null) {
            _this2._popper.destroy();
          }

          if (callback) {
            callback();
          }
        };

        $(this.element).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          return;
        }

        $(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        this._activeTrigger[Trigger.CLICK] = false;
        this._activeTrigger[Trigger.FOCUS] = false;
        this._activeTrigger[Trigger.HOVER] = false;

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        this._hoverState = '';
      };

      _proto.update = function update() {
        if (this._popper !== null) {
          this._popper.scheduleUpdate();
        }
      }; // protected


      _proto.isWithContent = function isWithContent() {
        return Boolean(this.getTitle());
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $(this.getTipElement());
        this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      };

      _proto.setElementContent = function setElementContent($element, content) {
        var html = this.config.html;

        if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
          // content is a DOM node or a jQuery
          if (html) {
            if (!$(content).parent().is($element)) {
              $element.empty().append(content);
            }
          } else {
            $element.text($(content).text());
          }
        } else {
          $element[html ? 'html' : 'text'](content);
        }
      };

      _proto.getTitle = function getTitle() {
        var title = this.element.getAttribute('data-original-title');

        if (!title) {
          title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
        }

        return title;
      }; // private


      _proto._getAttachment = function _getAttachment(placement) {
        return AttachmentMap[placement.toUpperCase()];
      };

      _proto._setListeners = function _setListeners() {
        var _this3 = this;

        var triggers = this.config.trigger.split(' ');
        triggers.forEach(function (trigger) {
          if (trigger === 'click') {
            $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
              return _this3.toggle(event);
            });
          } else if (trigger !== Trigger.MANUAL) {
            var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
            var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
            $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
              return _this3._enter(event);
            }).on(eventOut, _this3.config.selector, function (event) {
              return _this3._leave(event);
            });
          }

          $(_this3.element).closest('.modal').on('hide.bs.modal', function () {
            return _this3.hide();
          });
        });

        if (this.config.selector) {
          this.config = $.extend({}, this.config, {
            trigger: 'manual',
            selector: ''
          });
        } else {
          this._fixTitle();
        }
      };

      _proto._fixTitle = function _fixTitle() {
        var titleType = _typeof(this.element.getAttribute('data-original-title'));

        if (this.element.getAttribute('title') || titleType !== 'string') {
          this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
          this.element.setAttribute('title', '');
        }
      };

      _proto._enter = function _enter(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
        }

        if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
          context._hoverState = HoverState.SHOW;
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.SHOW;

        if (!context.config.delay || !context.config.delay.show) {
          context.show();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.SHOW) {
            context.show();
          }
        }, context.config.delay.show);
      };

      _proto._leave = function _leave(event, context) {
        var dataKey = this.constructor.DATA_KEY;
        context = context || $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        if (event) {
          context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
        }

        if (context._isWithActiveTrigger()) {
          return;
        }

        clearTimeout(context._timeout);
        context._hoverState = HoverState.OUT;

        if (!context.config.delay || !context.config.delay.hide) {
          context.hide();
          return;
        }

        context._timeout = setTimeout(function () {
          if (context._hoverState === HoverState.OUT) {
            context.hide();
          }
        }, context.config.delay.hide);
      };

      _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
        for (var trigger in this._activeTrigger) {
          if (this._activeTrigger[trigger]) {
            return true;
          }
        }

        return false;
      };

      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }

        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }

        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }

        Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
        return config;
      };

      _proto._getDelegateConfig = function _getDelegateConfig() {
        var config = {};

        if (this.config) {
          for (var key in this.config) {
            if (this.constructor.Default[key] !== this.config[key]) {
              config[key] = this.config[key];
            }
          }
        }

        return config;
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      };

      _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
        this._cleanTipClass();

        this.addAttachmentClass(this._getAttachment(data.placement));
      };

      _proto._fixTransition = function _fixTransition() {
        var tip = this.getTipElement();
        var initConfigAnimation = this.config.animation;

        if (tip.getAttribute('x-placement') !== null) {
          return;
        }

        $(tip).removeClass(ClassName.FADE);
        this.config.animation = false;
        this.hide();
        this.show();
        this.config.animation = initConfigAnimation;
      }; // static


      Tooltip._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _typeof(config) === 'object' && config;

          if (!data && /dispose|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Tooltip(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Tooltip, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Tooltip;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = Tooltip._jQueryInterface;
    $.fn[NAME].Constructor = Tooltip;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };

    return Tooltip;
  }($, Popper);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Popover = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'popover';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var Default = $.extend({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });
    var DefaultType = $.extend({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Popover =
    /*#__PURE__*/
    function (_Tooltip) {
      inheritsLoose(Popover, _Tooltip);

      function Popover() {
        return _Tooltip.apply(this, arguments) || this;
      }

      var _proto = Popover.prototype; // overrides

      _proto.isWithContent = function isWithContent() {
        return this.getTitle() || this._getContent();
      };

      _proto.addAttachmentClass = function addAttachmentClass(attachment) {
        $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
      };

      _proto.getTipElement = function getTipElement() {
        this.tip = this.tip || $(this.config.template)[0];
        return this.tip;
      };

      _proto.setContent = function setContent() {
        var $tip = $(this.getTipElement()); // we use append for html objects to maintain js events

        this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
        this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
        $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
      }; // private


      _proto._getContent = function _getContent() {
        return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
      };

      _proto._cleanTipClass = function _cleanTipClass() {
        var $tip = $(this.getTipElement());
        var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

        if (tabClass !== null && tabClass.length > 0) {
          $tip.removeClass(tabClass.join(''));
        }
      }; // static


      Popover._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _typeof(config) === 'object' ? config : null;

          if (!data && /destroy|hide/.test(config)) {
            return;
          }

          if (!data) {
            data = new Popover(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Popover, null, [{
        key: "VERSION",
        // getters
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }, {
        key: "NAME",
        get: function get() {
          return NAME;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return DATA_KEY;
        }
      }, {
        key: "Event",
        get: function get() {
          return Event;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return EVENT_KEY;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return DefaultType;
        }
      }]);
      return Popover;
    }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = Popover._jQueryInterface;
    $.fn[NAME].Constructor = Popover;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };

    return Popover;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var ScrollSpy = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollspy';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollSpy =
    /*#__PURE__*/
    function () {
      function ScrollSpy(element, config) {
        var _this = this;

        this._element = element;
        this._scrollElement = element.tagName === 'BODY' ? window : element;
        this._config = this._getConfig(config);
        this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        $(this._scrollElement).on(Event.SCROLL, function (event) {
          return _this._process(event);
        });
        this.refresh();

        this._process();
      } // getters


      var _proto = ScrollSpy.prototype; // public

      _proto.refresh = function refresh() {
        var _this2 = this;

        var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
        var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
        var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
        this._offsets = [];
        this._targets = [];
        this._scrollHeight = this._getScrollHeight();
        var targets = $.makeArray($(this._selector));
        targets.map(function (element) {
          var target;
          var targetSelector = Util.getSelectorFromElement(element);

          if (targetSelector) {
            target = $(targetSelector)[0];
          }

          if (target) {
            var targetBCR = target.getBoundingClientRect();

            if (targetBCR.width || targetBCR.height) {
              // todo (fat): remove sketch reliance on jQuery position/offset
              return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
            }
          }

          return null;
        }).filter(function (item) {
          return item;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).forEach(function (item) {
          _this2._offsets.push(item[0]);

          _this2._targets.push(item[1]);
        });
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        $(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
        this._config = null;
        this._selector = null;
        this._offsets = null;
        this._targets = null;
        this._activeTarget = null;
        this._scrollHeight = null;
      }; // private


      _proto._getConfig = function _getConfig(config) {
        config = $.extend({}, Default, config);

        if (typeof config.target !== 'string') {
          var id = $(config.target).attr('id');

          if (!id) {
            id = Util.getUID(NAME);
            $(config.target).attr('id', id);
          }

          config.target = "#" + id;
        }

        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      };

      _proto._getScrollTop = function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      };

      _proto._getScrollHeight = function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      };

      _proto._getOffsetHeight = function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      };

      _proto._process = function _process() {
        var scrollTop = this._getScrollTop() + this._config.offset;

        var scrollHeight = this._getScrollHeight();

        var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

        if (this._scrollHeight !== scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          var target = this._targets[this._targets.length - 1];

          if (this._activeTarget !== target) {
            this._activate(target);
          }

          return;
        }

        if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
          this._activeTarget = null;

          this._clear();

          return;
        }

        for (var i = this._offsets.length; i--;) {
          var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

          if (isActiveTarget) {
            this._activate(this._targets[i]);
          }
        }
      };

      _proto._activate = function _activate(target) {
        this._activeTarget = target;

        this._clear();

        var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


        queries = queries.map(function (selector) {
          return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
        });
        var $link = $(queries.join(','));

        if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
          $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          $link.addClass(ClassName.ACTIVE);
        } else {
          // Set triggered link as active
          $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

          $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
        }

        $(this._scrollElement).trigger(Event.ACTIVATE, {
          relatedTarget: target
        });
      };

      _proto._clear = function _clear() {
        $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      }; // static


      ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = _typeof(config) === 'object' && config;

          if (!data) {
            data = new ScrollSpy(this, _config);
            $(this).data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(ScrollSpy, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);
      return ScrollSpy;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = $.makeArray($(Selector.DATA_SPY));

      for (var i = scrollSpys.length; i--;) {
        var $spy = $(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = ScrollSpy._jQueryInterface;
    $.fn[NAME].Constructor = ScrollSpy;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };

    return ScrollSpy;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-beta.2): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var Tab = function () {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.0.0-beta.2';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 150;
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;
      } // getters


      var _proto = Tab.prototype; // public

      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $.makeArray($(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $(previous).trigger(hideEvent);
        }

        $(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $(selector)[0];
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $(previous).trigger(hiddenEvent);
          $(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, isTransitioning, callback);
        };

        if (active && isTransitioning) {
          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        if (active) {
          $(active).removeClass(ClassName.SHOW);
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
        if (active) {
          $(active).removeClass(ClassName.ACTIVE);
          var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        }

        if (isTransitioning) {
          Util.reflow(element);
          $(element).addClass(ClassName.SHOW);
        } else {
          $(element).removeClass(ClassName.FADE);
        }

        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // static


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
            $this.data(DATA_KEY, data);
          }

          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new Error("No method named \"" + config + "\"");
            }

            data[config]();
          }
        });
      };

      createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);
      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Tab._jQueryInterface;
    $.fn[NAME].Constructor = Tab;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0-alpha.6): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  (function () {
    if (typeof $ === 'undefined') {
      throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Tooltip = Tooltip;
  return exports;
}({}, $);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[["./assets/js/bootstrap.bundle.js","runtime","vendors~app~bootstrap.bundle"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYm9vdHN0cmFwLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImJvb3RzdHJhcCIsImV4cG9ydHMiLCIkIiwiaGFzT3duUHJvcGVydHkiLCJVdGlsIiwidHJhbnNpdGlvbiIsIk1BWF9VSUQiLCJUcmFuc2l0aW9uRW5kRXZlbnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidG9UeXBlIiwib2JqIiwidG9TdHJpbmciLCJjYWxsIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQiLCJiaW5kVHlwZSIsImVuZCIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsImV2ZW50IiwidGFyZ2V0IiwiaXMiLCJoYW5kbGVPYmoiLCJoYW5kbGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0cmFuc2l0aW9uRW5kVGVzdCIsIndpbmRvdyIsIlFVbml0IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwic3R5bGUiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsIl90aGlzIiwiY2FsbGVkIiwib25lIiwiVFJBTlNJVElPTl9FTkQiLCJzZXRUaW1lb3V0IiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCIsImZuIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJzcGVjaWFsIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsIiRzZWxlY3RvciIsImZpbmQiLCJsZW5ndGgiLCJlcnJvciIsInJlZmxvdyIsIm9mZnNldEhlaWdodCIsInRyaWdnZXIiLCJCb29sZWFuIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImkiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImNyZWF0ZUNsYXNzIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9fcHJvdG9fXyIsImluaGVyaXRzTG9vc2UiLCJBbGVydCIsIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiU2VsZWN0b3IiLCJESVNNSVNTIiwiRXZlbnQiLCJDTE9TRSIsIkNMT1NFRCIsIkNMSUNLX0RBVEFfQVBJIiwiQ2xhc3NOYW1lIiwiQUxFUlQiLCJGQURFIiwiU0hPVyIsIl9lbGVtZW50IiwiX3Byb3RvIiwiY2xvc2UiLCJyb290RWxlbWVudCIsIl9nZXRSb290RWxlbWVudCIsImN1c3RvbUV2ZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX3JlbW92ZUVsZW1lbnQiLCJkaXNwb3NlIiwicmVtb3ZlRGF0YSIsInBhcmVudCIsImNsb3Nlc3QiLCJjbG9zZUV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsIl9kZXN0cm95RWxlbWVudCIsImRldGFjaCIsInJlbW92ZSIsIl9qUXVlcnlJbnRlcmZhY2UiLCJlYWNoIiwiJGVsZW1lbnQiLCJkYXRhIiwiX2hhbmRsZURpc21pc3MiLCJhbGVydEluc3RhbmNlIiwicHJldmVudERlZmF1bHQiLCJnZXQiLCJvbiIsIm5vQ29uZmxpY3QiLCJCdXR0b24iLCJBQ1RJVkUiLCJCVVRUT04iLCJGT0NVUyIsIkRBVEFfVE9HR0xFX0NBUlJPVCIsIkRBVEFfVE9HR0xFIiwiSU5QVVQiLCJGT0NVU19CTFVSX0RBVEFfQVBJIiwidG9nZ2xlIiwidHJpZ2dlckNoYW5nZUV2ZW50IiwiYWRkQXJpYVByZXNzZWQiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwiYWN0aXZlRWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm9jdXMiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImJ1dHRvbiIsIkNhcm91c2VsIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwiRGVmYXVsdFR5cGUiLCJEaXJlY3Rpb24iLCJORVhUIiwiUFJFViIsIkxFRlQiLCJSSUdIVCIsIlNMSURFIiwiU0xJRCIsIktFWURPV04iLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlRPVUNIRU5EIiwiTE9BRF9EQVRBX0FQSSIsIkNBUk9VU0VMIiwiSVRFTSIsIkFDVElWRV9JVEVNIiwiTkVYVF9QUkVWIiwiSU5ESUNBVE9SUyIsIkRBVEFfU0xJREUiLCJEQVRBX1JJREUiLCJfaXRlbXMiLCJfaW50ZXJ2YWwiLCJfYWN0aXZlRWxlbWVudCIsIl9pc1BhdXNlZCIsIl9pc1NsaWRpbmciLCJ0b3VjaFRpbWVvdXQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIl9hZGRFdmVudExpc3RlbmVycyIsIm5leHQiLCJfc2xpZGUiLCJuZXh0V2hlblZpc2libGUiLCJoaWRkZW4iLCJjc3MiLCJwcmV2IiwiY3ljbGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aXNpYmlsaXR5U3RhdGUiLCJiaW5kIiwidG8iLCJpbmRleCIsImFjdGl2ZUluZGV4IiwiX2dldEl0ZW1JbmRleCIsImRpcmVjdGlvbiIsIm9mZiIsImV4dGVuZCIsIl90aGlzMiIsIl9rZXlkb3duIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xlYXJUaW1lb3V0IiwidGFnTmFtZSIsIndoaWNoIiwibWFrZUFycmF5IiwiaW5kZXhPZiIsIl9nZXRJdGVtQnlEaXJlY3Rpb24iLCJpc05leHREaXJlY3Rpb24iLCJpc1ByZXZEaXJlY3Rpb24iLCJsYXN0SXRlbUluZGV4IiwiaXNHb2luZ1RvV3JhcCIsImRlbHRhIiwiaXRlbUluZGV4IiwiX3RyaWdnZXJTbGlkZUV2ZW50IiwicmVsYXRlZFRhcmdldCIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4Iiwic2xpZGVFdmVudCIsImZyb20iLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsIm5leHRJbmRpY2F0b3IiLCJjaGlsZHJlbiIsImFkZENsYXNzIiwiX3RoaXMzIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsInNsaWRFdmVudCIsImFjdGlvbiIsIl9kYXRhQXBpQ2xpY2tIYW5kbGVyIiwic2xpZGVJbmRleCIsIiRjYXJvdXNlbCIsIkNvbGxhcHNlIiwiU0hPV04iLCJISURFIiwiSElEREVOIiwiQ09MTEFQU0UiLCJDT0xMQVBTSU5HIiwiQ09MTEFQU0VEIiwiRGltZW5zaW9uIiwiV0lEVEgiLCJIRUlHSFQiLCJBQ1RJVkVTIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRhYlRvZ2dsZXMiLCJlbGVtIiwiZmlsdGVyIiwicHVzaCIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhpZGUiLCJzaG93IiwiYWN0aXZlcyIsImFjdGl2ZXNEYXRhIiwic3RhcnRFdmVudCIsImRpbWVuc2lvbiIsIl9nZXREaW1lbnNpb24iLCJhdHRyIiwic2V0VHJhbnNpdGlvbmluZyIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzbGljZSIsInNjcm9sbFNpemUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCIkZWxlbSIsImlzVHJhbnNpdGlvbmluZyIsImhhc1dpZHRoIiwianF1ZXJ5IiwiX2dldFRhcmdldEZyb21FbGVtZW50IiwidHJpZ2dlckFycmF5IiwiaXNPcGVuIiwiJHRoaXMiLCJjdXJyZW50VGFyZ2V0IiwiJHRyaWdnZXIiLCIkdGFyZ2V0IiwibmF0aXZlSGludHMiLCJpc05hdGl2ZSIsInNvbWUiLCJoaW50IiwiaXNCcm93c2VyIiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwidGltZW91dER1cmF0aW9uIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWljcm90YXNrRGVib3VuY2UiLCJzY2hlZHVsZWQiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsInRhc2tEZWJvdW5jZSIsInN1cHBvcnRzTmF0aXZlTXV0YXRpb25PYnNlcnZlciIsImRlYm91bmNlIiwiaXNGdW5jdGlvbiIsImZ1bmN0aW9uVG9DaGVjayIsImdldFR5cGUiLCJnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UGFyZW50Tm9kZSIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImhvc3QiLCJnZXRTY3JvbGxQYXJlbnQiLCJib2R5IiwiX2dldFN0eWxlQ29tcHV0ZWRQcm9wIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRPZmZzZXRQYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJpc09mZnNldENvbnRhaW5lciIsImZpcnN0RWxlbWVudENoaWxkIiwiZ2V0Um9vdCIsIm5vZGUiLCJmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IiwiZWxlbWVudDEiLCJlbGVtZW50MiIsIm9yZGVyIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJOb2RlIiwiRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HIiwic3RhcnQiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImVsZW1lbnQxcm9vdCIsImdldFNjcm9sbCIsInNpZGUiLCJ1cHBlclNpZGUiLCJodG1sIiwic2Nyb2xsaW5nRWxlbWVudCIsImluY2x1ZGVTY3JvbGwiLCJyZWN0Iiwic3VidHJhY3QiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJnZXRCb3JkZXJzU2l6ZSIsInN0eWxlcyIsImF4aXMiLCJzaWRlQSIsInNpZGVCIiwic3BsaXQiLCJpc0lFMTAiLCJpc0lFMTAkMSIsImFwcFZlcnNpb24iLCJnZXRTaXplIiwiY29tcHV0ZWRTdHlsZSIsIm1heCIsImdldFdpbmRvd1NpemVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwiY3JlYXRlQ2xhc3MkMSIsImRlZmluZVByb3BlcnRpZXMiLCJfZXh0ZW5kcyQxIiwiYXNzaWduIiwic291cmNlIiwiZ2V0Q2xpZW50UmVjdCIsIm9mZnNldHMiLCJlcnIiLCJyZXN1bHQiLCJzaXplcyIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaG9yaXpTY3JvbGxiYXIiLCJvZmZzZXRXaWR0aCIsInZlcnRTY3JvbGxiYXIiLCJnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUiLCJpc0hUTUwiLCJjaGlsZHJlblJlY3QiLCJwYXJlbnRSZWN0Iiwic2Nyb2xsUGFyZW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIiwicmVsYXRpdmVPZmZzZXQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXQiLCJpc0ZpeGVkIiwiZ2V0Qm91bmRhcmllcyIsInBvcHBlciIsInJlZmVyZW5jZSIsInBhZGRpbmciLCJib3VuZGFyaWVzRWxlbWVudCIsImJvdW5kYXJpZXMiLCJib3VuZGFyaWVzTm9kZSIsIl9nZXRXaW5kb3dTaXplcyIsImdldEFyZWEiLCJfcmVmIiwiY29tcHV0ZUF1dG9QbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJyZWZSZWN0IiwicmVjdHMiLCJzb3J0ZWRBcmVhcyIsImtleXMiLCJtYXAiLCJhcmVhIiwic29ydCIsImEiLCJiIiwiZmlsdGVyZWRBcmVhcyIsIl9yZWYyIiwiY29tcHV0ZWRQbGFjZW1lbnQiLCJ2YXJpYXRpb24iLCJnZXRSZWZlcmVuY2VPZmZzZXRzIiwic3RhdGUiLCJjb21tb25PZmZzZXRQYXJlbnQiLCJnZXRPdXRlclNpemVzIiwieCIsInBhcnNlRmxvYXQiLCJtYXJnaW5Cb3R0b20iLCJ5IiwibWFyZ2luUmlnaHQiLCJnZXRPcHBvc2l0ZVBsYWNlbWVudCIsImhhc2giLCJyZXBsYWNlIiwibWF0Y2hlZCIsImdldFBvcHBlck9mZnNldHMiLCJyZWZlcmVuY2VPZmZzZXRzIiwicG9wcGVyUmVjdCIsInBvcHBlck9mZnNldHMiLCJpc0hvcml6IiwibWFpblNpZGUiLCJzZWNvbmRhcnlTaWRlIiwibWVhc3VyZW1lbnQiLCJzZWNvbmRhcnlNZWFzdXJlbWVudCIsImFyciIsImNoZWNrIiwiQXJyYXkiLCJmaW5kSW5kZXgiLCJwcm9wIiwiY3VyIiwicnVuTW9kaWZpZXJzIiwibW9kaWZpZXJzIiwiZW5kcyIsIm1vZGlmaWVyc1RvUnVuIiwiZm9yRWFjaCIsImZ1bmN0aW9uIiwiY29uc29sZSIsIndhcm4iLCJlbmFibGVkIiwidXBkYXRlIiwiaXNEZXN0cm95ZWQiLCJhcnJvd1N0eWxlcyIsImZsaXBwZWQiLCJvcHRpb25zIiwiZmxpcCIsIm9yaWdpbmFsUGxhY2VtZW50IiwicG9zaXRpb24iLCJpc0NyZWF0ZWQiLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiaXNNb2RpZmllckVuYWJsZWQiLCJtb2RpZmllck5hbWUiLCJnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsImNoYXJBdCIsInRvQ2hlY2siLCJkZXN0cm95IiwicmVtb3ZlQXR0cmlidXRlIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlT25EZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJhdHRhY2hUb1Njcm9sbFBhcmVudHMiLCJjYWxsYmFjayIsInNjcm9sbFBhcmVudHMiLCJpc0JvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJ1cGRhdGVCb3VuZCIsInNjcm9sbEVsZW1lbnQiLCJldmVudHNFbmFibGVkIiwiZW5hYmxlRXZlbnRMaXN0ZW5lcnMiLCJzY2hlZHVsZVVwZGF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXNOdW1lcmljIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJzZXRTdHlsZXMiLCJ1bml0Iiwic2V0QXR0cmlidXRlcyIsImFwcGx5U3R5bGUiLCJhcnJvd0VsZW1lbnQiLCJhcHBseVN0eWxlT25Mb2FkIiwibW9kaWZpZXJPcHRpb25zIiwiY29tcHV0ZVN0eWxlIiwibGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uIiwiZ3B1QWNjZWxlcmF0aW9uIiwib2Zmc2V0UGFyZW50UmVjdCIsImZsb29yIiwicHJlZml4ZWRQcm9wZXJ0eSIsIndpbGxDaGFuZ2UiLCJpbnZlcnRUb3AiLCJpbnZlcnRMZWZ0IiwiYXJyb3ciLCJpc01vZGlmaWVyUmVxdWlyZWQiLCJyZXF1ZXN0aW5nTmFtZSIsInJlcXVlc3RlZE5hbWUiLCJyZXF1ZXN0aW5nIiwiaXNSZXF1aXJlZCIsIl9yZXF1ZXN0aW5nIiwicmVxdWVzdGVkIiwicXVlcnlTZWxlY3RvciIsIl9kYXRhJG9mZnNldHMiLCJpc1ZlcnRpY2FsIiwibGVuIiwic2lkZUNhcGl0YWxpemVkIiwiYWx0U2lkZSIsIm9wU2lkZSIsImFycm93RWxlbWVudFNpemUiLCJjZW50ZXIiLCJwb3BwZXJNYXJnaW5TaWRlIiwic2lkZVZhbHVlIiwibWluIiwicm91bmQiLCJnZXRPcHBvc2l0ZVZhcmlhdGlvbiIsInBsYWNlbWVudHMiLCJ2YWxpZFBsYWNlbWVudHMiLCJjbG9ja3dpc2UiLCJjb3VudGVyIiwiY29uY2F0IiwicmV2ZXJzZSIsIkJFSEFWSU9SUyIsIkZMSVAiLCJDTE9DS1dJU0UiLCJDT1VOVEVSQ0xPQ0tXSVNFIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJiZWhhdmlvciIsInN0ZXAiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbiIsImZsaXBWYXJpYXRpb25zIiwia2VlcFRvZ2V0aGVyIiwidG9WYWx1ZSIsInN0ciIsInNpemUiLCJwYXJzZU9mZnNldCIsImJhc2VQbGFjZW1lbnQiLCJ1c2VIZWlnaHQiLCJmcmFnbWVudHMiLCJmcmFnIiwidHJpbSIsImRpdmlkZXIiLCJzZWFyY2giLCJzcGxpdFJlZ2V4Iiwib3BzIiwib3AiLCJtZXJnZVdpdGhQcmV2aW91cyIsInJlZHVjZSIsImluZGV4MiIsInByZXZlbnRPdmVyZmxvdyIsInByaW9yaXR5IiwicHJpbWFyeSIsImVzY2FwZVdpdGhSZWZlcmVuY2UiLCJzZWNvbmRhcnkiLCJzaGlmdCIsInNoaWZ0dmFyaWF0aW9uIiwic2hpZnRPZmZzZXRzIiwiYm91bmQiLCJpbm5lciIsInN1YnRyYWN0TGVuZ3RoIiwib25Mb2FkIiwiRGVmYXVsdHMiLCJQb3BwZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUkJDEiLCJkZXN0cm95JCQxIiwiZW5hYmxlRXZlbnRMaXN0ZW5lcnMkJDEiLCJkaXNhYmxlRXZlbnRMaXN0ZW5lcnMkJDEiLCJVdGlscyIsImdsb2JhbCIsIlBvcHBlclV0aWxzIiwiRHJvcGRvd24iLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkNMSUNLIiwiS0VZRE9XTl9EQVRBX0FQSSIsIktFWVVQX0RBVEFfQVBJIiwiRElTQUJMRUQiLCJEUk9QVVAiLCJNRU5VUklHSFQiLCJNRU5VTEVGVCIsIkZPUk1fQ0hJTEQiLCJNRU5VIiwiTkFWQkFSX05BViIsIlZJU0lCTEVfSVRFTVMiLCJBdHRhY2htZW50TWFwIiwiVE9QIiwiVE9QRU5EIiwiQk9UVE9NIiwiQk9UVE9NRU5EIiwiX3BvcHBlciIsIl9tZW51IiwiX2dldE1lbnVFbGVtZW50IiwiX2luTmF2YmFyIiwiX2RldGVjdE5hdmJhciIsImRpc2FibGVkIiwiX2dldFBhcmVudEZyb21FbGVtZW50IiwiaXNBY3RpdmUiLCJfY2xlYXJNZW51cyIsInNob3dFdmVudCIsIl9nZXRQb3BwZXJDb25maWciLCJub29wIiwic3RvcFByb3BhZ2F0aW9uIiwiX2dldFBsYWNlbWVudCIsIiRwYXJlbnREcm9wZG93biIsIm9mZnNldENvbmYiLCJwb3BwZXJDb25maWciLCJ0b2dnbGVzIiwiY29udGV4dCIsImRyb3Bkb3duTWVudSIsImhpZGVFdmVudCIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJpdGVtcyIsImUiLCJNb2RhbCIsIkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04iLCJiYWNrZHJvcCIsIkZPQ1VTSU4iLCJSRVNJWkUiLCJDTElDS19ESVNNSVNTIiwiS0VZRE9XTl9ESVNNSVNTIiwiTU9VU0VVUF9ESVNNSVNTIiwiTU9VU0VET1dOX0RJU01JU1MiLCJTQ1JPTExCQVJfTUVBU1VSRVIiLCJCQUNLRFJPUCIsIk9QRU4iLCJESUFMT0ciLCJEQVRBX0RJU01JU1MiLCJGSVhFRF9DT05URU5UIiwiU1RJQ0tZX0NPTlRFTlQiLCJOQVZCQVJfVE9HR0xFUiIsIl9kaWFsb2ciLCJfYmFja2Ryb3AiLCJfaXNTaG93biIsIl9pc0JvZHlPdmVyZmxvd2luZyIsIl9pZ25vcmVCYWNrZHJvcENsaWNrIiwiX29yaWdpbmFsQm9keVBhZGRpbmciLCJfc2Nyb2xsYmFyV2lkdGgiLCJfY2hlY2tTY3JvbGxiYXIiLCJfc2V0U2Nyb2xsYmFyIiwiX2FkanVzdERpYWxvZyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9zaG93QmFja2Ryb3AiLCJfc2hvd0VsZW1lbnQiLCJfaGlkZU1vZGFsIiwiaGFuZGxlVXBkYXRlIiwiRUxFTUVOVF9OT0RFIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5IiwiX2VuZm9yY2VGb2N1cyIsInNob3duRXZlbnQiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJfdGhpczQiLCJoYXMiLCJfdGhpczUiLCJfdGhpczYiLCJfdGhpczciLCJfcmVzZXRBZGp1c3RtZW50cyIsIl9yZXNldFNjcm9sbGJhciIsIl9yZW1vdmVCYWNrZHJvcCIsIl90aGlzOCIsImFuaW1hdGUiLCJkb0FuaW1hdGUiLCJjbGFzc05hbWUiLCJhcHBlbmRUbyIsImNhbGxiYWNrUmVtb3ZlIiwiaXNNb2RhbE92ZXJmbG93aW5nIiwic2Nyb2xsSGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJfdGhpczkiLCJhY3R1YWxQYWRkaW5nIiwiY2FsY3VsYXRlZFBhZGRpbmciLCJhY3R1YWxNYXJnaW4iLCJjYWxjdWxhdGVkTWFyZ2luIiwibWFyZ2luIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJfdGhpczEwIiwiVG9vbHRpcCIsIkNMQVNTX1BSRUZJWCIsIkJTQ0xTX1BSRUZJWF9SRUdFWCIsImFuaW1hdGlvbiIsInRlbXBsYXRlIiwidGl0bGUiLCJkZWxheSIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50IiwiQVVUTyIsIkhvdmVyU3RhdGUiLCJPVVQiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIl9pc0VuYWJsZWQiLCJfdGltZW91dCIsIl9ob3ZlclN0YXRlIiwiX2FjdGl2ZVRyaWdnZXIiLCJ0aXAiLCJfc2V0TGlzdGVuZXJzIiwiZW5hYmxlIiwiZGlzYWJsZSIsInRvZ2dsZUVuYWJsZWQiLCJkYXRhS2V5IiwiX2dldERlbGVnYXRlQ29uZmlnIiwiY2xpY2siLCJfaXNXaXRoQWN0aXZlVHJpZ2dlciIsIl9lbnRlciIsIl9sZWF2ZSIsImdldFRpcEVsZW1lbnQiLCJpc1dpdGhDb250ZW50IiwiaXNJblRoZURvbSIsIm93bmVyRG9jdW1lbnQiLCJ0aXBJZCIsInNldENvbnRlbnQiLCJhdHRhY2htZW50IiwiX2dldEF0dGFjaG1lbnQiLCJhZGRBdHRhY2htZW50Q2xhc3MiLCJfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlIiwiX2ZpeFRyYW5zaXRpb24iLCJwcmV2SG92ZXJTdGF0ZSIsIl9UUkFOU0lUSU9OX0RVUkFUSU9OIiwiX2NsZWFuVGlwQ2xhc3MiLCJnZXRUaXRsZSIsIiR0aXAiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJlbXB0eSIsImFwcGVuZCIsInRleHQiLCJ0cmlnZ2VycyIsImV2ZW50SW4iLCJldmVudE91dCIsIl9maXhUaXRsZSIsInRpdGxlVHlwZSIsInRhYkNsYXNzIiwiam9pbiIsImluaXRDb25maWdBbmltYXRpb24iLCJQb3BvdmVyIiwiVElUTEUiLCJDT05URU5UIiwiX1Rvb2x0aXAiLCJfZ2V0Q29udGVudCIsIlNjcm9sbFNweSIsIm1ldGhvZCIsIkFDVElWQVRFIiwiU0NST0xMIiwiRFJPUERPV05fSVRFTSIsIkRST1BET1dOX01FTlUiLCJEQVRBX1NQWSIsIk5BVl9MSVNUX0dST1VQIiwiTkFWX0xJTktTIiwiTkFWX0lURU1TIiwiTElTVF9JVEVNUyIsIkRST1BET1dOIiwiRFJPUERPV05fSVRFTVMiLCJEUk9QRE9XTl9UT0dHTEUiLCJPZmZzZXRNZXRob2QiLCJPRkZTRVQiLCJQT1NJVElPTiIsIl9zY3JvbGxFbGVtZW50IiwiX3NlbGVjdG9yIiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldHMiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsIml0ZW0iLCJwYWdlWU9mZnNldCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJpc0FjdGl2ZVRhcmdldCIsInF1ZXJpZXMiLCIkbGluayIsInBhcmVudHMiLCJzY3JvbGxTcHlzIiwiJHNweSIsIlRhYiIsIkFDVElWRV9VTCIsIkRST1BET1dOX0FDVElWRV9DSElMRCIsInByZXZpb3VzIiwibGlzdEVsZW1lbnQiLCJpdGVtU2VsZWN0b3IiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIiwiU2Nyb2xsc3B5Il0sIm1h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TyxDQUFDLENBQUQsQ0FBUCxLQUFlRyxRQUExQyxJQUFzREgsT0FBTyxDQUFDLENBQUQsQ0FBUCxHQUFhSSxRQUFwSCxJQUFnSUosT0FBTyxDQUFDLENBQUQsQ0FBUCxJQUFjSyxRQUFsSixFQUE0SjtBQUMxSixZQUFNLElBQUlqeUIsS0FBSixDQUFVLDhFQUFWLENBQU47QUFDRDtBQUNGLEdBZkQsRUFlR2hGLENBZkg7O0FBaUJBRCxTQUFPLENBQUNHLElBQVIsR0FBZUEsSUFBZjtBQUNBSCxTQUFPLENBQUN3RyxLQUFSLEdBQWdCQSxLQUFoQjtBQUNBeEcsU0FBTyxDQUFDdUosTUFBUixHQUFpQkEsTUFBakI7QUFDQXZKLFNBQU8sQ0FBQzZLLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0E3SyxTQUFPLENBQUM2USxRQUFSLEdBQW1CQSxRQUFuQjtBQUNBN1EsU0FBTyxDQUFDNG5CLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0E1bkIsU0FBTyxDQUFDNHFCLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0E1cUIsU0FBTyxDQUFDK3lCLE9BQVIsR0FBa0JBLE9BQWxCO0FBQ0EveUIsU0FBTyxDQUFDbTNCLFNBQVIsR0FBb0IvRCxTQUFwQjtBQUNBcHpCLFNBQU8sQ0FBQ2kyQixHQUFSLEdBQWNBLEdBQWQ7QUFDQWoyQixTQUFPLENBQUMrdUIsT0FBUixHQUFrQkEsT0FBbEI7QUFFQSxTQUFPL3VCLE9BQVA7QUFFQyxDQXhvTWdCLENBd29NZixFQXhvTWUsRUF3b01aQyxDQXhvTVksQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImJvb3RzdHJhcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBCb290c3RyYXAgdjQuMC4wLWJldGEuMiAoaHR0cHM6Ly9nZXRib290c3RyYXAuY29tKVxuICAqIENvcHlyaWdodCAyMDExLTIwMTcgVGhlIEJvb3RzdHJhcCBBdXRob3JzIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvZ3JhcGhzL2NvbnRyaWJ1dG9ycylcbiAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICAqL1xudmFyIGJvb3RzdHJhcCA9IChmdW5jdGlvbiAoZXhwb3J0cywkKSB7XG4ndXNlIHN0cmljdCc7XG5cbiQgPSAkICYmICQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBVdGlsID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIHRyYW5zaXRpb24gPSBmYWxzZTtcbiAgdmFyIE1BWF9VSUQgPSAxMDAwMDAwO1xuICB2YXIgVHJhbnNpdGlvbkVuZEV2ZW50ID0ge1xuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnIC8vIHNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2EtekEtWl0rKS8pWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6IHRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZFRlc3QoKSB7XG4gICAgaWYgKHdpbmRvdy5RVW5pdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jvb3RzdHJhcCcpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBUcmFuc2l0aW9uRW5kRXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZWwuc3R5bGVbbmFtZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kOiBUcmFuc2l0aW9uRW5kRXZlbnRbbmFtZV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKF90aGlzKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkVuZFRlc3QoKTtcbiAgICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yO1xuXG4gICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFB1YmxpYyBVdGlsIEFwaVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gIHZhciBVdGlsID0ge1xuICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcbiAgICBnZXRVSUQ6IGZ1bmN0aW9uIGdldFVJRChwcmVmaXgpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKTsgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSk7XG5cbiAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfSxcbiAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50OiBmdW5jdGlvbiBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgJHNlbGVjdG9yID0gJChkb2N1bWVudCkuZmluZChzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiAkc2VsZWN0b3IubGVuZ3RoID4gMCA/IHNlbGVjdG9yIDogbnVsbDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVmbG93OiBmdW5jdGlvbiByZWZsb3coZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0sXG4gICAgdHJpZ2dlclRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZCk7XG4gICAgfSxcbiAgICBzdXBwb3J0c1RyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRyYW5zaXRpb24pO1xuICAgIH0sXG4gICAgaXNFbGVtZW50OiBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlO1xuICAgIH0sXG4gICAgdHlwZUNoZWNrQ29uZmlnOiBmdW5jdGlvbiB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgICAgdmFyIGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV07XG4gICAgICAgICAgdmFyIHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XTtcbiAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcblxuICAgICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCkgKyBcIjogXCIgKyAoXCJPcHRpb24gXFxcIlwiICsgcHJvcGVydHkgKyBcIlxcXCIgcHJvdmlkZWQgdHlwZSBcXFwiXCIgKyB2YWx1ZVR5cGUgKyBcIlxcXCIgXCIpICsgKFwiYnV0IGV4cGVjdGVkIHR5cGUgXFxcIlwiICsgZXhwZWN0ZWRUeXBlcyArIFwiXFxcIi5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKTtcbiAgcmV0dXJuIFV0aWw7XG59KCQpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbnZhciBjcmVhdGVDbGFzcyA9IF9jcmVhdGVDbGFzcztcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG52YXIgaW5oZXJpdHNMb29zZSA9IF9pbmhlcml0c0xvb3NlO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIEFsZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIHZhciBOQU1FID0gJ2FsZXJ0JztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YS4yJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLmFsZXJ0JztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgRElTTUlTUzogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbiAgfTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIENMT1NFOiBcImNsb3NlXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xPU0VEOiBcImNsb3NlZFwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBBTEVSVDogJ2FsZXJ0JyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gICAgLyoqXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gIH07XG5cbiAgdmFyIEFsZXJ0ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWxlcnQoZWxlbWVudCkge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfSAvLyBnZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBBbGVydC5wcm90b3R5cGU7XG5cbiAgICAvLyBwdWJsaWNcbiAgICBfcHJvdG8uY2xvc2UgPSBmdW5jdGlvbiBjbG9zZShlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLl9lbGVtZW50O1xuXG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KTtcblxuICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpO1xuXG4gICAgICBpZiAoY3VzdG9tRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmVFbGVtZW50KHJvb3RFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH07IC8vIHByaXZhdGVcblxuXG4gICAgX3Byb3RvLl9nZXRSb290RWxlbWVudCA9IGZ1bmN0aW9uIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB2YXIgcGFyZW50ID0gZmFsc2U7XG5cbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBwYXJlbnQgPSAkKHNlbGVjdG9yKVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFwiLlwiICsgQ2xhc3NOYW1lLkFMRVJUKVswXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmlnZ2VyQ2xvc2VFdmVudCA9IGZ1bmN0aW9uIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgICB2YXIgY2xvc2VFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ0xPU0UpO1xuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpO1xuICAgICAgcmV0dXJuIGNsb3NlRXZlbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBpZiAoIVV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgfHwgISQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpO1xuICAgICAgfSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgfTtcblxuICAgIF9wcm90by5fZGVzdHJveUVsZW1lbnQgPSBmdW5jdGlvbiBfZGVzdHJveUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgJChlbGVtZW50KS5kZXRhY2goKS50cmlnZ2VyKEV2ZW50LkNMT1NFRCkucmVtb3ZlKCk7XG4gICAgfTsgLy8gc3RhdGljXG5cblxuICAgIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBBbGVydCh0aGlzKTtcbiAgICAgICAgICAkZWxlbWVudC5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBBbGVydC5faGFuZGxlRGlzbWlzcyA9IGZ1bmN0aW9uIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFsZXJ0SW5zdGFuY2UuY2xvc2UodGhpcyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjcmVhdGVDbGFzcyhBbGVydCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBBbGVydDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5ESVNNSVNTLCBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSkpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydDtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gQWxlcnQ7XG59KCQpO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIE5BTUUgPSAnYnV0dG9uJztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YS4yJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLmJ1dHRvbic7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgQlVUVE9OOiAnYnRuJyxcbiAgICBGT0NVUzogJ2ZvY3VzJ1xuICB9O1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEVfQ0FSUk9UOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgICBJTlBVVDogJ2lucHV0JyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBCVVRUT046ICcuYnRuJ1xuICB9O1xuICB2YXIgRXZlbnQgPSB7XG4gICAgQ0xJQ0tfREFUQV9BUEk6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICBGT0NVU19CTFVSX0RBVEFfQVBJOiBcImZvY3VzXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVkgKyBcIiBcIiArIChcImJsdXJcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSlcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgQnV0dG9uID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0gLy8gZ2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQnV0dG9uLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICB2YXIgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTtcbiAgICAgIHZhciBhZGRBcmlhUHJlc3NlZCA9IHRydWU7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuREFUQV9UT0dHTEUpWzBdO1xuXG4gICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzLl9lbGVtZW50KS5maW5kKFNlbGVjdG9yLklOUFVUKVswXTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiYgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gJChyb290RWxlbWVudCkuZmluZChTZWxlY3Rvci5BQ1RJVkUpWzBdO1xuXG4gICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGlucHV0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSB8fCByb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gISQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGFkZEFyaWFQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgIH07IC8vIHN0YXRpY1xuXG5cbiAgICBCdXR0b24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpO1xuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAndG9nZ2xlJykge1xuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY3JlYXRlQ2xhc3MoQnV0dG9uLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEJ1dHRvbjtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZS5CVVRUT04pKSB7XG4gICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pO1xuICAgIH1cblxuICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJyk7XG4gIH0pLm9uKEV2ZW50LkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGJ1dHRvbiA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLkJVVFRPTilbMF07XG4gICAgJChidXR0b24pLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uO1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBCdXR0b24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gQnV0dG9uO1xufSgkKTtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YS4yKTogY2Fyb3VzZWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgTkFNRSA9ICdjYXJvdXNlbCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDYwMDtcbiAgdmFyIEFSUk9XX0xFRlRfS0VZQ09ERSA9IDM3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuXG4gIHZhciBBUlJPV19SSUdIVF9LRVlDT0RFID0gMzk7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuXG4gIHZhciBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwOyAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcblxuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBpbnRlcnZhbDogNTAwMCxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICBzbGlkZTogZmFsc2UsXG4gICAgcGF1c2U6ICdob3ZlcicsXG4gICAgd3JhcDogdHJ1ZVxuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgaW50ZXJ2YWw6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAgICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICAgIHNsaWRlOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgICB3cmFwOiAnYm9vbGVhbidcbiAgfTtcbiAgdmFyIERpcmVjdGlvbiA9IHtcbiAgICBORVhUOiAnbmV4dCcsXG4gICAgUFJFVjogJ3ByZXYnLFxuICAgIExFRlQ6ICdsZWZ0JyxcbiAgICBSSUdIVDogJ3JpZ2h0J1xuICB9O1xuICB2YXIgRXZlbnQgPSB7XG4gICAgU0xJREU6IFwic2xpZGVcIiArIEVWRU5UX0tFWSxcbiAgICBTTElEOiBcInNsaWRcIiArIEVWRU5UX0tFWSxcbiAgICBLRVlET1dOOiBcImtleWRvd25cIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWSxcbiAgICBUT1VDSEVORDogXCJ0b3VjaGVuZFwiICsgRVZFTlRfS0VZLFxuICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgIENMSUNLX0RBVEFfQVBJOiBcImNsaWNrXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBDQVJPVVNFTDogJ2Nhcm91c2VsJyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIFNMSURFOiAnc2xpZGUnLFxuICAgIFJJR0hUOiAnY2Fyb3VzZWwtaXRlbS1yaWdodCcsXG4gICAgTEVGVDogJ2Nhcm91c2VsLWl0ZW0tbGVmdCcsXG4gICAgTkVYVDogJ2Nhcm91c2VsLWl0ZW0tbmV4dCcsXG4gICAgUFJFVjogJ2Nhcm91c2VsLWl0ZW0tcHJldicsXG4gICAgSVRFTTogJ2Nhcm91c2VsLWl0ZW0nXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBBQ1RJVkVfSVRFTTogJy5hY3RpdmUuY2Fyb3VzZWwtaXRlbScsXG4gICAgSVRFTTogJy5jYXJvdXNlbC1pdGVtJyxcbiAgICBORVhUX1BSRVY6ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2JyxcbiAgICBJTkRJQ0FUT1JTOiAnLmNhcm91c2VsLWluZGljYXRvcnMnLFxuICAgIERBVEFfU0xJREU6ICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXScsXG4gICAgREFUQV9SSURFOiAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBDYXJvdXNlbCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhcm91c2VsKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5faXRlbXMgPSBudWxsO1xuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRvdWNoVGltZW91dCA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSAkKGVsZW1lbnQpWzBdO1xuICAgICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuSU5ESUNBVE9SUylbMF07XG5cbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBnZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBDYXJvdXNlbC5wcm90b3R5cGU7XG5cbiAgICAvLyBwdWJsaWNcbiAgICBfcHJvdG8ubmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uTkVYVCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5uZXh0V2hlblZpc2libGUgPSBmdW5jdGlvbiBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJiAkKHRoaXMuX2VsZW1lbnQpLmlzKCc6dmlzaWJsZScpICYmICQodGhpcy5fZWxlbWVudCkuY3NzKCd2aXNpYmlsaXR5JykgIT09ICdoaWRkZW4nKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucHJldiA9IGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICB0aGlzLl9zbGlkZShEaXJlY3Rpb24uUFJFVik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGV2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuZmluZChTZWxlY3Rvci5ORVhUX1BSRVYpWzBdICYmIFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcbiAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jeWNsZSh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgfTtcblxuICAgIF9wcm90by5jeWNsZSA9IGZ1bmN0aW9uIGN5Y2xlKGV2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2lzUGF1c2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmludGVydmFsICYmICF0aGlzLl9pc1BhdXNlZCkge1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSwgdGhpcy5fY29uZmlnLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvID0gZnVuY3Rpb24gdG8oaW5kZXgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX0lURU0pWzBdO1xuXG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5TTElELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnRvKGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuY3ljbGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleCA/IERpcmVjdGlvbi5ORVhUIDogRGlyZWN0aW9uLlBSRVY7XG5cbiAgICAgIHRoaXMuX3NsaWRlKGRpcmVjdGlvbiwgdGhpcy5faXRlbXNbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKTtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICB0aGlzLl9pdGVtcyA9IG51bGw7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGw7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fa2V5ZG93bihldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuTU9VU0VFTlRFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wYXVzZShldmVudCk7XG4gICAgICAgIH0pLm9uKEV2ZW50Lk1PVVNFTEVBVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuY3ljbGUoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgLy8gaWYgaXQncyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlLCBtb3VzZWVudGVyL2xlYXZlIGFyZSBmaXJlZCBhc1xuICAgICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgICAgLy8gaGVyZSwgd2UgbGlzdGVuIGZvciB0b3VjaGVuZCwgZXhwbGljaXRseSBwYXVzZSB0aGUgY2Fyb3VzZWxcbiAgICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAvLyBldmVudHMgdG8gZmlyZSkgd2UgZXhwbGljaXRseSByZXN0YXJ0IGN5Y2xpbmdcbiAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNIRU5ELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIucGF1c2UoKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzMi50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMi50b3VjaFRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczIudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5jeWNsZShldmVudCk7XG4gICAgICAgICAgICB9LCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUICsgX3RoaXMyLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fa2V5ZG93biA9IGZ1bmN0aW9uIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgIGNhc2UgQVJST1dfTEVGVF9LRVlDT0RFOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5wcmV2KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBBUlJPV19SSUdIVF9LRVlDT0RFOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0SXRlbUluZGV4ID0gZnVuY3Rpb24gX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgICB0aGlzLl9pdGVtcyA9ICQubWFrZUFycmF5KCQoZWxlbWVudCkucGFyZW50KCkuZmluZChTZWxlY3Rvci5JVEVNKSk7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRJdGVtQnlEaXJlY3Rpb24gPSBmdW5jdGlvbiBfZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCkge1xuICAgICAgdmFyIGlzTmV4dERpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQ7XG4gICAgICB2YXIgaXNQcmV2RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFVjtcblxuICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbGFzdEl0ZW1JbmRleCA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgaXNHb2luZ1RvV3JhcCA9IGlzUHJldkRpcmVjdGlvbiAmJiBhY3RpdmVJbmRleCA9PT0gMCB8fCBpc05leHREaXJlY3Rpb24gJiYgYWN0aXZlSW5kZXggPT09IGxhc3RJdGVtSW5kZXg7XG5cbiAgICAgIGlmIChpc0dvaW5nVG9XcmFwICYmICF0aGlzLl9jb25maWcud3JhcCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlbHRhID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViA/IC0xIDogMTtcbiAgICAgIHZhciBpdGVtSW5kZXggPSAoYWN0aXZlSW5kZXggKyBkZWx0YSkgJSB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgICByZXR1cm4gaXRlbUluZGV4ID09PSAtMSA/IHRoaXMuX2l0ZW1zW3RoaXMuX2l0ZW1zLmxlbmd0aCAtIDFdIDogdGhpcy5faXRlbXNbaXRlbUluZGV4XTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl90cmlnZ2VyU2xpZGVFdmVudCA9IGZ1bmN0aW9uIF90cmlnZ2VyU2xpZGVFdmVudChyZWxhdGVkVGFyZ2V0LCBldmVudERpcmVjdGlvbk5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChyZWxhdGVkVGFyZ2V0KTtcblxuICAgICAgdmFyIGZyb21JbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleCgkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX0lURU0pWzBdKTtcblxuICAgICAgdmFyIHNsaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNMSURFLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHJlbGF0ZWRUYXJnZXQsXG4gICAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgICBmcm9tOiBmcm9tSW5kZXgsXG4gICAgICAgIHRvOiB0YXJnZXRJbmRleFxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZGVFdmVudCk7XG4gICAgICByZXR1cm4gc2xpZGVFdmVudDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50ID0gZnVuY3Rpb24gX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICAgICQodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcblxuICAgICAgICB2YXIgbmV4dEluZGljYXRvciA9IHRoaXMuX2luZGljYXRvcnNFbGVtZW50LmNoaWxkcmVuW3RoaXMuX2dldEl0ZW1JbmRleChlbGVtZW50KV07XG5cbiAgICAgICAgaWYgKG5leHRJbmRpY2F0b3IpIHtcbiAgICAgICAgICAkKG5leHRJbmRpY2F0b3IpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fc2xpZGUgPSBmdW5jdGlvbiBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmZpbmQoU2VsZWN0b3IuQUNUSVZFX0lURU0pWzBdO1xuXG4gICAgICB2YXIgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICB2YXIgbmV4dEVsZW1lbnQgPSBlbGVtZW50IHx8IGFjdGl2ZUVsZW1lbnQgJiYgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgIHZhciBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KTtcblxuICAgICAgdmFyIGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpO1xuICAgICAgdmFyIGRpcmVjdGlvbmFsQ2xhc3NOYW1lO1xuICAgICAgdmFyIG9yZGVyQ2xhc3NOYW1lO1xuICAgICAgdmFyIGV2ZW50RGlyZWN0aW9uTmFtZTtcblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcbiAgICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDbGFzc05hbWUuTEVGVDtcbiAgICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuTkVYVDtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLkxFRlQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5SSUdIVDtcbiAgICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuUFJFVjtcbiAgICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSkpIHtcbiAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNsaWRlRXZlbnQgPSB0aGlzLl90cmlnZ2VyU2xpZGVFdmVudChuZXh0RWxlbWVudCwgZXZlbnREaXJlY3Rpb25OYW1lKTtcblxuICAgICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAgIC8vIHNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IHRydWU7XG5cbiAgICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50KTtcblxuICAgICAgdmFyIHNsaWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJRCwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBuZXh0RWxlbWVudCxcbiAgICAgICAgZGlyZWN0aW9uOiBldmVudERpcmVjdGlvbk5hbWUsXG4gICAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgICAgdG86IG5leHRFbGVtZW50SW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TTElERSkpIHtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3Mob3JkZXJDbGFzc05hbWUpO1xuICAgICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudCk7XG4gICAgICAgICQoYWN0aXZlRWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpO1xuICAgICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSk7XG4gICAgICAgICQoYWN0aXZlRWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKG5leHRFbGVtZW50KS5yZW1vdmVDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSArIFwiIFwiICsgb3JkZXJDbGFzc05hbWUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSArIFwiIFwiICsgb3JkZXJDbGFzc05hbWUgKyBcIiBcIiArIGRpcmVjdGlvbmFsQ2xhc3NOYW1lKTtcbiAgICAgICAgICBfdGhpczMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICQoX3RoaXMzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgJChuZXh0RWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgICB0aGlzLmN5Y2xlKCk7XG4gICAgICB9XG4gICAgfTsgLy8gc3RhdGljXG5cblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgJC5leHRlbmQoX2NvbmZpZywgY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGU7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgZGF0YS50byhjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgYWN0aW9uICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbYWN0aW9uXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwpIHtcbiAgICAgICAgICBkYXRhLnBhdXNlKCk7XG4gICAgICAgICAgZGF0YS5jeWNsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdO1xuXG4gICAgICBpZiAoIXRhcmdldCB8fCAhJCh0YXJnZXQpLmhhc0NsYXNzKENsYXNzTmFtZS5DQVJPVVNFTCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29uZmlnID0gJC5leHRlbmQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKTtcbiAgICAgIHZhciBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXgpIHtcbiAgICAgICAgY29uZmlnLmludGVydmFsID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZyk7XG5cbiAgICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAgICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKS50byhzbGlkZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlQ2xhc3MoQ2Fyb3VzZWwsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDYXJvdXNlbDtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1NMSURFLCBDYXJvdXNlbC5fZGF0YUFwaUNsaWNrSGFuZGxlcik7XG4gICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1JJREUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjYXJvdXNlbCA9ICQodGhpcyk7XG5cbiAgICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpO1xuICAgIH0pO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWw7XG5cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIENhcm91c2VsO1xufSgkKTtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YS4yKTogY29sbGFwc2UuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgTkFNRSA9ICdjb2xsYXBzZSc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5jb2xsYXBzZSc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDYwMDtcbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgdG9nZ2xlOiB0cnVlLFxuICAgIHBhcmVudDogJydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIHRvZ2dsZTogJ2Jvb2xlYW4nLFxuICAgIHBhcmVudDogJyhzdHJpbmd8ZWxlbWVudCknXG4gIH07XG4gIHZhciBFdmVudCA9IHtcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIENPTExBUFNFOiAnY29sbGFwc2UnLFxuICAgIENPTExBUFNJTkc6ICdjb2xsYXBzaW5nJyxcbiAgICBDT0xMQVBTRUQ6ICdjb2xsYXBzZWQnXG4gIH07XG4gIHZhciBEaW1lbnNpb24gPSB7XG4gICAgV0lEVEg6ICd3aWR0aCcsXG4gICAgSEVJR0hUOiAnaGVpZ2h0J1xuICB9O1xuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgQUNUSVZFUzogJy5zaG93LCAuY29sbGFwc2luZycsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgQ29sbGFwc2UgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2xsYXBzZShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMuX3RyaWdnZXJBcnJheSA9ICQubWFrZUFycmF5KCQoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1baHJlZj1cXFwiI1wiICsgZWxlbWVudC5pZCArIFwiXFxcIl0sXCIgKyAoXCJbZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIl1bZGF0YS10YXJnZXQ9XFxcIiNcIiArIGVsZW1lbnQuaWQgKyBcIlxcXCJdXCIpKSk7XG4gICAgICB2YXIgdGFiVG9nZ2xlcyA9ICQoU2VsZWN0b3IuREFUQV9UT0dHTEUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYlRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW0gPSB0YWJUb2dnbGVzW2ldO1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmICQoc2VsZWN0b3IpLmZpbHRlcihlbGVtZW50KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fdHJpZ2dlckFycmF5LnB1c2goZWxlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbDtcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLl9lbGVtZW50LCB0aGlzLl90cmlnZ2VyQXJyYXkpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRvZ2dsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0gLy8gZ2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gQ29sbGFwc2UucHJvdG90eXBlO1xuXG4gICAgLy8gcHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uc2hvdyA9IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNUcmFuc2l0aW9uaW5nIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGl2ZXM7XG4gICAgICB2YXIgYWN0aXZlc0RhdGE7XG5cbiAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgICAgYWN0aXZlcyA9ICQubWFrZUFycmF5KCQodGhpcy5fcGFyZW50KS5jaGlsZHJlbigpLmNoaWxkcmVuKFNlbGVjdG9yLkFDVElWRVMpKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgYWN0aXZlcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgICAgYWN0aXZlc0RhdGEgPSAkKGFjdGl2ZXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIGlmIChhY3RpdmVzRGF0YSAmJiBhY3RpdmVzRGF0YS5faXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzdGFydEV2ZW50KTtcblxuICAgICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChhY3RpdmVzKSwgJ2hpZGUnKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZXNEYXRhKSB7XG4gICAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKCk7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORyk7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwO1xuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMuX3RyaWdnZXJBcnJheSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG4gICAgICAgIF90aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcblxuICAgICAgICBfdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKTtcblxuICAgICAgICAkKF90aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LlNIT1dOKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSkge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgICAgdmFyIHNjcm9sbFNpemUgPSBcInNjcm9sbFwiICsgY2FwaXRhbGl6ZWREaW1lbnNpb247XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50W3Njcm9sbFNpemVdICsgXCJweFwiO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudCk7XG5cbiAgICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSB0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl0gKyBcInB4XCI7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB0cmlnZ2VyID0gdGhpcy5fdHJpZ2dlckFycmF5W2ldO1xuICAgICAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0cmlnZ2VyKTtcblxuICAgICAgICAgIGlmIChzZWxlY3RvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyICRlbGVtID0gJChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGlmICghJGVsZW0uaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuXG4gICAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgX3RoaXMyLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpO1xuXG4gICAgICAgICQoX3RoaXMyLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKS50cmlnZ2VyKEV2ZW50LkhJRERFTik7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJztcblxuICAgICAgaWYgKCFVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpKSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0VHJhbnNpdGlvbmluZyA9IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmc7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICAgICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGw7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpOyAvLyBjb2VyY2Ugc3RyaW5nIHZhbHVlc1xuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gX2dldERpbWVuc2lvbigpIHtcbiAgICAgIHZhciBoYXNXaWR0aCA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoRGltZW5zaW9uLldJRFRIKTtcbiAgICAgIHJldHVybiBoYXNXaWR0aCA/IERpbWVuc2lvbi5XSURUSCA6IERpbWVuc2lvbi5IRUlHSFQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0UGFyZW50ID0gZnVuY3Rpb24gX2dldFBhcmVudCgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcGFyZW50ID0gbnVsbDtcblxuICAgICAgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5wYXJlbnQpKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnQ7IC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYXJlbnQgPSB0aGlzLl9jb25maWcucGFyZW50WzBdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnQgPSAkKHRoaXMuX2NvbmZpZy5wYXJlbnQpWzBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIltkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiXVtkYXRhLXBhcmVudD1cXFwiXCIgKyB0aGlzLl9jb25maWcucGFyZW50ICsgXCJcXFwiXVwiO1xuICAgICAgJChwYXJlbnQpLmZpbmQoc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgICAgX3RoaXMzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpLCBbZWxlbWVudF0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyA9IGZ1bmN0aW9uIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoZWxlbWVudCwgdHJpZ2dlckFycmF5KSB7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgaXNPcGVuID0gJChlbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAkKHRyaWdnZXJBcnJheSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCwgIWlzT3BlbikuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3Blbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9OyAvLyBzdGF0aWNcblxuXG4gICAgQ29sbGFwc2UuX2dldFRhcmdldEZyb21FbGVtZW50ID0gZnVuY3Rpb24gX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcbiAgICAgIHJldHVybiBzZWxlY3RvciA/ICQoc2VsZWN0b3IpWzBdIDogbnVsbDtcbiAgICB9O1xuXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICB2YXIgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkdGhpcy5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpO1xuICAgICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY3JlYXRlQ2xhc3MoQ29sbGFwc2UsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBDb2xsYXBzZTtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRyaWdnZXIgPSAkKHRoaXMpO1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcbiAgICAkKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGFyZ2V0ID0gJCh0aGlzKTtcbiAgICAgIHZhciBkYXRhID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKTtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKCk7XG5cbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkdGFyZ2V0LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2U7XG5cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIENvbGxhcHNlO1xufSgkKTtcblxuLyoqIVxuICogQGZpbGVPdmVydmlldyBLaWNrYXNzIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBwbGFjZSBwb3BwZXJzIG5lYXIgdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnRzLlxuICogQHZlcnNpb24gMS4xMi41XG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIG5hdGl2ZUhpbnRzID0gWyduYXRpdmUgY29kZScsICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSBmdW5jdGlvbiBpcyBpbXBsZW1lbnRlZCBuYXRpdmVseSAoYXMgb3Bwb3NlZCB0byBhIHBvbHlmaWxsKS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RnVuY3Rpb24gfCB1bmRlZmluZWR9IGZuIHRoZSBmdW5jdGlvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbnZhciBpc05hdGl2ZSA9IChmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIG5hdGl2ZUhpbnRzLnNvbWUoZnVuY3Rpb24gKGhpbnQpIHtcbiAgICByZXR1cm4gKGZuIHx8ICcnKS50b1N0cmluZygpLmluZGV4T2YoaGludCkgPiAtMTtcbiAgfSk7XG59KTtcblxudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbnZhciB0aW1lb3V0RHVyYXRpb24gPSAwO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgaWYgKGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YobG9uZ2VyVGltZW91dEJyb3dzZXJzW2ldKSA+PSAwKSB7XG4gICAgdGltZW91dER1cmF0aW9uID0gMTtcbiAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHZhciBpID0gMDtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgLy8gTXV0YXRpb25PYnNlcnZlciBwcm92aWRlcyBhIG1lY2hhbmlzbSBmb3Igc2NoZWR1bGluZyBtaWNyb3Rhc2tzLCB3aGljaFxuICAvLyBhcmUgc2NoZWR1bGVkICpiZWZvcmUqIHRoZSBuZXh0IHRhc2suIFRoaXMgZ2l2ZXMgdXMgYSB3YXkgdG8gZGVib3VuY2VcbiAgLy8gYSBmdW5jdGlvbiBidXQgZW5zdXJlIGl0J3MgY2FsbGVkICpiZWZvcmUqIHRoZSBuZXh0IHBhaW50LlxuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgZm4oKTtcbiAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtLCB7IGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCd4LWluZGV4JywgaSk7XG4gICAgICBpID0gaSArIDE7IC8vIGRvbid0IHVzZSBjb21wdW5kICgrPSkgYmVjYXVzZSBpdCBkb2Vzbid0IGdldCBvcHRpbWl6ZWQgaW4gVjhcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gSXQncyBjb21tb24gZm9yIE11dGF0aW9uT2JzZXJ2ZXIgcG9seWZpbGxzIHRvIGJlIHNlZW4gaW4gdGhlIHdpbGQsIGhvd2V2ZXJcbi8vIHRoZXNlIHJlbHkgb24gTXV0YXRpb24gRXZlbnRzIHdoaWNoIG9ubHkgb2NjdXIgd2hlbiBhbiBlbGVtZW50IGlzIGNvbm5lY3RlZFxuLy8gdG8gdGhlIERPTS4gVGhlIGFsZ29yaXRobSB1c2VkIGluIHRoaXMgbW9kdWxlIGRvZXMgbm90IHVzZSBhIGNvbm5lY3RlZCBlbGVtZW50LFxuLy8gYW5kIHNvIHdlIG11c3QgZW5zdXJlIHRoYXQgYSAqbmF0aXZlKiBNdXRhdGlvbk9ic2VydmVyIGlzIGF2YWlsYWJsZS5cbnZhciBzdXBwb3J0c05hdGl2ZU11dGF0aW9uT2JzZXJ2ZXIgPSBpc0Jyb3dzZXIgJiYgaXNOYXRpdmUod2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIpO1xuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xudmFyIGRlYm91bmNlID0gc3VwcG9ydHNOYXRpdmVNdXRhdGlvbk9ic2VydmVyID8gbWljcm90YXNrRGVib3VuY2UgOiB0YXNrRGVib3VuY2U7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgdmFyIGdldFR5cGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCBwcm9wZXJ0eSkge1xuICBpZiAoZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcGFyZW50Tm9kZSBvciB0aGUgaG9zdCBvZiB0aGUgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gc2Nyb2xsIHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcbiAgaWYgKCFlbGVtZW50IHx8IFsnSFRNTCcsICdCT0RZJywgJyNkb2N1bWVudCddLmluZGV4T2YoZWxlbWVudC5ub2RlTmFtZSkgIT09IC0xKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgLy8gRmlyZWZveCB3YW50IHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG5cbiAgdmFyIF9nZXRTdHlsZUNvbXB1dGVkUHJvcCA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRTdHlsZUNvbXB1dGVkUHJvcC5vdmVyZmxvd1k7XG5cbiAgaWYgKC8oYXV0b3xzY3JvbGwpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBlbGVtZW50ICYmIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoWydURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cblxuZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIHZhciBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICB2YXIgc3RhcnQgPSBvcmRlciA/IGVsZW1lbnQxIDogZWxlbWVudDI7XG4gIHZhciBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XG5cbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcbiAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgdmFyIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuXG4gIGlmIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiYgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIHx8IHN0YXJ0LmNvbnRhaW5zKGVuZCkpIHtcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XG4gIH1cblxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXG4gIHZhciBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHNpZGUgYHRvcGAgb3IgYGxlZnRgXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbW91bnQgb2Ygc2Nyb2xsZWQgcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50KSB7XG4gIHZhciBzaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAndG9wJztcblxuICB2YXIgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgdmFyIG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgdmFyIGh0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcbn1cblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50KSB7XG4gIHZhciBzdWJ0cmFjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gIHZhciBtb2RpZmllciA9IHN1YnRyYWN0ID8gLTEgOiAxO1xuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZXR1cm4gcmVjdDtcbn1cblxuLypcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXG4gKiBSZXN1bHQgb2YgYGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eWAgb24gdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBheGlzIC0gYHhgIG9yIGB5YFxuICogQHJldHVybiB7bnVtYmVyfSBib3JkZXJzIC0gVGhlIGJvcmRlcnMgc2l6ZSBvZiB0aGUgZ2l2ZW4gYXhpc1xuICovXG5cbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcywgYXhpcykge1xuICB2YXIgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcbiAgdmFyIHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gK3N0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10uc3BsaXQoJ3B4JylbMF0gKyArc3R5bGVzWydib3JkZXInICsgc2lkZUIgKyAnV2lkdGgnXS5zcGxpdCgncHgnKVswXTtcbn1cblxuLyoqXG4gKiBUZWxscyBpZiB5b3UgYXJlIHJ1bm5pbmcgSW50ZXJuZXQgRXhwbG9yZXIgMTBcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFMTBcbiAqL1xudmFyIGlzSUUxMCA9IHVuZGVmaW5lZDtcblxudmFyIGlzSUUxMCQxID0gZnVuY3Rpb24gKCkge1xuICBpZiAoaXNJRTEwID09PSB1bmRlZmluZWQpIHtcbiAgICBpc0lFMTAgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKCdNU0lFIDEwJykgIT09IC0xO1xuICB9XG4gIHJldHVybiBpc0lFMTA7XG59O1xuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFMTAkMSgpID8gaHRtbFsnb2Zmc2V0JyArIGF4aXNdICsgY29tcHV0ZWRTdHlsZVsnbWFyZ2luJyArIChheGlzID09PSAnSGVpZ2h0JyA/ICdUb3AnIDogJ0xlZnQnKV0gKyBjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0gOiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2l6ZXMoKSB7XG4gIHZhciBib2R5ID0gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gIHZhciBodG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBpc0lFMTAkMSgpICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcbiAgICB3aWR0aDogZ2V0U2l6ZSgnV2lkdGgnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKVxuICB9O1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzJDEgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxudmFyIGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgX2V4dGVuZHMkMSA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzJDEoe30sIG9mZnNldHMsIHtcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm4ge09iamVjdH0gY2xpZW50IHJlY3RcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSB7fTtcblxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXG4gIGlmIChpc0lFMTAkMSgpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9IGVsc2Uge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIHZhciBzaXplcyA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKCkgOiB7fTtcbiAgdmFyIHdpZHRoID0gc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQucmlnaHQgLSByZXN1bHQubGVmdDtcbiAgdmFyIGhlaWdodCA9IHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcblxuICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XG4gIHZhciB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XG5cbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XG4gICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgdmFyIGlzSUUxMCA9IGlzSUUxMCQxKCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gK3N0eWxlcy5ib3JkZXJUb3BXaWR0aC5zcGxpdCgncHgnKVswXTtcbiAgdmFyIGJvcmRlckxlZnRXaWR0aCA9ICtzdHlsZXMuYm9yZGVyTGVmdFdpZHRoLnNwbGl0KCdweCcpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICB2YXIgbWFyZ2luVG9wID0gK3N0eWxlcy5tYXJnaW5Ub3Auc3BsaXQoJ3B4JylbMF07XG4gICAgdmFyIG1hcmdpbkxlZnQgPSArc3R5bGVzLm1hcmdpbkxlZnQuc3BsaXQoJ3B4JylbMF07XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gIHZhciBodG1sID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbChodG1sKTtcbiAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKTtcblxuICB2YXIgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcblxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xuICAgIHZhciBib3VuZGFyaWVzTm9kZSA9IHZvaWQgMDtcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKHBvcHBlcikpO1xuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoYm91bmRhcmllc05vZGUsIG9mZnNldFBhcmVudCk7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICB2YXIgX2dldFdpbmRvd1NpemVzID0gZ2V0V2luZG93U2l6ZXMoKSxcbiAgICAgICAgICBoZWlnaHQgPSBfZ2V0V2luZG93U2l6ZXMuaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoID0gX2dldFdpbmRvd1NpemVzLndpZHRoO1xuXG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBoZWlnaHQgKyBvZmZzZXRzLnRvcDtcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gd2lkdGggKyBvZmZzZXRzLmxlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHBhZGRpbmdzXG4gIGJvdW5kYXJpZXMubGVmdCArPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLnRvcCArPSBwYWRkaW5nO1xuICBib3VuZGFyaWVzLnJpZ2h0IC09IHBhZGRpbmc7XG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IHBhZGRpbmc7XG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFyZWEoX3JlZikge1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgcmVmUmVjdCwgcG9wcGVyLCByZWZlcmVuY2UsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBwYWRkaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAwO1xuXG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICB2YXIgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIHZhciBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyQxKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgcmVjdHNba2V5XSwge1xuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgIH0pO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuYXJlYSAtIGEuYXJlYTtcbiAgfSk7XG5cbiAgdmFyIGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICByZXR1cm4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0O1xuICB9KTtcblxuICB2YXIgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleSA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgcmVmZXJlbmNlKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBvYmplY3QgY29udGFpbmluZyB3aWR0aCBhbmQgaGVpZ2h0IHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0T3V0ZXJTaXplcyhlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0KTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgdmFyIGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIHZhciBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICB2YXIgbWF0Y2ggPSBmaW5kKGFyciwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXIuZnVuY3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybignYG1vZGlmaWVyLmZ1bmN0aW9uYCBpcyBkZXByZWNhdGVkLCB1c2UgYG1vZGlmaWVyLmZuYCEnKTtcbiAgICB9XG4gICAgdmFyIGZuID0gbW9kaWZpZXIuZnVuY3Rpb24gfHwgbW9kaWZpZXIuZm47XG4gICAgaWYgKG1vZGlmaWVyLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIC8vIEFkZCBwcm9wZXJ0aWVzIHRvIG9mZnNldHMgdG8gbWFrZSB0aGVtIGEgY29tcGxldGUgY2xpZW50UmVjdCBvYmplY3RcbiAgICAgIC8vIHdlIGRvIHRoaXMgYmVmb3JlIGVhY2ggbW9kaWZpZXIgdG8gbWFrZSBzdXJlIHRoZSBwcmV2aW91cyBvbmUgZG9lc24ndFxuICAgICAgLy8gbWVzcyB3aXRoIHRoZXNlIHZhbHVlc1xuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnBvcHBlcik7XG4gICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucmVmZXJlbmNlKTtcblxuICAgICAgZGF0YSA9IGZuKGRhdGEsIG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fVxuICB9O1xuXG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0aGlzLnN0YXRlLCB0aGlzLnBvcHBlciwgdGhpcy5yZWZlcmVuY2UpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgLy8gcnVuIHRoZSBtb2RpZmllcnNcbiAgZGF0YSA9IHJ1bk1vZGlmaWVycyh0aGlzLm1vZGlmaWVycywgZGF0YSk7XG5cbiAgLy8gdGhlIGZpcnN0IGB1cGRhdGVgIHdpbGwgY2FsbCBgb25DcmVhdGVgIGNhbGxiYWNrXG4gIC8vIHRoZSBvdGhlciBvbmVzIHdpbGwgY2FsbCBgb25VcGRhdGVgIGNhbGxiYWNrXG4gIGlmICghdGhpcy5zdGF0ZS5pc0NyZWF0ZWQpIHtcbiAgICB0aGlzLnN0YXRlLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5vcHRpb25zLm9uQ3JlYXRlKGRhdGEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMub3B0aW9ucy5vblVwZGF0ZShkYXRhKTtcbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQobW9kaWZpZXJzLCBtb2RpZmllck5hbWUpIHtcbiAgcmV0dXJuIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIGVuYWJsZWQgPSBfcmVmLmVuYWJsZWQ7XG4gICAgcmV0dXJuIGVuYWJsZWQgJiYgbmFtZSA9PT0gbW9kaWZpZXJOYW1lO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgdmFyIHByZWZpeGVzID0gW2ZhbHNlLCAnbXMnLCAnV2Via2l0JywgJ01veicsICdPJ107XG4gIHZhciB1cHBlclByb3AgPSBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciB0b0NoZWNrID0gcHJlZml4ID8gJycgKyBwcmVmaXggKyB1cHBlclByb3AgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIERlc3Ryb3kgdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdHkgYXNrZWQgZm9yIHRoZSBkZWxldGlvbiBvbiBkZXN0cm95XG4gIC8vIGRvIG5vdCB1c2UgYHJlbW92ZWAgYmVjYXVzZSBJRTExIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZU9uRGVzdHJveSkge1xuICAgIHRoaXMucG9wcGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5wb3BwZXIpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsUGFyZW50LCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpIHtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudC5ub2RlTmFtZSA9PT0gJ0JPRFknO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gd2luZG93IDogc2Nyb2xsUGFyZW50O1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICBpZiAoIWlzQm9keSkge1xuICAgIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhnZXRTY3JvbGxQYXJlbnQodGFyZ2V0LnBhcmVudE5vZGUpLCBldmVudCwgY2FsbGJhY2ssIHNjcm9sbFBhcmVudHMpO1xuICB9XG4gIHNjcm9sbFBhcmVudHMucHVzaCh0YXJnZXQpO1xufVxuXG4vKipcbiAqIFNldHVwIG5lZWRlZCBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhyZWZlcmVuY2UsIG9wdGlvbnMsIHN0YXRlLCB1cGRhdGVCb3VuZCkge1xuICAvLyBSZXNpemUgZXZlbnQgbGlzdGVuZXIgb24gd2luZG93XG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gdXBkYXRlQm91bmQ7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICB2YXIgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhdGUudXBkYXRlQm91bmQpO1xuXG4gIC8vIFJlbW92ZSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgb24gc2Nyb2xsIHBhcmVudHNcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIEl0IHdpbGwgcmVtb3ZlIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCB3b24ndCByZWNhbGN1bGF0ZSBwb3BwZXIgcG9zaXRpb25cbiAqIHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLiBJdCBhbHNvIHdvbid0IHRyaWdnZXIgb25VcGRhdGUgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVPbkxvYWQocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMsIG1vZGlmaWVyT3B0aW9ucywgc3RhdGUpIHtcbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIHZhciByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICB2YXIgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQob3B0aW9ucy5wbGFjZW1lbnQsIHJlZmVyZW5jZU9mZnNldHMsIHBvcHBlciwgcmVmZXJlbmNlLCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCBvcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmcpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246ICdhYnNvbHV0ZScgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICAvLyBmbG9vciBzaWRlcyB0byBhdm9pZCBibHVycnkgdGV4dFxuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICBsZWZ0OiBNYXRoLmZsb29yKHBvcHBlci5sZWZ0KSxcbiAgICB0b3A6IE1hdGguZmxvb3IocG9wcGVyLnRvcCksXG4gICAgYm90dG9tOiBNYXRoLmZsb29yKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBNYXRoLmZsb29yKHBvcHBlci5yaWdodClcbiAgfTtcblxuICB2YXIgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICB0b3AgPSB2b2lkIDA7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBsZWZ0ID0gLW9mZnNldFBhcmVudFJlY3Qud2lkdGggKyBvZmZzZXRzLnJpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gJ3RyYW5zbGF0ZTNkKCcgKyBsZWZ0ICsgJ3B4LCAnICsgdG9wICsgJ3B4LCAwKSc7XG4gICAgc3R5bGVzW3NpZGVBXSA9IDA7XG4gICAgc3R5bGVzW3NpZGVCXSA9IDA7XG4gICAgc3R5bGVzLndpbGxDaGFuZ2UgPSAndHJhbnNmb3JtJztcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGh3ZXJpc2UsIHdlIHVzZSB0aGUgc3RhbmRhcmQgYHRvcGAsIGBsZWZ0YCwgYGJvdHRvbWAgYW5kIGByaWdodGAgcHJvcGVydGllc1xuICAgIHZhciBpbnZlcnRUb3AgPSBzaWRlQSA9PT0gJ2JvdHRvbScgPyAtMSA6IDE7XG4gICAgdmFyIGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IHNpZGVBICsgJywgJyArIHNpZGVCO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAneC1wbGFjZW1lbnQnOiBkYXRhLnBsYWNlbWVudFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSBfZXh0ZW5kcyQxKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzJDEoe30sIHN0eWxlcywgZGF0YS5zdHlsZXMpO1xuICBkYXRhLmFycm93U3R5bGVzID0gX2V4dGVuZHMkMSh7fSwgZGF0YS5vZmZzZXRzLmFycm93LCBkYXRhLmFycm93U3R5bGVzKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBkZXBlbmRzIGZyb20gYW5vdGhlciBvbmUuPGJyIC8+XG4gKiBJdCBjaGVja3MgaWYgdGhlIG5lZWRlZCBtb2RpZmllciBpcyBsaXN0ZWQgYW5kIGVuYWJsZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnMgLSBsaXN0IG9mIG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RpbmdOYW1lIC0gbmFtZSBvZiByZXF1ZXN0aW5nIG1vZGlmaWVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGVkTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGVkIG1vZGlmaWVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNNb2RpZmllclJlcXVpcmVkKG1vZGlmaWVycywgcmVxdWVzdGluZ05hbWUsIHJlcXVlc3RlZE5hbWUpIHtcbiAgdmFyIHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICByZXR1cm4gbmFtZSA9PT0gcmVxdWVzdGluZ05hbWU7XG4gIH0pO1xuXG4gIHZhciBpc1JlcXVpcmVkID0gISFyZXF1ZXN0aW5nICYmIG1vZGlmaWVycy5zb21lKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSByZXF1ZXN0ZWROYW1lICYmIG1vZGlmaWVyLmVuYWJsZWQgJiYgbW9kaWZpZXIub3JkZXIgPCByZXF1ZXN0aW5nLm9yZGVyO1xuICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICB2YXIgX3JlcXVlc3RpbmcgPSAnYCcgKyByZXF1ZXN0aW5nTmFtZSArICdgJztcbiAgICB2YXIgcmVxdWVzdGVkID0gJ2AnICsgcmVxdWVzdGVkTmFtZSArICdgJztcbiAgICBjb25zb2xlLndhcm4ocmVxdWVzdGVkICsgJyBtb2RpZmllciBpcyByZXF1aXJlZCBieSAnICsgX3JlcXVlc3RpbmcgKyAnIG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJyArIF9yZXF1ZXN0aW5nICsgJyEnKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGFycm93KGRhdGEsIG9wdGlvbnMpIHtcbiAgLy8gYXJyb3cgZGVwZW5kcyBvbiBrZWVwVG9nZXRoZXIgaW4gb3JkZXIgdG8gd29ya1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2Fycm93JywgJ2tlZXBUb2dldGhlcicpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYXJyb3dFbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50O1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnF1ZXJ5U2VsZWN0b3IoYXJyb3dFbGVtZW50KTtcblxuICAgIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGlmIHRoZSBhcnJvd0VsZW1lbnQgaXNuJ3QgYSBxdWVyeSBzZWxlY3RvciB3ZSBtdXN0IGNoZWNrIHRoYXQgdGhlXG4gICAgLy8gcHJvdmlkZWQgRE9NIG5vZGUgaXMgY2hpbGQgb2YgaXRzIHBvcHBlciBub2RlXG4gICAgaWYgKCFkYXRhLmluc3RhbmNlLnBvcHBlci5jb250YWlucyhhcnJvd0VsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkc6IGBhcnJvdy5lbGVtZW50YCBtdXN0IGJlIGNoaWxkIG9mIGl0cyBwb3BwZXIgZWxlbWVudCEnKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xuICB2YXIgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICB2YXIgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gIHZhciBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVjdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG5cbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHBvcHBlclxuICB2YXIgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIHZhciBwb3BwZXJNYXJnaW5TaWRlID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyLCAnbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZCkucmVwbGFjZSgncHgnLCAnJyk7XG4gIHZhciBzaWRlVmFsdWUgPSBjZW50ZXIgLSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyBwb3BwZXJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4ocG9wcGVyW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcblxuICBkYXRhLmFycm93RWxlbWVudCA9IGFycm93RWxlbWVudDtcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge307XG4gIGRhdGEub2Zmc2V0cy5hcnJvd1tzaWRlXSA9IE1hdGgucm91bmQoc2lkZVZhbHVlKTtcbiAgZGF0YS5vZmZzZXRzLmFycm93W2FsdFNpZGVdID0gJyc7IC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1yaWdodGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICB2YXIgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgdmFyIHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICB2YXIgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgIC8vIHRoaXMgYm9vbGVhbiB0byBkZXRlY3QgYW55IGZsaXAgbG9vcFxuICAgICAgZGF0YS5mbGlwcGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XG4gICAgICB9XG5cbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAgIHZhcmlhdGlvbiA9IGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGRhdGEucGxhY2VtZW50ID0gcGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcblxuICAgICAgLy8gdGhpcyBvYmplY3QgY29udGFpbnMgYHBvc2l0aW9uYCwgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdCBhbG9uZyB3aXRoXG4gICAgICAvLyBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0eSB3ZSBtYXkgYWRkIGluIHRoZSBmdXR1cmVcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyQxKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICB2YXIgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICB2YXIgY2hlY2sgPSB7XG4gICAgcHJpbWFyeTogZnVuY3Rpb24gcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgcGxhY2VtZW50LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IGZ1bmN0aW9uIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgbWFpblNpZGUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgdmFyIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IF9leHRlbmRzJDEoe30sIHBvcHBlciwgY2hlY2tbc2lkZV0ocGxhY2VtZW50KSk7XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIHNoaWZ0KGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcblxuICAvLyBpZiBzaGlmdCBzaGlmdHZhcmlhdGlvbiBpcyBzcGVjaWZpZWQsIHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XG4gICAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcjtcblxuICAgIHZhciBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICAgIHZhciBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSksXG4gICAgICBlbmQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0gKyByZWZlcmVuY2VbbWVhc3VyZW1lbnRdIC0gcG9wcGVyW21lYXN1cmVtZW50XSlcbiAgICB9O1xuXG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzJDEoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICB9KS5ib3VuZGFyaWVzO1xuXG4gIGlmIChyZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fCByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fCByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fCByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdCkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xudmFyIG1vZGlmaWVycyA9IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdGxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGhlaWdodC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IE1vcmUgb24gdGhpcyBbcmVhZGluZyB0aGlzIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcy9pc3N1ZXMvMzczKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDBcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBbiBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyIHRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGhhcyBhbHdheXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllciwgY2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaG90aGVyc1xuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEV4cGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGFzc3VyZSBpdCB0byBwb2ludCB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMsIHlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1Y3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKS5cbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbixcbiAgICAgKiB0aGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYga2VlcFRvZ2V0aGVyIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHRoZSBwb3BwZXIgZmxvdyB0b3dhcmQgdGhlIGlubmVyIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQnkgZGVmYXVsdCwgd2hlbiB0aGlzIG1vZGlmaWVyIGlzIGRpc2FibGVkLCB0aGUgcG9wcGVyIHdpbGwgYmUgcGxhY2VkIG91dHNpZGVcbiAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaW5uZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA3MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPWZhbHNlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGlubmVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gaGlkZSB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dHNpZGUgb2YgdGhlXG4gICAqIHBvcHBlciBib3VuZGFyaWVzLiBJdCB3aWxsIHNldCBhIGB4LW91dC1vZi1ib3VuZGFyaWVzYCBhdHRyaWJ1dGUgd2hpY2ggY2FuXG4gICAqIGJlIHVzZWQgdG8gaGlkZSB3aXRoIGEgQ1NTIHNlbGVjdG9yIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGlzXG4gICAqIG91dCBvZiBib3VuZGFyaWVzLlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBoaWRlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTgwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaGlkZVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNkIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCdcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3Ugb3duIHRvIGFjaGlldmUgdGhlIGRlc2lyZWQgZWZmZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgYXBwbHlTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj05MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDkwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFwcGx5U3R5bGUsXG4gICAgLyoqIEBwcm9wIHtGdW5jdGlvbn0gKi9cbiAgICBvbkxvYWQ6IGFwcGx5U3R5bGVPbkxvYWQsXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjEwLjAsIHRoZSBwcm9wZXJ0eSBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllclxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzZCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbnMgdXNlZCBieSBQb3BwZXIuanNcbiAqIHRoaXMgb2JqZWN0IGdldCBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyLlxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsIGl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdywgaXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHMuXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFzIDNyZCBhcmd1bWVudCBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoaXMgb2JqZWN0LCBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBEZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudFxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWRcbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZCwgdGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnM6IG1vZGlmaWVyc1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vLyBVdGlsc1xuLy8gTWV0aG9kc1xudmFyIFBvcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBQb3BwZXIuanMgaW5zdGFuY2VcbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHJlZmVyZW5jZU9iamVjdH0gcmVmZXJlbmNlIC0gVGhlIHJlZmVyZW5jZSBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHBlcik7XG5cbiAgICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy51cGRhdGUpO1xuICAgIH07XG5cbiAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgdGhpcy51cGRhdGUgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzJDEoe30sIFBvcHBlci5EZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAvLyBpbml0IHN0YXRlXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAgIGlzQ3JlYXRlZDogZmFsc2UsXG4gICAgICBzY3JvbGxQYXJlbnRzOiBbXVxuICAgIH07XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIGFuZCBwb3BwZXIgZWxlbWVudHMgKGFsbG93IGpRdWVyeSB3cmFwcGVycylcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhfZXh0ZW5kcyQxKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzLCBvcHRpb25zLm1vZGlmaWVycykpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0gX2V4dGVuZHMkMSh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMkMSh7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0sIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdKTtcbiAgICB9KVxuICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKF90aGlzLnJlZmVyZW5jZSwgX3RoaXMucG9wcGVyLCBfdGhpcy5vcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIF90aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB2YXIgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcblxuXG4gIGNyZWF0ZUNsYXNzJDEoUG9wcGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSQkMSgpIHtcbiAgICAgIHJldHVybiB1cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSQkMSgpIHtcbiAgICAgIHJldHVybiBkZXN0cm95LmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rpc2FibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyQkMSgpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZSBhbiB1cGRhdGUsIGl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGVcbiAgICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAgICpcbiAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgfV0pO1xuICByZXR1cm4gUG9wcGVyO1xufSgpO1xuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwXG4gKiBAbmFtZSByZWZlcmVuY2VPYmplY3RcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGRhdGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNldCBvZiBjb29yZGluYXRlcyBjb21wYXRpYmxlIHdpdGggdGhlIG5hdGl2ZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YCBtZXRob2QuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRXaWR0aFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSB3aWR0aCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudEhlaWdodFxuICogQW4gRVM2IGdldHRlciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBoZWlnaHQgb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKi9cblxuXG5Qb3BwZXIuVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuUG9wcGVyLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuUG9wcGVyLkRlZmF1bHRzID0gRGVmYXVsdHM7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAqL1xuICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jvb3RzdHJhcCBkcm9wZG93biByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpO1xuICB9XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gIHZhciBOQU1FID0gJ2Ryb3Bkb3duJztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YS4yJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLmRyb3Bkb3duJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBFU0NBUEVfS0VZQ09ERSA9IDI3OyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbiAgdmFyIFNQQUNFX0tFWUNPREUgPSAzMjsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5cbiAgdmFyIFRBQl9LRVlDT0RFID0gOTsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuXG4gIHZhciBBUlJPV19VUF9LRVlDT0RFID0gMzg7IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuXG4gIHZhciBBUlJPV19ET1dOX0tFWUNPREUgPSA0MDsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcblxuICB2YXIgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMzsgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5cbiAgdmFyIFJFR0VYUF9LRVlET1dOID0gbmV3IFJlZ0V4cChBUlJPV19VUF9LRVlDT0RFICsgXCJ8XCIgKyBBUlJPV19ET1dOX0tFWUNPREUgKyBcInxcIiArIEVTQ0FQRV9LRVlDT0RFKTtcbiAgdmFyIEV2ZW50ID0ge1xuICAgIEhJREU6IFwiaGlkZVwiICsgRVZFTlRfS0VZLFxuICAgIEhJRERFTjogXCJoaWRkZW5cIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XOiBcInNob3dcIiArIEVWRU5UX0tFWSxcbiAgICBTSE9XTjogXCJzaG93blwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0tfREFUQV9BUEk6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICBLRVlET1dOX0RBVEFfQVBJOiBcImtleWRvd25cIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICBLRVlVUF9EQVRBX0FQSTogXCJrZXl1cFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXG4gICAgU0hPVzogJ3Nob3cnLFxuICAgIERST1BVUDogJ2Ryb3B1cCcsXG4gICAgTUVOVVJJR0hUOiAnZHJvcGRvd24tbWVudS1yaWdodCcsXG4gICAgTUVOVUxFRlQ6ICdkcm9wZG93bi1tZW51LWxlZnQnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgICBGT1JNX0NISUxEOiAnLmRyb3Bkb3duIGZvcm0nLFxuICAgIE1FTlU6ICcuZHJvcGRvd24tbWVudScsXG4gICAgTkFWQkFSX05BVjogJy5uYXZiYXItbmF2JyxcbiAgICBWSVNJQkxFX0lURU1TOiAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCknXG4gIH07XG4gIHZhciBBdHRhY2htZW50TWFwID0ge1xuICAgIFRPUDogJ3RvcC1zdGFydCcsXG4gICAgVE9QRU5EOiAndG9wLWVuZCcsXG4gICAgQk9UVE9NOiAnYm90dG9tLXN0YXJ0JyxcbiAgICBCT1RUT01FTkQ6ICdib3R0b20tZW5kJ1xuICB9O1xuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBvZmZzZXQ6IDAsXG4gICAgZmxpcDogdHJ1ZVxuICB9O1xuICB2YXIgRGVmYXVsdFR5cGUgPSB7XG4gICAgb2Zmc2V0OiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgICBmbGlwOiAnYm9vbGVhbidcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgRHJvcGRvd24gPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcm9wZG93bihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5fcG9wcGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fbWVudSA9IHRoaXMuX2dldE1lbnVFbGVtZW50KCk7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH0gLy8gZ2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gRHJvcGRvd24ucHJvdG90eXBlO1xuXG4gICAgLy8gcHVibGljXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBEcm9wZG93bi5fY2xlYXJNZW51cygpO1xuXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfTtcbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDsgLy8gZm9yIGRyb3B1cCB3aXRoIGFsaWdubWVudCB3ZSB1c2UgdGhlIHBhcmVudCBhcyBwb3BwZXIgY29udGFpbmVyXG5cbiAgICAgIGlmICgkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BVUCkpIHtcbiAgICAgICAgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVMRUZUKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKGVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKTsgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiAhJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWQkFSX05BVikubGVuZ3RoKSB7XG4gICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9uKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuICAgICAgJChwYXJlbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKS50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX21lbnUgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7XG4gICAgfTtcblxuICAgIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpO1xuXG4gICAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07IC8vIHByaXZhdGVcblxuXG4gICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0ssIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBfdGhpcy50b2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LCAkKHRoaXMuX2VsZW1lbnQpLmRhdGEoKSwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldE1lbnVFbGVtZW50ID0gZnVuY3Rpb24gX2dldE1lbnVFbGVtZW50KCkge1xuICAgICAgaWYgKCF0aGlzLl9tZW51KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5fbWVudSA9ICQocGFyZW50KS5maW5kKFNlbGVjdG9yLk1FTlUpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fbWVudTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9nZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiBfZ2V0UGxhY2VtZW50KCkge1xuICAgICAgdmFyICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudCkucGFyZW50KCk7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT007IC8vIEhhbmRsZSBkcm9wdXBcblxuICAgICAgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFVQKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUDtcblxuICAgICAgICBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QRU5EO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01FTkQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfTtcblxuICAgIF9wcm90by5fZGV0ZWN0TmF2YmFyID0gZnVuY3Rpb24gX2RldGVjdE5hdmJhcigpIHtcbiAgICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFBvcHBlckNvbmZpZyA9IGZ1bmN0aW9uIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9mZnNldENvbmYgPSB7fTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZnNldENvbmYuZm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGRhdGEub2Zmc2V0cyA9ICQuZXh0ZW5kKHt9LCBkYXRhLm9mZnNldHMsIF90aGlzMi5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMpIHx8IHt9KTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZnNldENvbmYub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvcHBlckNvbmZpZyA9IHtcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXRDb25mLFxuICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIERpc2FibGUgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcblxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX2luTmF2YmFyKSB7XG4gICAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgICBlbmFibGVkOiAhdGhpcy5faW5OYXZiYXJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvcHBlckNvbmZpZztcbiAgICB9OyAvLyBzdGF0aWNcblxuXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgIGRhdGEgPSBuZXcgRHJvcGRvd24odGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzID0gZnVuY3Rpb24gX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQud2hpY2ggPT09IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG9nZ2xlcyA9ICQubWFrZUFycmF5KCQoU2VsZWN0b3IuREFUQV9UT0dHTEUpKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2dnbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodG9nZ2xlc1tpXSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSAkKHRvZ2dsZXNbaV0pLmRhdGEoREFUQV9LRVkpO1xuICAgICAgICB2YXIgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiB0b2dnbGVzW2ldXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudTtcblxuICAgICAgICBpZiAoISQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJiAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiYgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpO1xuICAgICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBpZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuXG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICQoJ2JvZHknKS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICQoZHJvcGRvd25NZW51KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG4gICAgICAgICQocGFyZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVykudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQgPSBmdW5jdGlvbiBfZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgdmFyIHBhcmVudDtcbiAgICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHBhcmVudCA9ICQoc2VsZWN0b3IpWzBdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9O1xuXG4gICAgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIGlmICghUkVHRVhQX0tFWURPV04udGVzdChldmVudC53aGljaCkgfHwgL2J1dHRvbi9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpICYmIGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMpO1xuXG4gICAgICB2YXIgaXNBY3RpdmUgPSAkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuXG4gICAgICBpZiAoIWlzQWN0aXZlICYmIChldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IFNQQUNFX0tFWUNPREUpIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gJChwYXJlbnQpLmZpbmQoU2VsZWN0b3IuREFUQV9UT0dHTEUpWzBdO1xuICAgICAgICAgICQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtcyA9ICQocGFyZW50KS5maW5kKFNlbGVjdG9yLlZJU0lCTEVfSVRFTVMpLmdldCgpO1xuXG4gICAgICBpZiAoIWl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19VUF9LRVlDT0RFICYmIGluZGV4ID4gMCkge1xuICAgICAgICAvLyB1cFxuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gZG93blxuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaXRlbXNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUNsYXNzKERyb3Bkb3duLCBudWxsLCBbe1xuICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiRGVmYXVsdFwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIERyb3Bkb3duO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLk1FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJICsgXCIgXCIgKyBFdmVudC5LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uX2NsZWFyTWVudXMpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJyk7XG4gIH0pLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCBmdW5jdGlvbiAoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93bjtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KCQsIFBvcHBlcik7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIE5BTUUgPSAnbW9kYWwnO1xuICB2YXIgVkVSU0lPTiA9ICc0LjAuMC1iZXRhLjInO1xuICB2YXIgREFUQV9LRVkgPSAnYnMubW9kYWwnO1xuICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgdmFyIFRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDA7XG4gIHZhciBCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuICB2YXIgRVNDQVBFX0tFWUNPREUgPSAyNzsgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG4gIHZhciBEZWZhdWx0ID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIGZvY3VzOiB0cnVlLFxuICAgIHNob3c6IHRydWVcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIGJhY2tkcm9wOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gICAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgICBmb2N1czogJ2Jvb2xlYW4nLFxuICAgIHNob3c6ICdib29sZWFuJ1xuICB9O1xuICB2YXIgRXZlbnQgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVksXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZLFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVksXG4gICAgUkVTSVpFOiBcInJlc2l6ZVwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLX0RJU01JU1M6IFwiY2xpY2suZGlzbWlzc1wiICsgRVZFTlRfS0VZLFxuICAgIEtFWURPV05fRElTTUlTUzogXCJrZXlkb3duLmRpc21pc3NcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRVVQX0RJU01JU1M6IFwibW91c2V1cC5kaXNtaXNzXCIgKyBFVkVOVF9LRVksXG4gICAgTU9VU0VET1dOX0RJU01JU1M6IFwibW91c2Vkb3duLmRpc21pc3NcIiArIEVWRU5UX0tFWSxcbiAgICBDTElDS19EQVRBX0FQSTogXCJjbGlja1wiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZXG4gIH07XG4gIHZhciBDbGFzc05hbWUgPSB7XG4gICAgU0NST0xMQkFSX01FQVNVUkVSOiAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnLFxuICAgIEJBQ0tEUk9QOiAnbW9kYWwtYmFja2Ryb3AnLFxuICAgIE9QRU46ICdtb2RhbC1vcGVuJyxcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICAgIEZJWEVEX0NPTlRFTlQ6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgICBTVElDS1lfQ09OVEVOVDogJy5zdGlja3ktdG9wJyxcbiAgICBOQVZCQVJfVE9HR0xFUjogJy5uYXZiYXItdG9nZ2xlcidcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgTW9kYWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb2RhbChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9kaWFsb2cgPSAkKGVsZW1lbnQpLmZpbmQoU2VsZWN0b3IuRElBTE9HKVswXTtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLl9vcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gMDtcbiAgICB9IC8vIGdldHRlcnNcblxuXG4gICAgdmFyIF9wcm90byA9IE1vZGFsLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpY1xuICAgIF9wcm90by50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdyhyZWxhdGVkVGFyZ2V0KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZFRhcmdldFxuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICAgIHRoaXMuX2NoZWNrU2Nyb2xsYmFyKCk7XG5cbiAgICAgIHRoaXMuX3NldFNjcm9sbGJhcigpO1xuXG4gICAgICB0aGlzLl9hZGp1c3REaWFsb2coKTtcblxuICAgICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDbGFzc05hbWUuT1BFTik7XG5cbiAgICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KCk7XG5cbiAgICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KCk7XG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuQ0xJQ0tfRElTTUlTUywgU2VsZWN0b3IuREFUQV9ESVNNSVNTLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGUoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChfdGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyhfdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICAgIF90aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNTaG93biA9IGZhbHNlO1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpO1xuXG4gICAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpO1xuXG4gICAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTik7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKTtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpO1xuICAgICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFdmVudC5NT1VTRURPV05fRElTTUlTUyk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICQodGhpcy5fZWxlbWVudCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2hpZGVNb2RhbChldmVudCk7XG4gICAgICAgIH0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKFRSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGlkZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICAkKHdpbmRvdywgZG9jdW1lbnQsIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2JhY2tkcm9wKS5vZmYoRVZFTlRfS0VZKTtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2RpYWxvZyA9IG51bGw7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGw7XG4gICAgICB0aGlzLl9pc1Nob3duID0gbnVsbDtcbiAgICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsO1xuICAgICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSBudWxsO1xuICAgIH07XG5cbiAgICBfcHJvdG8uaGFuZGxlVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlVXBkYXRlKCkge1xuICAgICAgdGhpcy5fYWRqdXN0RGlhbG9nKCk7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93RWxlbWVudCA9IGZ1bmN0aW9uIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHRyYW5zaXRpb24gPSBVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpO1xuXG4gICAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fCB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIGRvbid0IG1vdmUgbW9kYWxzIGRvbSBwb3NpdGlvblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiByZWxhdGVkVGFyZ2V0XG4gICAgICB9KTtcblxuICAgICAgdmFyIHRyYW5zaXRpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIHRyYW5zaXRpb25Db21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKF90aGlzMy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgICAgX3RoaXMzLl9lbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICAkKF90aGlzMy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICQodGhpcy5fZGlhbG9nKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgdHJhbnNpdGlvbkNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uIF9lbmZvcmNlRm9jdXMoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEV2ZW50LkZPQ1VTSU4sIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiBfdGhpczQuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAhJChfdGhpczQuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgIF90aGlzNC5fZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRFc2NhcGVFdmVudCA9IGZ1bmN0aW9uIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIF90aGlzNS5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRSZXNpemVFdmVudCA9IGZ1bmN0aW9uIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICAkKHdpbmRvdykub24oRXZlbnQuUkVTSVpFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM2LmhhbmRsZVVwZGF0ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh3aW5kb3cpLm9mZihFdmVudC5SRVNJWkUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2hpZGVNb2RhbCA9IGZ1bmN0aW9uIF9oaWRlTW9kYWwoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuX3Nob3dCYWNrZHJvcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuXG4gICAgICAgIF90aGlzNy5fcmVzZXRBZGp1c3RtZW50cygpO1xuXG4gICAgICAgIF90aGlzNy5fcmVzZXRTY3JvbGxiYXIoKTtcblxuICAgICAgICAkKF90aGlzNy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fcmVtb3ZlQmFja2Ryb3AgPSBmdW5jdGlvbiBfcmVtb3ZlQmFja2Ryb3AoKSB7XG4gICAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zaG93QmFja2Ryb3AgPSBmdW5jdGlvbiBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgdmFyIGFuaW1hdGUgPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSA/IENsYXNzTmFtZS5GQURFIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgICB2YXIgZG9BbmltYXRlID0gVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhbmltYXRlO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1A7XG5cbiAgICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhhbmltYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RJU01JU1MsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpczguX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICAgIF90aGlzOC5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXM4Ll9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICBfdGhpczguX2VsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXM4LmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkb0FuaW1hdGUpIHtcbiAgICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9BbmltYXRlKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spLmVtdWxhdGVUcmFuc2l0aW9uRW5kKEJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04pO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93biAmJiB0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrUmVtb3ZlID0gZnVuY3Rpb24gY2FsbGJhY2tSZW1vdmUoKSB7XG4gICAgICAgICAgX3RoaXM4Ll9yZW1vdmVCYWNrZHJvcCgpO1xuXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAgICQodGhpcy5fYmFja2Ryb3ApLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2tSZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07IC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAgIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4gICAgX3Byb3RvLl9hZGp1c3REaWFsb2cgPSBmdW5jdGlvbiBfYWRqdXN0RGlhbG9nKCkge1xuICAgICAgdmFyIGlzTW9kYWxPdmVyZmxvd2luZyA9IHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuX3Njcm9sbGJhcldpZHRoICsgXCJweFwiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0QWRqdXN0bWVudHMgPSBmdW5jdGlvbiBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJztcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2hlY2tTY3JvbGxiYXIgPSBmdW5jdGlvbiBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgICB2YXIgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IHJlY3QubGVmdCArIHJlY3QucmlnaHQgPCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiBfc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgICAkKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSAkKGVsZW1lbnQpWzBdLnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAgICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpLmNzcygncGFkZGluZy1yaWdodCcsIHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgX3RoaXM5Ll9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICAgIH0pOyAvLyBBZGp1c3Qgc3RpY2t5IGNvbnRlbnQgbWFyZ2luXG5cbiAgICAgICAgJChTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsTWFyZ2luID0gJChlbGVtZW50KVswXS5zdHlsZS5tYXJnaW5SaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbikuY3NzKCdtYXJnaW4tcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gX3RoaXM5Ll9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICAgIH0pOyAvLyBBZGp1c3QgbmF2YmFyLXRvZ2dsZXIgbWFyZ2luXG5cbiAgICAgICAgJChTZWxlY3Rvci5OQVZCQVJfVE9HR0xFUikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgYWN0dWFsTWFyZ2luID0gJChlbGVtZW50KVswXS5zdHlsZS5tYXJnaW5SaWdodDtcbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgICAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbikuY3NzKCdtYXJnaW4tcmlnaHQnLCBwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pICsgX3RoaXM5Ll9zY3JvbGxiYXJXaWR0aCArIFwicHhcIik7XG4gICAgICAgIH0pOyAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG5cbiAgICAgICAgdmFyIGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodDtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRQYWRkaW5nID0gJCgnYm9keScpLmNzcygncGFkZGluZy1yaWdodCcpO1xuICAgICAgICAkKCdib2R5JykuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpLmNzcygncGFkZGluZy1yaWdodCcsIHBhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGggKyBcInB4XCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX3Jlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSAkKGVsZW1lbnQpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKTtcblxuICAgICAgICBpZiAodHlwZW9mIHBhZGRpbmcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnLCBwYWRkaW5nKS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBSZXN0b3JlIHN0aWNreSBjb250ZW50IGFuZCBuYXZiYXItdG9nZ2xlciBtYXJnaW5cblxuICAgICAgJChTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCArIFwiLCBcIiArIFNlbGVjdG9yLk5BVkJBUl9UT0dHTEVSKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKTtcblxuICAgICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JywgbWFyZ2luKS5yZW1vdmVEYXRhKCdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG5cbiAgICAgIHZhciBwYWRkaW5nID0gJCgnYm9keScpLmRhdGEoJ3BhZGRpbmctcmlnaHQnKTtcblxuICAgICAgaWYgKHR5cGVvZiBwYWRkaW5nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkKCdib2R5JykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgcGFkZGluZykucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFNjcm9sbGJhcldpZHRoID0gZnVuY3Rpb24gX2dldFNjcm9sbGJhcldpZHRoKCkge1xuICAgICAgLy8gdGh4IGQud2Fsc2hcbiAgICAgIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICAgICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICAgIH07IC8vIHN0YXRpY1xuXG5cbiAgICBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcsIHJlbGF0ZWRUYXJnZXQpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSAkLmV4dGVuZCh7fSwgTW9kYWwuRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCksIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtZXRob2QgbmFtZWQgXFxcIlwiICsgY29uZmlnICsgXCJcXFwiXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjcmVhdGVDbGFzcyhNb2RhbCwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIE1vZGFsO1xuICB9KCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0O1xuICAgIHZhciBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gJChzZWxlY3RvcilbMF07XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpZyA9ICQodGFyZ2V0KS5kYXRhKERBVEFfS0VZKSA/ICd0b2dnbGUnIDogJC5leHRlbmQoe30sICQodGFyZ2V0KS5kYXRhKCksICQodGhpcykuZGF0YSgpKTtcblxuICAgIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KS5vbmUoRXZlbnQuU0hPVywgZnVuY3Rpb24gKHNob3dFdmVudCkge1xuICAgICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJHRhcmdldC5vbmUoRXZlbnQuSElEREVOLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKF90aGlzMTApLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgX3RoaXMxMC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbDtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gTW9kYWw7XG59KCQpO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgKiBQb3BwZXIgLSBodHRwczovL3BvcHBlci5qcy5vcmdcbiAgICovXG4gIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcpJyk7XG4gIH1cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgdmFyIE5BTUUgPSAndG9vbHRpcCc7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy50b29sdGlwJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcbiAgdmFyIENMQVNTX1BSRUZJWCA9ICdicy10b29sdGlwJztcbiAgdmFyIEJTQ0xTX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIiArIENMQVNTX1BSRUZJWCArIFwiXFxcXFMrXCIsICdnJyk7XG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICBhbmltYXRpb246ICdib29sZWFuJyxcbiAgICB0ZW1wbGF0ZTogJ3N0cmluZycsXG4gICAgdGl0bGU6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJyxcbiAgICB0cmlnZ2VyOiAnc3RyaW5nJyxcbiAgICBkZWxheTogJyhudW1iZXJ8b2JqZWN0KScsXG4gICAgaHRtbDogJ2Jvb2xlYW4nLFxuICAgIHNlbGVjdG9yOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgcGxhY2VtZW50OiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICAgIG9mZnNldDogJyhudW1iZXJ8c3RyaW5nKScsXG4gICAgY29udGFpbmVyOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJyhzdHJpbmd8YXJyYXkpJ1xuICB9O1xuICB2YXIgQXR0YWNobWVudE1hcCA9IHtcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgVE9QOiAndG9wJyxcbiAgICBSSUdIVDogJ3JpZ2h0JyxcbiAgICBCT1RUT006ICdib3R0b20nLFxuICAgIExFRlQ6ICdsZWZ0J1xuICB9O1xuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwidG9vbHRpcFwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+JyxcbiAgICB0cmlnZ2VyOiAnaG92ZXIgZm9jdXMnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZWxheTogMCxcbiAgICBodG1sOiBmYWxzZSxcbiAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBvZmZzZXQ6IDAsXG4gICAgY29udGFpbmVyOiBmYWxzZSxcbiAgICBmYWxsYmFja1BsYWNlbWVudDogJ2ZsaXAnXG4gIH07XG4gIHZhciBIb3ZlclN0YXRlID0ge1xuICAgIFNIT1c6ICdzaG93JyxcbiAgICBPVVQ6ICdvdXQnXG4gIH07XG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVksXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVksXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSxcbiAgICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWVxuICB9O1xuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIFRPT0xUSVA6ICcudG9vbHRpcCcsXG4gICAgVE9PTFRJUF9JTk5FUjogJy50b29sdGlwLWlubmVyJyxcbiAgICBBUlJPVzogJy5hcnJvdydcbiAgfTtcbiAgdmFyIFRyaWdnZXIgPSB7XG4gICAgSE9WRVI6ICdob3ZlcicsXG4gICAgRk9DVVM6ICdmb2N1cycsXG4gICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgTUFOVUFMOiAnbWFudWFsJ1xuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBUb29sdGlwID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVG9vbHRpcChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIC8vIHByaXZhdGVcbiAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gMDtcbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fTtcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGw7IC8vIHByb3RlY3RlZFxuXG4gICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgdGhpcy5jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKTtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcblxuICAgICAgdGhpcy5fc2V0TGlzdGVuZXJzKCk7XG4gICAgfSAvLyBnZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBUb29sdGlwLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpY1xuICAgIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZUVuYWJsZWQgPSBmdW5jdGlvbiB0b2dnbGVFbmFibGVkKCkge1xuICAgICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgICB2YXIgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KTtcblxuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrO1xuXG4gICAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZXh0Ll9sZWF2ZShudWxsLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW50ZXIobnVsbCwgdGhpcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLm9mZih0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub2ZmKCdoaWRlLmJzLm1vZGFsJyk7XG5cbiAgICAgIGlmICh0aGlzLnRpcCkge1xuICAgICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faXNFbmFibGVkID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICAgICAgdGhpcy5faG92ZXJTdGF0ZSA9IG51bGw7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsO1xuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY29uZmlnID0gbnVsbDtcbiAgICAgIHRoaXMudGlwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3cgPSBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHVzZSBzaG93IG9uIHZpc2libGUgZWxlbWVudHMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XKTtcblxuICAgICAgaWYgKHRoaXMuaXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpO1xuICAgICAgICB2YXIgaXNJblRoZURvbSA9ICQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KCk7XG4gICAgICAgIHZhciB0aXBJZCA9IFV0aWwuZ2V0VUlEKHRoaXMuY29uc3RydWN0b3IuTkFNRSk7XG4gICAgICAgIHRpcC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGlwSWQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwSWQpO1xuICAgICAgICB0aGlzLnNldENvbnRlbnQoKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwbGFjZW1lbnQgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpIDogdGhpcy5jb25maWcucGxhY2VtZW50O1xuXG4gICAgICAgIHZhciBhdHRhY2htZW50ID0gdGhpcy5fZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiAkKHRoaXMuY29uZmlnLmNvbnRhaW5lcik7XG4gICAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpO1xuXG4gICAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAgICQodGlwKS5hcHBlbmRUbyhjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRCk7XG4gICAgICAgIHRoaXMuX3BvcHBlciA9IG5ldyBQb3BwZXIodGhpcy5lbGVtZW50LCB0aXAsIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IGF0dGFjaG1lbnQsXG4gICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmNvbmZpZy5mYWxsYmFja1BsYWNlbWVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IFNlbGVjdG9yLkFSUk9XXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgIT09IGRhdGEucGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRpcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpOyAvLyBpZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAkKCdib2R5JykuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5fZml4VHJhbnNpdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBwcmV2SG92ZXJTdGF0ZSA9IF90aGlzLl9ob3ZlclN0YXRlO1xuICAgICAgICAgIF90aGlzLl9ob3ZlclN0YXRlID0gbnVsbDtcbiAgICAgICAgICAkKF90aGlzLmVsZW1lbnQpLnRyaWdnZXIoX3RoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPV04pO1xuXG4gICAgICAgICAgaWYgKHByZXZIb3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgICAgX3RoaXMuX2xlYXZlKG51bGwsIF90aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkgJiYgJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgICAgJCh0aGlzLnRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUb29sdGlwLl9UUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5oaWRlID0gZnVuY3Rpb24gaGlkZShjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKTtcbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBpZiAoX3RoaXMyLl9ob3ZlclN0YXRlICE9PSBIb3ZlclN0YXRlLlNIT1cgJiYgdGlwLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICB0aXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aXApO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLl9jbGVhblRpcENsYXNzKCk7XG5cbiAgICAgICAgX3RoaXMyLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cbiAgICAgICAgJChfdGhpczIuZWxlbWVudCkudHJpZ2dlcihfdGhpczIuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKTtcblxuICAgICAgICBpZiAoX3RoaXMyLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBfdGhpczIuX3BvcHBlci5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpO1xuXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKTsgLy8gaWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG5cbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJCgnYm9keScpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2U7XG4gICAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2U7XG5cbiAgICAgIGlmIChVdGlsLnN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpICYmICQodGhpcy50aXApLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICAkKHRpcCkub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJztcbiAgICB9O1xuXG4gICAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTsgLy8gcHJvdGVjdGVkXG5cblxuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5hZGRBdHRhY2htZW50Q2xhc3MgPSBmdW5jdGlvbiBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoQ0xBU1NfUFJFRklYICsgXCItXCIgKyBhdHRhY2htZW50KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFRpcEVsZW1lbnQgPSBmdW5jdGlvbiBnZXRUaXBFbGVtZW50KCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXTtcbiAgICAgIHJldHVybiB0aGlzLnRpcDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNldENvbnRlbnQgPSBmdW5jdGlvbiBzZXRDb250ZW50KCkge1xuICAgICAgdmFyICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKTtcbiAgICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRPT0xUSVBfSU5ORVIpLCB0aGlzLmdldFRpdGxlKCkpO1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSArIFwiIFwiICsgQ2xhc3NOYW1lLlNIT1cpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2V0RWxlbWVudENvbnRlbnQgPSBmdW5jdGlvbiBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgICAgdmFyIGh0bWwgPSB0aGlzLmNvbmZpZy5odG1sO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgICAvLyBjb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgICAgaWYgKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbGVtZW50W2h0bWwgPyAnaHRtbCcgOiAndGV4dCddKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICAgIHZhciB0aXRsZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBfZ2V0QXR0YWNobWVudChwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9zZXRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfc2V0TGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKTtcbiAgICAgIHRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAkKF90aGlzMy5lbGVtZW50KS5vbihfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy50b2dnbGUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRyaWdnZXIuTUFOVUFMKSB7XG4gICAgICAgICAgdmFyIGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVIgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTjtcbiAgICAgICAgICB2YXIgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSID8gX3RoaXMzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkUgOiBfdGhpczMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVQ7XG4gICAgICAgICAgJChfdGhpczMuZWxlbWVudCkub24oZXZlbnRJbiwgX3RoaXMzLmNvbmZpZy5zZWxlY3RvciwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl9lbnRlcihldmVudCk7XG4gICAgICAgICAgfSkub24oZXZlbnRPdXQsIF90aGlzMy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fbGVhdmUoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJChfdGhpczMuZWxlbWVudCkuY2xvc2VzdCgnLm1vZGFsJykub24oJ2hpZGUuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbmZpZywge1xuICAgICAgICAgIHRyaWdnZXI6ICdtYW51YWwnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ZpeFRpdGxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VGl0bGUgPSBmdW5jdGlvbiBfZml4VGl0bGUoKSB7XG4gICAgICB2YXIgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKTtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2VudGVyID0gZnVuY3Rpb24gX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgICB2YXIgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVk7XG4gICAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSk7XG5cbiAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoZXZlbnQuY3VycmVudFRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSk7XG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbZXZlbnQudHlwZSA9PT0gJ2ZvY3VzaW4nID8gVHJpZ2dlci5GT0NVUyA6IFRyaWdnZXIuSE9WRVJdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCQoY29udGV4dC5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSB8fCBjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLlNIT1cpIHtcbiAgICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPVztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dCk7XG4gICAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XO1xuXG4gICAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICAgIGNvbnRleHQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9sZWF2ZSA9IGZ1bmN0aW9uIF9sZWF2ZShldmVudCwgY29udGV4dCkge1xuICAgICAgdmFyIGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZO1xuICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpO1xuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGV2ZW50LmN1cnJlbnRUYXJnZXQsIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKCkpO1xuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW2V2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUl0gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dChjb250ZXh0Ll90aW1lb3V0KTtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVDtcblxuICAgICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICAgIGNvbnRleHQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9pc1dpdGhBY3RpdmVUcmlnZ2VyID0gZnVuY3Rpb24gX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgICBmb3IgKHZhciB0cmlnZ2VyIGluIHRoaXMuX2FjdGl2ZVRyaWdnZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHQsICQodGhpcy5lbGVtZW50KS5kYXRhKCksIGNvbmZpZyk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25maWcuZGVsYXkgPSB7XG4gICAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICAgIGhpZGU6IGNvbmZpZy5kZWxheVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uZmlnLnRpdGxlID0gY29uZmlnLnRpdGxlLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0RGVsZWdhdGVDb25maWcgPSBmdW5jdGlvbiBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgICB2YXIgY29uZmlnID0ge307XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2tleV0gIT09IHRoaXMuY29uZmlnW2tleV0pIHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldID0gdGhpcy5jb25maWdba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9jbGVhblRpcENsYXNzID0gZnVuY3Rpb24gX2NsZWFuVGlwQ2xhc3MoKSB7XG4gICAgICB2YXIgJHRpcCA9ICQodGhpcy5nZXRUaXBFbGVtZW50KCkpO1xuICAgICAgdmFyIHRhYkNsYXNzID0gJHRpcC5hdHRyKCdjbGFzcycpLm1hdGNoKEJTQ0xTX1BSRUZJWF9SRUdFWCk7XG5cbiAgICAgIGlmICh0YWJDbGFzcyAhPT0gbnVsbCAmJiB0YWJDbGFzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8uX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSA9IGZ1bmN0aW9uIF9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSkge1xuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpO1xuXG4gICAgICB0aGlzLmFkZEF0dGFjaG1lbnRDbGFzcyh0aGlzLl9nZXRBdHRhY2htZW50KGRhdGEucGxhY2VtZW50KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZml4VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9maXhUcmFuc2l0aW9uKCkge1xuICAgICAgdmFyIHRpcCA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpO1xuICAgICAgdmFyIGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb247XG5cbiAgICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb247XG4gICAgfTsgLy8gc3RhdGljXG5cblxuICAgIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUNsYXNzKFRvb2x0aXAsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIk5BTUVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG5cbiAgJC5mbltOQU1FXSA9IFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRvb2x0aXA7XG5cbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgcmV0dXJuIFRvb2x0aXAuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVG9vbHRpcDtcbn0oJCwgUG9wcGVyKTtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYmV0YS4yKTogcG9wb3Zlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIFBvcG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIE5BTUUgPSAncG9wb3Zlcic7XG4gIHZhciBWRVJTSU9OID0gJzQuMC4wLWJldGEuMic7XG4gIHZhciBEQVRBX0tFWSA9ICdicy5wb3BvdmVyJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgQ0xBU1NfUFJFRklYID0gJ2JzLXBvcG92ZXInO1xuICB2YXIgQlNDTFNfUFJFRklYX1JFR0VYID0gbmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgQ0xBU1NfUFJFRklYICsgXCJcXFxcUytcIiwgJ2cnKTtcbiAgdmFyIERlZmF1bHQgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5EZWZhdWx0LCB7XG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHRyaWdnZXI6ICdjbGljaycsXG4gICAgY29udGVudDogJycsXG4gICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwicG9wb3ZlclwiIHJvbGU9XCJ0b29sdGlwXCI+JyArICc8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj4nICsgJzxoMyBjbGFzcz1cInBvcG92ZXItaGVhZGVyXCI+PC9oMz4nICsgJzxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG4gIH0pO1xuICB2YXIgRGVmYXVsdFR5cGUgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5EZWZhdWx0VHlwZSwge1xuICAgIGNvbnRlbnQ6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xuICB9KTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBGQURFOiAnZmFkZScsXG4gICAgU0hPVzogJ3Nob3cnXG4gIH07XG4gIHZhciBTZWxlY3RvciA9IHtcbiAgICBUSVRMRTogJy5wb3BvdmVyLWhlYWRlcicsXG4gICAgQ09OVEVOVDogJy5wb3BvdmVyLWJvZHknXG4gIH07XG4gIHZhciBFdmVudCA9IHtcbiAgICBISURFOiBcImhpZGVcIiArIEVWRU5UX0tFWSxcbiAgICBISURERU46IFwiaGlkZGVuXCIgKyBFVkVOVF9LRVksXG4gICAgU0hPVzogXCJzaG93XCIgKyBFVkVOVF9LRVksXG4gICAgU0hPV046IFwic2hvd25cIiArIEVWRU5UX0tFWSxcbiAgICBJTlNFUlRFRDogXCJpbnNlcnRlZFwiICsgRVZFTlRfS0VZLFxuICAgIENMSUNLOiBcImNsaWNrXCIgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNJTjogXCJmb2N1c2luXCIgKyBFVkVOVF9LRVksXG4gICAgRk9DVVNPVVQ6IFwiZm9jdXNvdXRcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUVOVEVSOiBcIm1vdXNlZW50ZXJcIiArIEVWRU5UX0tFWSxcbiAgICBNT1VTRUxFQVZFOiBcIm1vdXNlbGVhdmVcIiArIEVWRU5UX0tFWVxuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIENsYXNzIERlZmluaXRpb25cbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKi9cblxuICB9O1xuXG4gIHZhciBQb3BvdmVyID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1Rvb2x0aXApIHtcbiAgICBpbmhlcml0c0xvb3NlKFBvcG92ZXIsIF9Ub29sdGlwKTtcblxuICAgIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgICByZXR1cm4gX1Rvb2x0aXAuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQb3BvdmVyLnByb3RvdHlwZTtcblxuICAgIC8vIG92ZXJyaWRlc1xuICAgIF9wcm90by5pc1dpdGhDb250ZW50ID0gZnVuY3Rpb24gaXNXaXRoQ29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRpdGxlKCkgfHwgdGhpcy5fZ2V0Q29udGVudCgpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uYWRkQXR0YWNobWVudENsYXNzID0gZnVuY3Rpb24gYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKENMQVNTX1BSRUZJWCArIFwiLVwiICsgYXR0YWNobWVudCk7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRUaXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0VGlwRWxlbWVudCgpIHtcbiAgICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF07XG4gICAgICByZXR1cm4gdGhpcy50aXA7XG4gICAgfTtcblxuICAgIF9wcm90by5zZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudCgpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7IC8vIHdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcblxuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuVElUTEUpLCB0aGlzLmdldFRpdGxlKCkpO1xuICAgICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuQ09OVEVOVCksIHRoaXMuX2dldENvbnRlbnQoKSk7XG4gICAgICAkdGlwLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFICsgXCIgXCIgKyBDbGFzc05hbWUuU0hPVyk7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbnRlbnQgPSBmdW5jdGlvbiBfZ2V0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSB8fCAodHlwZW9mIHRoaXMuY29uZmlnLmNvbnRlbnQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5jb250ZW50LmNhbGwodGhpcy5lbGVtZW50KSA6IHRoaXMuY29uZmlnLmNvbnRlbnQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFuVGlwQ2xhc3MgPSBmdW5jdGlvbiBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICAgIHZhciAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSk7XG4gICAgICB2YXIgdGFiQ2xhc3MgPSAkdGlwLmF0dHIoJ2NsYXNzJykubWF0Y2goQlNDTFNfUFJFRklYX1JFR0VYKTtcblxuICAgICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfTsgLy8gc3RhdGljXG5cblxuICAgIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgIHZhciBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsO1xuXG4gICAgICAgIGlmICghZGF0YSAmJiAvZGVzdHJveXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFBvcG92ZXIodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUNsYXNzKFBvcG92ZXIsIG51bGwsIFt7XG4gICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgLy8gZ2V0dGVyc1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIk5BTUVcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gTkFNRTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiREFUQV9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gREFUQV9LRVk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkV2ZW50XCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIEV2ZW50O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJFVkVOVF9LRVlcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRVZFTlRfS0VZO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJEZWZhdWx0VHlwZVwiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBEZWZhdWx0VHlwZTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFBvcG92ZXI7XG4gIH0oVG9vbHRpcCk7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogalF1ZXJ5XG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQuZm5bTkFNRV0gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQb3BvdmVyO1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIFBvcG92ZXI7XG59KCQpO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhLjIpOiBzY3JvbGxzcHkuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbnZhciBTY3JvbGxTcHkgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29uc3RhbnRzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIE5BTUUgPSAnc2Nyb2xsc3B5JztcbiAgdmFyIFZFUlNJT04gPSAnNC4wLjAtYmV0YS4yJztcbiAgdmFyIERBVEFfS0VZID0gJ2JzLnNjcm9sbHNweSc7XG4gIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICB2YXIgRGVmYXVsdCA9IHtcbiAgICBvZmZzZXQ6IDEwLFxuICAgIG1ldGhvZDogJ2F1dG8nLFxuICAgIHRhcmdldDogJydcbiAgfTtcbiAgdmFyIERlZmF1bHRUeXBlID0ge1xuICAgIG9mZnNldDogJ251bWJlcicsXG4gICAgbWV0aG9kOiAnc3RyaW5nJyxcbiAgICB0YXJnZXQ6ICcoc3RyaW5nfGVsZW1lbnQpJ1xuICB9O1xuICB2YXIgRXZlbnQgPSB7XG4gICAgQUNUSVZBVEU6IFwiYWN0aXZhdGVcIiArIEVWRU5UX0tFWSxcbiAgICBTQ1JPTEw6IFwic2Nyb2xsXCIgKyBFVkVOVF9LRVksXG4gICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVlcbiAgfTtcbiAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9JVEVNOiAnZHJvcGRvd24taXRlbScsXG4gICAgRFJPUERPV05fTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxuICAgIEFDVElWRTogJ2FjdGl2ZSdcbiAgfTtcbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIERBVEFfU1BZOiAnW2RhdGEtc3B5PVwic2Nyb2xsXCJdJyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBOQVZfTElTVF9HUk9VUDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgICBOQVZfTElOS1M6ICcubmF2LWxpbmsnLFxuICAgIE5BVl9JVEVNUzogJy5uYXYtaXRlbScsXG4gICAgTElTVF9JVEVNUzogJy5saXN0LWdyb3VwLWl0ZW0nLFxuICAgIERST1BET1dOOiAnLmRyb3Bkb3duJyxcbiAgICBEUk9QRE9XTl9JVEVNUzogJy5kcm9wZG93bi1pdGVtJyxcbiAgICBEUk9QRE9XTl9UT0dHTEU6ICcuZHJvcGRvd24tdG9nZ2xlJ1xuICB9O1xuICB2YXIgT2Zmc2V0TWV0aG9kID0ge1xuICAgIE9GRlNFVDogJ29mZnNldCcsXG4gICAgUE9TSVRJT046ICdwb3NpdGlvbidcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgU2Nyb2xsU3B5ID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50O1xuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICB0aGlzLl9zZWxlY3RvciA9IHRoaXMuX2NvbmZpZy50YXJnZXQgKyBcIiBcIiArIFNlbGVjdG9yLk5BVl9MSU5LUyArIFwiLFwiICsgKHRoaXMuX2NvbmZpZy50YXJnZXQgKyBcIiBcIiArIFNlbGVjdG9yLkxJU1RfSVRFTVMgKyBcIixcIikgKyAodGhpcy5fY29uZmlnLnRhcmdldCArIFwiIFwiICsgU2VsZWN0b3IuRFJPUERPV05fSVRFTVMpO1xuICAgICAgdGhpcy5fb2Zmc2V0cyA9IFtdO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDA7XG4gICAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEV2ZW50LlNDUk9MTCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5fcHJvY2VzcyhldmVudCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgICB0aGlzLl9wcm9jZXNzKCk7XG4gICAgfSAvLyBnZXR0ZXJzXG5cblxuICAgIHZhciBfcHJvdG8gPSBTY3JvbGxTcHkucHJvdG90eXBlO1xuXG4gICAgLy8gcHVibGljXG4gICAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhdXRvTWV0aG9kID0gdGhpcy5fc2Nyb2xsRWxlbWVudCAhPT0gdGhpcy5fc2Nyb2xsRWxlbWVudC53aW5kb3cgPyBPZmZzZXRNZXRob2QuUE9TSVRJT04gOiBPZmZzZXRNZXRob2QuT0ZGU0VUO1xuICAgICAgdmFyIG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJyA/IGF1dG9NZXRob2QgOiB0aGlzLl9jb25maWcubWV0aG9kO1xuICAgICAgdmFyIG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE9mZnNldE1ldGhvZC5QT1NJVElPTiA/IHRoaXMuX2dldFNjcm9sbFRvcCgpIDogMDtcbiAgICAgIHRoaXMuX29mZnNldHMgPSBbXTtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBbXTtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpO1xuICAgICAgdmFyIHRhcmdldHMgPSAkLm1ha2VBcnJheSgkKHRoaXMuX3NlbGVjdG9yKSk7XG4gICAgICB0YXJnZXRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuICAgICAgICB2YXIgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gJCh0YXJnZXRTZWxlY3RvcilbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdmFyIHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gdG9kbyAoZmF0KTogcmVtb3ZlIHNrZXRjaCByZWxpYW5jZSBvbiBqUXVlcnkgcG9zaXRpb24vb2Zmc2V0XG4gICAgICAgICAgICByZXR1cm4gWyQodGFyZ2V0KVtvZmZzZXRNZXRob2RdKCkudG9wICsgb2Zmc2V0QmFzZSwgdGFyZ2V0U2VsZWN0b3JdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYVswXSAtIGJbMF07XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIF90aGlzMi5fb2Zmc2V0cy5wdXNoKGl0ZW1bMF0pO1xuXG4gICAgICAgIF90aGlzMi5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpO1xuICAgICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IG51bGw7XG4gICAgICB0aGlzLl9zZWxlY3RvciA9IG51bGw7XG4gICAgICB0aGlzLl9vZmZzZXRzID0gbnVsbDtcbiAgICAgIHRoaXMuX3RhcmdldHMgPSBudWxsO1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IG51bGw7XG4gICAgfTsgLy8gcHJpdmF0ZVxuXG5cbiAgICBfcHJvdG8uX2dldENvbmZpZyA9IGZ1bmN0aW9uIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgICBjb25maWcgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgY29uZmlnKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaWQgPSAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgIGlkID0gVXRpbC5nZXRVSUQoTkFNRSk7XG4gICAgICAgICAgJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy50YXJnZXQgPSBcIiNcIiArIGlkO1xuICAgICAgfVxuXG4gICAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsVG9wID0gZnVuY3Rpb24gX2dldFNjcm9sbFRvcCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0U2Nyb2xsSGVpZ2h0ID0gZnVuY3Rpb24gX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCB8fCBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCk7XG4gICAgfTtcblxuICAgIF9wcm90by5fZ2V0T2Zmc2V0SGVpZ2h0ID0gZnVuY3Rpb24gX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9O1xuXG4gICAgX3Byb3RvLl9wcm9jZXNzID0gZnVuY3Rpb24gX3Byb2Nlc3MoKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5fZ2V0U2Nyb2xsVG9wKCkgKyB0aGlzLl9jb25maWcub2Zmc2V0O1xuXG4gICAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KCk7XG5cbiAgICAgIHZhciBtYXhTY3JvbGwgPSB0aGlzLl9jb25maWcub2Zmc2V0ICsgc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCA+PSBtYXhTY3JvbGwpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldHNbdGhpcy5fdGFyZ2V0cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgIHZhciBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJiBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJiAodHlwZW9mIHRoaXMuX29mZnNldHNbaSArIDFdID09PSAndW5kZWZpbmVkJyB8fCBzY3JvbGxUb3AgPCB0aGlzLl9vZmZzZXRzW2kgKyAxXSk7XG5cbiAgICAgICAgaWYgKGlzQWN0aXZlVGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLl9hY3RpdmF0ZSA9IGZ1bmN0aW9uIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldDtcblxuICAgICAgdGhpcy5fY2xlYXIoKTtcblxuICAgICAgdmFyIHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3Rvci5zcGxpdCgnLCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuXG5cbiAgICAgIHF1ZXJpZXMgPSBxdWVyaWVzLm1hcChmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yICsgXCJbZGF0YS10YXJnZXQ9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXSxcIiArIChzZWxlY3RvciArIFwiW2hyZWY9XFxcIlwiICsgdGFyZ2V0ICsgXCJcXFwiXVwiKTtcbiAgICAgIH0pO1xuICAgICAgdmFyICRsaW5rID0gJChxdWVyaWVzLmpvaW4oJywnKSk7XG5cbiAgICAgIGlmICgkbGluay5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUERPV05fSVRFTSkpIHtcbiAgICAgICAgJGxpbmsuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTikuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB0cmlnZ2VyZWQgbGluayBhcyBhY3RpdmVcbiAgICAgICAgJGxpbmsuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7IC8vIFNldCB0cmlnZ2VyZWQgbGlua3MgcGFyZW50cyBhcyBhY3RpdmVcbiAgICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3Rvci5OQVZfTElOS1MgKyBcIiwgXCIgKyBTZWxlY3Rvci5MSVNUX0lURU1TKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTsgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG5cbiAgICAgICAgJGxpbmsucGFyZW50cyhTZWxlY3Rvci5OQVZfTElTVF9HUk9VUCkucHJldihTZWxlY3Rvci5OQVZfSVRFTVMpLmNoaWxkcmVuKFNlbGVjdG9yLk5BVl9MSU5LUykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFdmVudC5BQ1RJVkFURSwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0YXJnZXRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NsZWFyID0gZnVuY3Rpb24gX2NsZWFyKCkge1xuICAgICAgJCh0aGlzLl9zZWxlY3RvcikuZmlsdGVyKFNlbGVjdG9yLkFDVElWRSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgfTsgLy8gc3RhdGljXG5cblxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUNsYXNzKFNjcm9sbFNweSwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gRGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNjcm9sbFNweTtcbiAgfSgpO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuXG4gICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNjcm9sbFNweXMgPSAkLm1ha2VBcnJheSgkKFNlbGVjdG9yLkRBVEFfU1BZKSk7XG5cbiAgICBmb3IgKHZhciBpID0gc2Nyb2xsU3B5cy5sZW5ndGg7IGktLTspIHtcbiAgICAgIHZhciAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKTtcblxuICAgICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSk7XG4gICAgfVxuICB9KTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBqUXVlcnlcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZTtcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweTtcblxuICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICByZXR1cm4gU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2U7XG4gIH07XG5cbiAgcmV0dXJuIFNjcm9sbFNweTtcbn0oJCk7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMC4wLWJldGEuMik6IHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIFRhYiA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb25zdGFudHNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgTkFNRSA9ICd0YWInO1xuICB2YXIgVkVSU0lPTiA9ICc0LjAuMC1iZXRhLjInO1xuICB2YXIgREFUQV9LRVkgPSAnYnMudGFiJztcbiAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gIHZhciBUUkFOU0lUSU9OX0RVUkFUSU9OID0gMTUwO1xuICB2YXIgRXZlbnQgPSB7XG4gICAgSElERTogXCJoaWRlXCIgKyBFVkVOVF9LRVksXG4gICAgSElEREVOOiBcImhpZGRlblwiICsgRVZFTlRfS0VZLFxuICAgIFNIT1c6IFwic2hvd1wiICsgRVZFTlRfS0VZLFxuICAgIFNIT1dOOiBcInNob3duXCIgKyBFVkVOVF9LRVksXG4gICAgQ0xJQ0tfREFUQV9BUEk6IFwiY2xpY2tcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWVxuICB9O1xuICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgIERST1BET1dOX01FTlU6ICdkcm9wZG93bi1tZW51JyxcbiAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgIERJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgICBTSE9XOiAnc2hvdydcbiAgfTtcbiAgdmFyIFNlbGVjdG9yID0ge1xuICAgIERST1BET1dOOiAnLmRyb3Bkb3duJyxcbiAgICBOQVZfTElTVF9HUk9VUDogJy5uYXYsIC5saXN0LWdyb3VwJyxcbiAgICBBQ1RJVkU6ICcuYWN0aXZlJyxcbiAgICBBQ1RJVkVfVUw6ICc+IGxpID4gLmFjdGl2ZScsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLXRvZ2dsZT1cImxpc3RcIl0nLFxuICAgIERST1BET1dOX1RPR0dMRTogJy5kcm9wZG93bi10b2dnbGUnLFxuICAgIERST1BET1dOX0FDVElWRV9DSElMRDogJz4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcbiAgICAvKipcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICovXG5cbiAgfTtcblxuICB2YXIgVGFiID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGFiKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH0gLy8gZ2V0dGVyc1xuXG5cbiAgICB2YXIgX3Byb3RvID0gVGFiLnByb3RvdHlwZTtcblxuICAgIC8vIHB1YmxpY1xuICAgIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiYgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB2YXIgcHJldmlvdXM7XG4gICAgICB2YXIgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWX0xJU1RfR1JPVVApWzBdO1xuICAgICAgdmFyIHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpO1xuXG4gICAgICBpZiAobGlzdEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGl0ZW1TZWxlY3RvciA9IGxpc3RFbGVtZW50Lm5vZGVOYW1lID09PSAnVUwnID8gU2VsZWN0b3IuQUNUSVZFX1VMIDogU2VsZWN0b3IuQUNUSVZFO1xuICAgICAgICBwcmV2aW91cyA9ICQubWFrZUFycmF5KCQobGlzdEVsZW1lbnQpLmZpbmQoaXRlbVNlbGVjdG9yKSk7XG4gICAgICAgIHByZXZpb3VzID0gcHJldmlvdXNbcHJldmlvdXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSk7XG4gICAgICB2YXIgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZUV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudCk7XG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl9lbGVtZW50LCBsaXN0RWxlbWVudCk7XG5cbiAgICAgIHZhciBjb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICB2YXIgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJRERFTiwge1xuICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IF90aGlzLl9lbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgICB9KTtcbiAgICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudCk7XG4gICAgICAgICQoX3RoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5kaXNwb3NlID0gZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSk7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgICB9OyAvLyBwcml2YXRlXG5cblxuICAgIF9wcm90by5fYWN0aXZhdGUgPSBmdW5jdGlvbiBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVFbGVtZW50cztcblxuICAgICAgaWYgKGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ1VMJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50cyA9ICQoY29udGFpbmVyKS5maW5kKFNlbGVjdG9yLkFDVElWRV9VTCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVFbGVtZW50cyA9ICQoY29udGFpbmVyKS5jaGlsZHJlbihTZWxlY3Rvci5BQ1RJVkUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF07XG4gICAgICB2YXIgaXNUcmFuc2l0aW9uaW5nID0gY2FsbGJhY2sgJiYgVXRpbC5zdXBwb3J0c1RyYW5zaXRpb25FbmQoKSAmJiBhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKTtcblxuICAgICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGlzVHJhbnNpdGlvbmluZywgY2FsbGJhY2spO1xuICAgICAgfTtcblxuICAgICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgJChhY3RpdmUpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoVFJBTlNJVElPTl9EVVJBVElPTik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5fdHJhbnNpdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gX3RyYW5zaXRpb25Db21wbGV0ZShlbGVtZW50LCBhY3RpdmUsIGlzVHJhbnNpdGlvbmluZywgY2FsbGJhY2spIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgJChhY3RpdmUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB2YXIgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICAgIGFjdGl2ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcblxuICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyb2xlJykgPT09ICd0YWInKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgVXRpbC5yZWZsb3coZWxlbWVudCk7XG4gICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRkFERSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgJChlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgICB2YXIgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgICAgJChkcm9wZG93bkVsZW1lbnQpLmZpbmQoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07IC8vIHN0YXRpY1xuXG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKTtcbiAgICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWV0aG9kIG5hbWVkIFxcXCJcIiArIGNvbmZpZyArIFwiXFxcIlwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUNsYXNzKFRhYiwgbnVsbCwgW3tcbiAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBUYWI7XG4gIH0oKTtcbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cblxuICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93Jyk7XG4gIH0pO1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIGpRdWVyeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlO1xuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiO1xuXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZTtcbiAgfTtcblxuICByZXR1cm4gVGFiO1xufSgkKTtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4wLjAtYWxwaGEuNik6IGluZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0LicpO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XG4gIHZhciBtaW5NYWpvciA9IDE7XG4gIHZhciBsdE1ham9yID0gMjtcbiAgdmFyIG1pbk1pbm9yID0gOTtcbiAgdmFyIG1pblBhdGNoID0gMTtcbiAgdmFyIG1heE1ham9yID0gNDtcblxuICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICB9XG59KSgkKTtcblxuZXhwb3J0cy5VdGlsID0gVXRpbDtcbmV4cG9ydHMuQWxlcnQgPSBBbGVydDtcbmV4cG9ydHMuQnV0dG9uID0gQnV0dG9uO1xuZXhwb3J0cy5DYXJvdXNlbCA9IENhcm91c2VsO1xuZXhwb3J0cy5Db2xsYXBzZSA9IENvbGxhcHNlO1xuZXhwb3J0cy5Ecm9wZG93biA9IERyb3Bkb3duO1xuZXhwb3J0cy5Nb2RhbCA9IE1vZGFsO1xuZXhwb3J0cy5Qb3BvdmVyID0gUG9wb3ZlcjtcbmV4cG9ydHMuU2Nyb2xsc3B5ID0gU2Nyb2xsU3B5O1xuZXhwb3J0cy5UYWIgPSBUYWI7XG5leHBvcnRzLlRvb2x0aXAgPSBUb29sdGlwO1xuXG5yZXR1cm4gZXhwb3J0cztcblxufSh7fSwkKSk7XG5cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=