/*! For license information please see create_empty_scheduler.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react_scheduler"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react_scheduler",,],r):"object"==typeof exports?exports.examples__create_empty_scheduler=r(require("react_scheduler"),require("react"),require("react-dom")):e.examples__create_empty_scheduler=r(e.react_scheduler,e.React,e.ReactDOM)}(self,((e,r,t)=>(()=>{"use strict";var o={20:(e,r,t)=>{var o=t(91),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var o,l={},p=null,d=null;for(o in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,o)&&!c.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:p,ref:d,props:l,_owner:u.current}}},848:(e,r,t)=>{e.exports=t(20)},581:r=>{r.exports=e},91:e=>{e.exports=r},511:e=>{e.exports=t}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={exports:{}};return o[e](t,t.exports,a),t.exports}a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};a.r(u);var c=a(511),l=a(581),p=a.n(l),d=a(848);return(0,c.render)((0,d.jsx)(p(),{}),document.getElementById("scheduler")),u})()));