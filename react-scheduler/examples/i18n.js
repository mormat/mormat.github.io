/*! For license information please see i18n.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react_scheduler"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react_scheduler",,],r):"object"==typeof exports?exports.examples__i18n=r(require("react_scheduler"),require("react"),require("react-dom")):e.examples__i18n=r(e.react_scheduler,e.React,e.ReactDOM)}(self,((e,r,t)=>(()=>{"use strict";var o={20:(e,r,t)=>{var o=t(91),a=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),u=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var o,s={},c=null,l=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,o)&&!d.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:a,type:e,key:c,ref:l,props:s,_owner:u.current}}},848:(e,r,t)=>{e.exports=t(20)},581:r=>{r.exports=e},91:e=>{e.exports=r},511:e=>{e.exports=t}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var u={};n.r(u);var d=n(511),s=n(581),c=n.n(s),l=n(848);return(0,d.render)((0,l.jsx)(c(),{dateLocale:"fr",translations:{"header.today":"Aujourd'hui","header.day":"jour","header.week":"semaine","header.month":"mois"}}),document.getElementById("scheduler")),u})()));