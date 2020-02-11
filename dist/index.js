(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(1);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(2),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./src/components/part.js


function Part(props) {
  var currentPartRef = props.currentPartRef,
      prevPartRef = props.prevPartRef,
      nextPartRef = props.nextPartRef,
      val = props.val,
      setVal = props.setVal,
      onChange = props.onChange,
      maxValue = props.maxValue;
  var maxFirstDigit = Object(react["useMemo"])(function getFirstDigit() {
    return Math.floor(maxValue / 10);
  }, [maxValue]);

  function handleChange(event) {
    var inputValue = event.target.value;

    if (inputValue == '') {
      setVal('');
      return;
    }

    if (!/^\d{1,2}$/.test(inputValue)) {
      return;
    }

    var inputIntValue = parseInt(inputValue, 10);
    var newValue;
    var shouldFocusNext = false; // handle the first digit

    if (inputValue.length == 1) {
      // currently empty, the input cannot be first digit (e.g 9 for minutes -> 09)
      if (inputIntValue > maxFirstDigit) {
        newValue = "0".concat(inputIntValue);
        shouldFocusNext = true; // clear input, no transformation required
      } else {
        newValue = inputIntValue.toString();
      } // handle the second digit

    } else if (inputValue.length == 2) {
      if (inputIntValue <= maxValue) {
        // if started typing with leading 0
        if (inputValue[0] == '0') {
          // potentially rare case. there is a 0 already in the text field and
          // the input is another 0. consider it's 0 afterball, should focus
          // next part.
          if (inputIntValue == 0) {
            newValue = '0';
          } else {
            newValue = "0".concat(inputIntValue);
          }
        } else {
          newValue = inputIntValue;
        } // if the result number is higher than max value, use max value

      } else {
        newValue = maxValue;
      }

      shouldFocusNext = true; // handle the third digit (when the value is already filled and you start typing over)
    } else if (inputValue.length == 3) {
      var firstNewDigit = parseInt(inputValue.substring(2), 10);

      if (firstNewDigit > maxFirstDigit) {
        newValue = "0".concat(firstNewDigit);
        shouldFocusNext = true; // clear input, no transformation required
      } else {
        newValue = firstNewDigit.toString();
      } // empty input

    } else {
      newValue = inputValue;
    }

    setVal(newValue);
    onChange(newValue);

    if (shouldFocusNext) {
      if (nextPartRef && nextPartRef.current) {
        nextPartRef.current.focus();
        nextPartRef.current.select();
      } else {
        currentPartRef.current.blur();
      }
    }

    return true;
  }

  function handleKeyDown(event) {
    var keyCode = event.keyCode;
    var isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (!isArrowKey) {
      return;
    }

    event.preventDefault();
    var intVal = parseInt(val);
    var newValue;

    if (event.keyCode == 37) {
      if (prevPartRef) {
        prevPartRef.current.focus();
      }

      return;
    } else if (event.keyCode == 38) {
      if (!intVal) {
        newValue = 1;
      } else if (intVal < maxValue) {
        newValue = intVal + 1;
      } else {
        return;
      }
    } else if (event.keyCode == 39) {
      if (nextPartRef) {
        nextPartRef.current.focus();
      }

      return;
    } else if (event.keyCode == 40) {
      // todo empty input
      if (intVal > 0) {
        newValue = intVal - 1;
      } else {
        return;
      }
    }

    setVal("".concat(newValue));
    onChange("".concat(newValue));
  }

  function handleClick() {
    currentPartRef.current.select();
  }

  return react_default.a.createElement("input", {
    className: "tiny-time-picker_input",
    ref: currentPartRef,
    value: val,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    onChange: handleChange
  });
}

/* harmony default export */ var part = (Part);
// CONCATENATED MODULE: ./src/components/amPmPart.js


function amPmPart_Part(props) {
  var currentPartRef = props.currentPartRef,
      prevPartRef = props.prevPartRef,
      val = props.val,
      setVal = props.setVal,
      onChange = props.onChange;

  function handleChange(event) {
    var value = event.target.value;
    setVal(value);
    onChange(value);
  }

  function handleKeyDown(event) {
    var keyCode = event.keyCode;
    var isArrowKey = keyCode >= 37 && keyCode <= 40;

    if (!isArrowKey) {
      return;
    }

    event.preventDefault();
    var newValue;

    if (event.keyCode == 37) {
      if (prevPartRef) {
        prevPartRef.current.focus();
      }

      return;
    } else if (event.keyCode == 38) {
      if (val == 'pm') {
        newValue = 'am';
      } else {
        return;
      }
    } else if (event.keyCode == 39) {
      return;
    } else if (event.keyCode == 40) {
      if (val == 'am') {
        newValue = 'pm';
      } else {
        return;
      }
    }

    setVal(newValue);
    onChange(newValue);
  }

  return react_default.a.createElement("select", {
    className: "tiny-time-picker_input --ampm",
    ref: currentPartRef,
    value: val,
    onKeyDown: handleKeyDown,
    onChange: handleChange
  }, react_default.a.createElement("option", {
    vlaue: "am"
  }, "am"), react_default.a.createElement("option", {
    vlaue: "pm"
  }, "pm"));
}

/* harmony default export */ var amPmPart = (amPmPart_Part);
// CONCATENATED MODULE: ./src/tinyTimePicker.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var formatRegexp = /^(\d{1,2}):(\d{1,2}):(\d{1,2})( [ap]m)?$/i;

function tinyTimePicker_buildValue(hours, minutes, seconds, ampm) {
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds, " ").concat(ampm);
}

function TinyTimePicker(props) {
  var name = props.name,
      defaultValue = props.defaultValue,
      width = props.width,
      _props$use12Hours = props.use12Hours,
      use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
      onChange = props.onChange;
  var componentRef = Object(react["useRef"])();
  var hoursSelectorRef = Object(react["useRef"])();
  var minutesSelectorRef = Object(react["useRef"])();
  var secondsSelectorRef = Object(react["useRef"])();
  var ampmSelectorRef = Object(react["useRef"])();

  var _useState = Object(react["useState"])(defaultValue ? defaultValue : '00:00:00 am'),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var match = formatRegexp.exec(value);

  var _match = _slicedToArray(match, 5),
      hours = _match[1],
      minutes = _match[2],
      seconds = _match[3],
      ampm = _match[4];

  var _useState3 = Object(react["useState"])(hours),
      _useState4 = _slicedToArray(_useState3, 2),
      hoursValue = _useState4[0],
      setHoursValue = _useState4[1];

  var _useState5 = Object(react["useState"])(minutes),
      _useState6 = _slicedToArray(_useState5, 2),
      minutesValue = _useState6[0],
      setMinutesValue = _useState6[1];

  var _useState7 = Object(react["useState"])(seconds),
      _useState8 = _slicedToArray(_useState7, 2),
      secondsValue = _useState8[0],
      setSecondsValue = _useState8[1];

  var _useState9 = Object(react["useState"])(ampm),
      _useState10 = _slicedToArray(_useState9, 2),
      ampmValue = _useState10[0],
      setAmpmValue = _useState10[1];

  function buildValue(h, m, s, ampm) {
    return "".concat(h, ":").concat(m, ":").concat(s).concat(use12Hours ? " ".concat(ampm) : '');
  }

  function handleChange(h, m, s, ampm) {
    if (onChange) {
      onChange(buildValue(h, m, s, ampm));
    }
  }

  return react_default.a.createElement("div", {
    ref: componentRef,
    className: "tiny-time-picker",
    style: {
      width: "".concat(width || 160, "px")
    }
  }, react_default.a.createElement(part, {
    currentPartRef: hoursSelectorRef,
    nextPartRef: minutesSelectorRef,
    val: hoursValue,
    setVal: setHoursValue,
    onChange: function onChange(h) {
      return handleChange(h, minutesValue, secondsValue, ampmValue);
    },
    maxValue: use12Hours ? 12 : 23
  }), react_default.a.createElement(part, {
    currentPartRef: minutesSelectorRef,
    prevPartRef: hoursSelectorRef,
    nextPartRef: secondsSelectorRef,
    val: minutesValue,
    setVal: setMinutesValue,
    onChange: function onChange(m) {
      return handleChange(hoursValue, m, secondsValue, ampmValue);
    },
    maxValue: 59
  }), react_default.a.createElement(part, {
    currentPartRef: secondsSelectorRef,
    prevPartRef: minutesSelectorRef,
    nextPartRef: ampmSelectorRef,
    val: secondsValue,
    setVal: setSecondsValue,
    onChange: function onChange(s) {
      return handleChange(hoursValue, minutesValue, s, ampmValue);
    },
    maxValue: 59
  }), use12Hours && react_default.a.createElement(amPmPart, {
    currentPartRef: ampmSelectorRef,
    prevPartRef: secondsSelectorRef,
    val: ampmValue,
    setVal: setAmpmValue,
    onChange: function onChange(ampm) {
      return handleChange(hoursValue, minutesValue, secondsValue, ampm);
    }
  }));
}

/* harmony default export */ var tinyTimePicker = (TinyTimePicker);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return tinyTimePicker; });


/***/ })
/******/ ])));