!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return s.Date.now()};function m(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(w,t),d?m(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=y();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function S(e){return a=void 0,v&&o?m(e):(o=i=void 0,f)}function T(){var e=y(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(w,t),m(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?f:S(y())},T}function g(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})};var O,h=document.querySelector(".feedback-form"),w="feedback-form-state",S=null!==(O=JSON.parse(localStorage.getItem(w)))&&void 0!==O?O:{};Object.keys(S).forEach((function(e){e&&(h.elements[e].value=S[e])})),h.addEventListener("input",e(t)((function(e){var t=e.target;S[t.name]=t.value,localStorage.setItem(w,JSON.stringify(S))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),Object.keys(S).forEach((function(e){return delete S[e]})),e.target.reset(),localStorage.removeItem(w)}))}();
//# sourceMappingURL=03-feedback.b079838f.js.map
