!function(){"use strict";var e={};e.parse=function(e){return"string"!=typeof e?{}:(e=e.trim().replace(/^(\?|#)/,""),e?e.trim().split("&").reduce(function(e,n){var o=n.replace(/\+/g," ").split("="),r=o[0],t=o[1];return r=decodeURIComponent(r),t=void 0===t?null:decodeURIComponent(t),e.hasOwnProperty(r)?Array.isArray(e[r])?e[r].push(t):e[r]=[e[r],t]:e[r]=t,e},{}):{})},e.stringify=function(e){return e?Object.keys(e).map(function(n){var o=e[n];return Array.isArray(o)?o.map(function(e){return encodeURIComponent(n)+"="+encodeURIComponent(e)}).join("&"):encodeURIComponent(n)+"="+encodeURIComponent(o)}).join("&"):""},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:window.queryString=e}();