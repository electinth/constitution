(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{351:function(e,t,n){"use strict";var r=n(16),o=n(8),c=n(82),l=n(21),f=n(18),d=n(55),N=n(138),I=n(80),h=n(10),v=n(63),E=n(81).f,_=n(44).f,y=n(20).f,x=n(352).trim,A="Number",C=o.Number,w=C.prototype,m=d(v(w))==A,S=function(e){var t,n,r,o,c,l,f,code,d=I(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=x(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(A,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var k,F=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof F&&(m?h((function(){w.valueOf.call(n)})):d(n)!=A)?N(new C(S(t)),n,F):S(t)},T=r?E(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;T.length>L;L++)f(C,k=T[L])&&!f(F,k)&&y(F,k,_(C,k));F.prototype=w,w.constructor=F,l(o,A,F)}},352:function(e,t,n){var r=n(28),o="["+n(353)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},353:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},419:function(e,t,n){"use strict";n.r(t);n(351);var r=n(0).default.extend({props:{bgColor:{type:String,default:""},opinions:{type:Array,required:!0},currentPanel:{type:Number,required:!0}},computed:{sections:function(){return 0===this.opinions.length?["สรุป","เปรียบเทียบ"]:["สรุป","เปรียบเทียบ","ข้อคิดเห็น"]}}}),o=n(12),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex flex-row bg-white space-x-1"},e._l(e.sections,(function(t,r){return n("button",{key:r,staticClass:"flex-1 border-none focus:outline-none",on:{click:function(t){return e.$emit("change",r)}}},[n("Label1",{staticClass:"flex py-4 justify-center"},[e._v("\n        "+e._s(t)+"\n      ")]),e._v(" "),n("div",{staticClass:"h-1 w-full transition-opacity duration-100 ease-in-out",class:r!==e.currentPanel?"opacity-25":"",style:{backgroundColor:e.bgColor}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Label1:n(199).default})}}]);