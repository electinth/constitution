(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1179:function(t,e,r){"use strict";r.r(e);r(255);var n=r(1).default.extend({props:{constitution:{type:Object,required:!0},pageIndex:{type:Number,required:!0}}}),o=r(41),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed z-10 inset-0 flex"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return t.$emit("close")},expression:"() => $emit('close')"}],staticClass:"flex flex-row max-h-screen h-full m-auto py-10"},[n("div",{staticClass:"flex w-16"},[0!==t.pageIndex?n("svg",{staticClass:"m-auto w-full opacity-75 hover:opacity-100 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){return t.$emit("change",t.pageIndex-1)}}},[n("polyline",{attrs:{points:"15 18 9 12 15 6"}})]):t._e()]),t._v(" "),n("img",{staticClass:"h-full w-auto",attrs:{src:r(348)("./"+t.constitution.id+"/"+(t.pageIndex+1)+".png"),alt:t.constitution.name+" หน้า "+t.pageIndex}}),t._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"absolute right-0 flex bg-black -m-4 w-8 h-8 rounded-full border cursor-pointer",on:{click:function(e){return t.$emit("close")}}},[n("img",{staticClass:"w-4 m-auto",attrs:{src:r(244),alt:"close"}})])]),t._v(" "),n("div",{staticClass:"flex w-16"},[t.pageIndex!==t.constitution.pageCount-1?n("svg",{staticClass:"m-auto w-full opacity-75 hover:opacity-100 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){return t.$emit("change",t.pageIndex+1)}}},[n("polyline",{attrs:{points:"9 18 15 12 9 6"}})]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgNiA1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01Ljc0OS43MzJMNS4wNDIuMDI1Ljc5OSA0LjI2OGwuNzA3LjcwN3oiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNLjc5OS43MzJsLjcwNy0uNzA3IDQuMjQzIDQuMjQzLS43MDguNzA3eiIvPjwvc3ZnPg=="},255:function(t,e,r){"use strict";var n=r(10),o=r(5),c=r(90),l=r(15),f=r(12),d=r(42),I=r(175),w=r(70),v=r(6),m=r(69),N=r(71).f,x=r(32).f,h=r(13).f,k=r(256).trim,C="Number",A=o.Number,S=A.prototype,j=d(m(S))==C,y=function(t){var e,r,n,o,c,l,f,code,d=w(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(c(C,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var E,_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(j?v((function(){S.valueOf.call(r)})):d(r)!=C)?I(new A(y(e)),r,_):y(e)},M=n?N(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;M.length>L;L++)f(A,E=M[L])&&!f(_,E)&&h(_,E,x(A,E));_.prototype=S,S.constructor=_,l(o,C,_)}},256:function(t,e,r){var n=r(19),o="["+r(257)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},257:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);