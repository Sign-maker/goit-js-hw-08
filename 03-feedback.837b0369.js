function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,u,a,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function E(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function b(e){return c=e,u=setTimeout(O,t),l?E(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=i}function O(){var e=m();if(T(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-a);return s?v(n,i-(e-c)):n}(e))}function h(e){return u=void 0,p&&o?E(e):(o=r=void 0,f)}function S(){var e=m(),n=T(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return b(a);if(s)return u=setTimeout(O,t),E(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=g(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},S.flush=function(){return void 0===u?f:h(m())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const E={VIDEOPLAYER_CURRENT_TIME:"videoplayer-current-time",FEEDBACK_FORM_STATE:"feedback-form-state"},b=document.querySelector(".feedback-form");var T;const O=null!==(T=JSON.parse(localStorage.getItem(E.FEEDBACK_FORM_STATE)))&&void 0!==T?T:{};function h(e,t){const n=Object.keys(e);n.length&&("readKeysToForm"===t&&n.forEach((t=>{b.elements[t].value=e[t]})),"removeKeys"===t&&n.forEach((t=>delete e[t])))}h(O,"readKeysToForm"),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),h(O,"removeKeys"),e.target.reset(),localStorage.removeItem(E.FEEDBACK_FORM_STATE)})),b.addEventListener("input",e(t)((function({target:e}){O[e.name]=e.value,localStorage.setItem(E.FEEDBACK_FORM_STATE,JSON.stringify(O))}),500));
//# sourceMappingURL=03-feedback.837b0369.js.map
