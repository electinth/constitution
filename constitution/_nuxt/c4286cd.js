(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{262:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{isDark:{type:Boolean,default:!1}},data:function(){return{socialLinks:[]}},mounted:function(){var t=encodeURI(window.location.href);this.socialLinks=[{service:"Facebook",icon:n(263),href:"http://www.facebook.com/sharer/sharer.php?u=".concat(t)},{service:"Twitter",icon:n(264),href:"https://twitter.com/intent/tweet?url=".concat(t)},{service:"Line",icon:n(265),href:"https://social-plugins.line.me/lineit/share?url=".concat(t)}]}}),r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row h-10 p-1 justify-center space-x-4"},[n("Label1",{class:"my-auto "+(t.isDark?"text-white":"text-black")},[t._v("Share")]),t._v(" "),n("div",{staticClass:"flex flex-row"},t._l(t.socialLinks,(function(e){var o=e.service,r=e.icon,l=e.href;return n("a",{key:o,attrs:{href:l,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"h-full",style:t.isDark?{}:{filter:"brightness(0)"},attrs:{src:r,alt:o}})])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Label1:n(170).default})},263:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTUuMyAxMi4yaC0yYy0uOSAwLTEuNC41LTEuNSAxLjN2Mi4xYzAgLjMuMS4yLjMuMmgzYy4zIDAgLjQuMS40LjQtLjEgMS4yLS4yIDIuMy0uMyAzLjUgMCAuMy0uMS4zLS40LjNoLTIuNGMtLjYgMC0uNS0uMS0uNS41djExYzAgLjQtLjEuNS0uNS41aC00LjFjLS40IDAtLjQtLjEtLjQtLjV2LTExLjFjMC0uMy0uMS0uNC0uNC0uNGgtMS44Yy0uMiAwLS4zLS4xLS4zLS4zdi0zLjVjMC0uMi4xLS4zLjMtLjNoMS44Yy4zIDAgLjQtLjEuNC0uNHYtMi43YzAtMS4xLjMtMi4xIDEtMyAuOC0xLjEgMi0xLjYgMy4zLTEuNyAxLjQtLjEgMi44IDAgNC4xIDAgLjIgMCAuMi4xLjIuM3YzLjVjLjEuMiAwIC4zLS4yLjN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},264:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIC45NjhjLTExIDAtMjAgOS0yMCAyMHM5IDIwIDIwIDIwIDIwLTkgMjAtMjAtOS0yMC0yMC0yMHptOS42IDE1LjF2LjZjMCA2LjUtNSAxNC4xLTE0LjEgMTQuMS0yLjggMC01LjQtLjgtNy42LTIuMi40IDAgLjguMSAxLjIuMSAyLjMgMCA0LjQtLjggNi4xLTIuMS0yLjIgMC00LTEuNS00LjYtMy40LjMuMS42LjEuOS4xLjUgMCAuOS0uMSAxLjMtLjItMi4zLS41LTQtMi41LTQtNC44di0uMWMuNy40IDEuNC42IDIuMi42LTEuMi0xLTItMi41LTItNC4yIDAtLjkuMi0xLjguNy0yLjUgMi40IDMgNi4xIDUgMTAuMiA1LjItLjEtLjQtLjEtLjctLjEtMS4xIDAtMi43IDIuMi00LjkgNC45LTQuOSAxLjQgMCAyLjcuNiAzLjYgMS42IDEuMS0uMiAyLjItLjYgMy4xLTEuMi0uNCAxLjItMS4yIDIuMS0yLjIgMi43IDEtLjEgMi0uNCAyLjgtLjgtLjYuOS0xLjUgMS44LTIuNCAyLjV6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},265:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3IDE2LjI2OGMtLjMgMC0uNi4zLS42LjZ2NC41YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di00LjVjMC0uMy0uMy0uNi0uNi0uNnptNS4zIDBjLS4zIDAtLjYuMy0uNi42djIuN2wtMi4xLTIuOWMtLjEtLjItLjQtLjMtLjctLjItLjIuMS0uNC4zLS40LjZ2NC40YzAgLjMuMy42LjYuNnMuNi0uMy42LS42di0yLjZsMi4xIDIuOWMuMS4yLjMuMi41LjJoLjJjLjItLjEuNC0uMy40LS42di00LjVjLS4xLS4zLS4zLS42LS42LS42em0tNyA0LjVoLTEuNnYtMy45YzAtLjMtLjMtLjYtLjYtLjZzLS42LjMtLjYuNnY0LjVjMCAuMy4zLjYuNi42aDIuMWMuMyAwIC42LS4zLjYtLjZzLS4xLS42LS41LS42em0xMS44LS4xaC0yLjN2LTEuMWgxLjhjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMS44di0xLjFIMjdjLjMgMCAuNi0uMy42LS42cy0uMy0uNi0uNi0uNmgtMi44Yy0uMyAwLS42LjMtLjYuNnY0LjRjMCAuMy4zLjYuNi42aDIuOWMuMyAwIC42LS4zLjYtLjZzLS4zLS40LS42LS40eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMCAuOTY4Yy0xMSAwLTIwIDktMjAgMjBzOSAyMCAyMCAyMCAyMC05IDIwLTIwLTktMjAtMjAtMjB6bTEwLjMgMjQuM2MtMS42IDItOC42IDYuNy0xMC4yIDcuNy0uNy40LTEuNS0uMS0xLjUtLjl2LTIuNGMtMy45LS4yLTEwLjktMy42LTEwLjktMTAuNCAwLTcgNy0xMC40IDEyLjQtMTAuNCA1LjggMCAxMi40IDMuOCAxMi40IDEwLjQtLjEgMS44LS42IDQtMi4yIDZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"},266:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"font-subtitle leading-1.5 text-14 md:text-16 lg:text-18"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("p",{staticClass:"font-body leading-1.6 text-15 md:text-16 lg:text-17"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7f0d7596",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h1",{staticClass:"font-heading leading-1.2 text-24 md:text-36 lg:text-48"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h3",{staticClass:"font-heading leading-1.2 text-18 md:text-21 lg:text-24"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(280),n(282),n(26);var o=n(35),r=n(117);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t,content){return t.map((function(t){return{hid:t,property:t,content:content}}))},f=function(t){var title=t.title,e=t.description,image=t.image,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],head={},meta=Object(r.a)(n);return title&&(head.title=title,meta.push.apply(meta,Object(r.a)(d(["title","og:title","twitter:title"],title)))),e&&meta.push.apply(meta,Object(r.a)(d(["description","og:description","twitter:description"],e))),image&&meta.push.apply(meta,Object(r.a)(d(["og:image","twitter:image"],image))),c(c({},head),{},{meta:meta})}},274:function(t,e,n){"use strict";n(268)},275:function(t,e,n){(e=n(38)(!1)).push([t.i,".swiper-slide[data-v-62b4ac9b]{width:auto}",""]),t.exports=e},277:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(283),l=(n(284),o.default.extend({components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},props:{categoryId:{type:String,required:!0},topics:{type:Array,required:!0}},data:function(){return{swiperOptions:{slidesPerView:"auto",spaceBetween:5}}},computed:{swiper:function(){return this.$refs.swiper.$swiper}}})),c=(n(274),n(3)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-row h-32 md:h-56"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slidePrev()}}},[n("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"15 18 9 12 15 6"}})])])]),t._v(" "),n("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOptions}},t._l(t.topics,(function(e){var o=e.id,r=e.name,l=e.thumbnail_image;return n("swiper-slide",{key:o},[n("NuxtLink",{attrs:{to:"/categories/"+t.categoryId+"/topics/"+o}},[n("img",{staticClass:"h-full cursor-pointer",attrs:{src:l,alt:r}})])],1)})),1),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"flex w-8 h-8 z-10 bg-white rounded-full -mx-4 my-auto shadow text-light-gray-3 hover:text-gray-1 cursor-pointer",on:{click:function(e){return t.swiper.slideNext()}}},[n("svg",{staticClass:"m-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("polyline",{attrs:{points:"9 18 15 12 9 6"}})])])])],1)}),[],!1,null,"62b4ac9b",null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);var o=n(3),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"font-heading leading-1.2 text-21 md:text-24 lg:text-36"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){var content=n(308);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5d68f7b9",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("4427b578",content,!0,{sourceMap:!1})},287:function(t,e,n){var content=n(314);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("a69a7af8",content,!0,{sourceMap:!1})},288:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7ef76e7d",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("03538735",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("ac529348",content,!0,{sourceMap:!1})},291:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("8f4ae05a",content,!0,{sourceMap:!1})},292:function(t,e,n){var content=n(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("090a88b3",content,!0,{sourceMap:!1})},296:function(t,e,n){"use strict";n.r(e);n(326);var o=n(1).default.extend({props:{categoryId:{type:String,required:!0},subcategories:{type:Array,required:!0},subcategoryId:{type:String,required:!0}},computed:{related_topics:function(){var t=this,e=this.subcategories.find((function(e){return e.sub_category_id===t.subcategoryId}));return null==e?void 0:e.topics}}}),r=(n(327),n(3)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.related_topics?e("div",{attrs:{id:"related-container"}},[e("Heading7",{staticClass:"text-center font-black",attrs:{id:"related-title"}},[this._v("\n    RELATED TOPICS\n  ")]),this._v(" "),e("TopicsCarousal",{staticClass:"flex max-w-5xl mx-auto",attrs:{id:"related-topics","category-id":this.categoryId,topics:this.related_topics}})],1):this._e()}),[],!1,null,"638fc227",null);e.default=component.exports;installComponents(component,{Heading7:n(180).default,TopicsCarousal:n(277).default})},297:function(t,e,n){"use strict";n.r(e);n(68),n(69);var o=n(1).default.extend({props:{bgColor:{type:String,default:""}},data:function(){return{sections:["สรุป","เปรียบเทียบ","ข้อคิดเห็น"]}},methods:{clickPanel:function(t){document.querySelectorAll(".panel-button-border").forEach((function(e,i){e.style.opacity=i!==t?"0.2":"1.0"})),this.$emit("clicked",t)}}}),r=(n(307),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-box bg-white justify-center",attrs:{id:"panel-container"}},t._l(t.sections,(function(e,o){return n("div",{key:o,staticStyle:{height:"100%",width:"33%","margin-left":"5px"}},[n("button",{staticClass:"panel-button-text",staticStyle:{display:"flex","justify-content":"center",height:"calc(100% - 5px)",border:"none",width:"100%",outline:"none"},on:{click:function(e){return t.clickPanel(o)}}},[n("Label1",[t._v("\n          "+t._s(e)+"\n        ")])],1),t._v(" "),n("button",{staticClass:"panel-button-border",staticStyle:{display:"flex","justify-content":"center",height:"0px","border-bottom":"5px solid",width:"100%",outline:"none","-webkit-transition":"opacity 0.1s ease-in-out","-moz-transition":"opacity 0.1s ease-in-out","-ms-transition":"opacity 0.1s ease-in-out","-o-transition":"opacity 0.1s ease-in-out",transition:"opacity 0.1s ease-in-out"},style:0==o?{borderColor:t.bgColor,opacity:1}:{borderColor:t.bgColor,opacity:.2}})])})),0)])}),[],!1,null,"5f4560fa",null);e.default=component.exports;installComponents(component,{Label1:n(170).default})},298:function(t,e,n){"use strict";n.r(e);n(175),n(309),n(115),n(42),n(116);var o=n(1),r=n(301),l=o.default.extend({components:{TopicSummaryTable:r.default},props:{summary:String},computed:{summary_intro:function(){return this.summary.split("|  |")[0]},summary_table:function(){var t="",e=this.summary.slice(this.summary.indexOf("|  |")+1);e=e.slice(0,e.lastIndexOf("|")+1);for(var n,o,i=0;;){var r="";for(n=e.indexOf("|",i),o=e.indexOf("\n",i);-1!==n&&(n<o||-1===o);){var img=e.indexOf("![]",i);if(-1!==img&&img<n){var l=e.slice(img+4,e.indexOf(")",img));r+="<td>"+e.slice(i,img)+'<br/><img src="'+l+'"/></td>'}else r+="<td>"+e.slice(i,n)+"</td>";i=n+1,n=e.indexOf("|",i),o=e.indexOf("\n",i)}if(i=Math.max(n,o)+1,t+="<tr>"+r+"</tr>",-1===n)break}return"<table>"+t+"</table>"}}}),c=(n(313),n(3)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col justify-center w-full"},[e("div",{staticClass:"flex flex-row bg-white text-black justify-center",attrs:{id:"summary-intro"}},[e("Paragraph1",{staticClass:"flex text-center"},[this._v("\n      "+this._s(this.summary_intro)+"\n    ")])],1),this._v(" "),e("div",{staticClass:"justify-center w-full"},[e("TopicSummaryTable",{attrs:{id:"summary-table",table:this.summary_table}})],1)])}),[],!1,null,"7910b4fe",null);e.default=component.exports;installComponents(component,{Paragraph1:n(267).default,TopicSummaryTable:n(301).default})},299:function(t,e,n){"use strict";n.r(e);n(68),n(69);var o=n(1),r=n(302),l=o.default.extend({components:{TopicComparisonSide:r.default},props:{bgColor:{type:String,default:""},versions:{type:Array,default:function(){return[]}}},mounted:function(){var t=this.bgColor;document.querySelectorAll(".multiselect__tags").forEach((function(e){e.style.borderColor=t}))}}),c=(n(322),n(3)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-row justify-center align-center",attrs:{id:"comparison-container"}},[e("TopicComparisonSide",{staticClass:"topic-comparison-side",attrs:{versions:this.versions,"side-l":""}}),this._v(" "),e("span",{staticClass:"flex text-white justify-center text-center",style:{backgroundColor:this.bgColor},attrs:{id:"vs-icon"}},[e("Label1",{staticClass:"text-center text-justify m-auto"},[this._v(" vs. ")])],1),this._v(" "),e("span",{attrs:{id:"vs-padding"}}),this._v(" "),e("TopicComparisonSide",{staticClass:"topic-comparison-side",attrs:{versions:this.versions}})],1)])}),[],!1,null,"d5831ade",null);e.default=component.exports;installComponents(component,{TopicComparisonSide:n(302).default,Label1:n(170).default})},300:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{opinions:Array}}),r=(n(324),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opinions-container"},t._l(t.opinions,(function(e,o){return n("div",{key:o,staticClass:"flex bg-white justify-center"},[n("div",{staticClass:"opinion-container"},[o%2==0?n("div",{staticClass:"flex flex-row"},[n("img",{staticClass:"opinion-image",attrs:{src:e.speaker_image}}),t._v(" "),n("div",{staticClass:"opinion-credentials-left"},[n("Heading2",{staticClass:"font-semibold",staticStyle:{"padding-top":"8px"}},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]),t._v(" "),n("Subtitle2",[t._v("\n            "+t._s(e.speaker_position)+"\n          ")])],1)]):t._e(),t._v(" "),o%2==1?n("div",{staticClass:"flex flex-row"},[n("div",{staticClass:"opinion-credentials-right"},[n("Heading2",{staticClass:"font-semibold",staticStyle:{"padding-top":"8px"}},[t._v("\n            "+t._s(e.speaker_name)+"\n          ")]),t._v(" "),n("Subtitle2",[t._v("\n            "+t._s(e.speaker_position)+"\n          ")])],1),t._v(" "),n("img",{staticClass:"opinion-image",attrs:{src:e.speaker_image}})]):t._e(),t._v(" "),n("Paragraph1",{staticClass:"opinion-content"},[t._v("\n        "+t._s(e.content)+"\n      ")])],1)])})),0)}),[],!1,null,"b2ea5296",null);e.default=component.exports;installComponents(component,{Heading2:n(279).default,Subtitle2:n(266).default,Paragraph1:n(267).default})},301:function(t,e,n){"use strict";n.r(e);var o=n(1).default.extend({props:{table:String}}),r=(n(311),n(3)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-row w-full justify-center",attrs:{id:"table-container"},domProps:{innerHTML:this._s(this.table)}})])}),[],!1,null,"e75a85a2",null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);n(57),n(68),n(42),n(77),n(69);var o=n(1),r=(n(315),o.default.extend({props:{versions:Array,sideL:{type:Boolean,default:!1}},data:function(){return{version:null,sections:null,amendments:null}},methods:{selectVersion:function(t){this.sections=t.sections,t.sections.forEach((function(section){section.content=section.content.replace("\\n","<br/>"),section.content=section.content.replace("\n","<br/>"),section.footer_id="<b>มาตรา</b> "+section.id,section.footer_part=null,section.partId&&(section.footer_part="<b>ส่วน</b> "+section.partId+" "+section.partName),section.footer_chapter=null,section.chapterId&&(section.footer_chapter="<b>หมวด</b> "+section.chapterId+" "+section.chapterName),section.footer="<b>มาตรา</b> "+section.id,section.partId&&(section.footer+=" <b>ส่วน</b> "+section.partId+" "+section.partName),section.chapterId&&(section.footer+=" <b>หมวด</b> "+section.chapterId+" "+section.chapterName),section.amendments=[],section.amendmentIds.forEach((function(e){var n=t.amendments.filter((function(a){return a.id===e}))[0];n.header="<b>"+n.affectedBy+"</b>",section.amendments.push(n)}))}))}}})),l=(n(317),n(3)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"justify-center text-center align-center",attrs:{id:"comparison-side-container"}},[n("TopicComparisonSelect",{attrs:{versions:t.versions,"side-l":t.sideL},on:{"select-version":t.selectVersion}}),t._v(" "),t._l(t.sections,(function(section,e){return n("div",{key:e,staticClass:"section-container"},[t.sideL?n("div",{staticClass:"section-container-l"},[n("Paragraph1",{domProps:{innerHTML:t._s(section.content)}}),t._v(" "),n("div",{staticClass:"section-label"},[n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer)}})],1),t._v(" "),n("div",{staticClass:"section-label-mobile"},[n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_id)}}),t._v(" "),n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_part)}}),t._v(" "),n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_chapter)}})],1)],1):t._e(),t._v(" "),t.sideL?t._e():n("div",{staticClass:"section-container-r"},[n("Paragraph1",{domProps:{innerHTML:t._s(section.content)}}),t._v(" "),n("div",{staticClass:"section-label"},[n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer)}})],1),t._v(" "),n("div",{staticClass:"section-label-mobile"},[n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_id)}}),t._v(" "),n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_part)}}),t._v(" "),n("Label1",{staticClass:"section-label-text",domProps:{innerHTML:t._s(section.footer_chapter)}})],1)],1)])}))],2)])}),[],!1,null,"9fbe882e",null);e.default=component.exports;installComponents(component,{TopicComparisonSelect:n(981).default,Paragraph1:n(267).default,Label1:n(170).default})},306:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAFVBAMAAABr/UoQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhUExURUdwTP///////////////////////////////////////48EzvsAAAAKdFJOUwDfIJ8w7xDPgHBXeso1AAACsklEQVR42u3avY2TQRhG0dGSEIJERAYZBZBMtC0gbQFbBTHNINBUCcYY/32SA0jwPU8H79WZbMYwM/v3e6gH+PjYvv/FemoHmOvrYxvAahOYPwOUCewApAnMXwG6BPYAwgTm7wBVAgcAWQLzT4AmgSOAKIF5EqBI4BRAksA8C9AjcA4gSGBeBKgRuASQIzCvArQIXAOIEZgbAUoEtgCs9aoNoCRgG8ATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw9gPXp9T3vNoA7320AnQBJAKsOYNUBrDqAVQew6gBWHcCqA1h1AKsOYNUBrDqAfYCXKx7g4W39CbyrBwgTGHUCo05g1AmMOoFRJzDqBEadwKgTGHUCo05g1AmMOoFxm8Cb9/e8cZvAt+fOD4ltAp87ARBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEELhbAl9Gm8D30P2bBEoAtgikAGwRaAG4JhADcE2gBuCSQA7AJYEegHMCQQDnBIoATgkkAZwSaAI4EogCOBKoAjgQyAI4EOgC2BMIA9gTKAPYEUgD2BFoAxjjwzAz+w/2A9/yK/oHV6gjAAAAAElFTkSuQmCC"},307:function(t,e,n){"use strict";n(285)},308:function(t,e,n){(e=n(38)(!1)).push([t.i,"#panel-container[data-v-5f4560fa]{height:50px;padding-left:110px;padding-right:105px}@media only screen and (max-width:768px){#panel-container[data-v-5f4560fa]{height:35px;padding-left:12px;padding-right:12px}}",""]),t.exports=e},311:function(t,e,n){"use strict";n(286)},312:function(t,e,n){(e=n(38)(!1)).push([t.i,"#table-container[data-v-e75a85a2]{width:100%;margin-left:auto;margin-right:auto}div[data-v-e75a85a2] td{padding-top:15px;padding-bottom:15px;vertical-align:text-top}div[data-v-e75a85a2] tr:not(:last-child){border-bottom:1px solid #cecece}div[data-v-e75a85a2] td:first-child,div[data-v-e75a85a2] tr:first-child{font-weight:700}div[data-v-e75a85a2] table{width:100%}",""]),t.exports=e},313:function(t,e,n){"use strict";n(287)},314:function(t,e,n){(e=n(38)(!1)).push([t.i,"#summary-intro[data-v-7910b4fe]{width:100%;padding-top:100px;margin-left:auto;margin-right:auto;max-width:750px;width:85%}#summary-table[data-v-7910b4fe]{margin-top:68px;margin-left:125px;margin-right:125px}#social-sharer[data-v-7910b4fe]{padding-top:60px;padding-bottom:60px}@media only screen and (max-width:768px){#summary-intro[data-v-7910b4fe]{padding-top:63px;padding-left:20px;padding-right:20px}#summary-table[data-v-7910b4fe]{margin-top:27px;margin-left:12.5px;margin-right:12.5px}#social-sharer[data-v-7910b4fe]{padding-top:25px;padding-bottom:25px}}",""]),t.exports=e},317:function(t,e,n){"use strict";n(288)},318:function(t,e,n){(e=n(38)(!1)).push([t.i,"#comparison-side-container[data-v-9fbe882e]{width:100%}.section-container[data-v-9fbe882e]{margin-top:64px}.section-container-l[data-v-9fbe882e],.section-container-r[data-v-9fbe882e]{text-align:left}.section-container-l[data-v-9fbe882e]{display:flex;flex-direction:column;padding-left:30%;padding-right:12px}.section-container-r[data-v-9fbe882e]{display:flex;flex-direction:column;padding-left:12px;padding-right:30%}.section-text[data-v-9fbe882e]{display:flex;flex-direction:row}.section-label[data-v-9fbe882e],.section-label-mobile[data-v-9fbe882e]{justify-content:end;margin-top:30px;margin-bottom:16px;width:100%;display:flex;flex-direction:row}.section-label-mobile[data-v-9fbe882e]{display:none}.section-label-text[data-v-9fbe882e]{text-align:right;width:100%}@media only screen and (max-width:768px){.section-container[data-v-9fbe882e]{margin-top:17px}.section-container-l[data-v-9fbe882e]{padding-left:9%;padding-right:0}.section-container-r[data-v-9fbe882e]{padding-left:0;padding-right:9%}.section-label[data-v-9fbe882e]{display:none}.section-label-mobile[data-v-9fbe882e]{margin-top:15px;margin-bottom:23px;flex-direction:column;display:flex}}",""]),t.exports=e},320:function(t,e,n){var content=n(321);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7d1e2dfe",content,!0,{sourceMap:!1})},321:function(t,e,n){(e=n(38)(!1)).push([t.i,".multiselect,.multiselect__input,.multiselect__single{font-size:14px}.multiselect{width:calc(70% - 12px)}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input:hover,.multiselect__single:hover{border-color:#fff}.multiselect__input:focus,.multiselect__single:focus{border-color:#fff;outline:none}.multiselect__tags{width:100%;border:1px solid #000}.multiselect__current{padding:8px 30px 0 12px}.multiselect__select{padding:0}.multiselect__select:before{color:#000;border-color:#000 transparent transparent}.multiselect__placeholder{color:#000}.multiselect__content-wrapper{-webkit-overflow-scrolling:touch;word-wrap:break-word}.multiselect__content{word-wrap:break-word}.multiselect__option{line-height:120%;word-wrap:break-word}.multiselect__option--highlight{background:#000}.multiselect__option--selected:after{color:#fff}.multiselect__option--selected.multiselect__option--highlight,.multiselect__option--selected.multiselect__option--highlight:after{background:#000;color:#fff}.multiselect__option--group{background:#ededed;color:#000}.multiselect__option--group.multiselect__option--highlight{background:#000;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#000}@media only screen and (max-width:768px){.multiselect{width:90%}}",""]),t.exports=e},322:function(t,e,n){"use strict";n(289)},323:function(t,e,n){(e=n(38)(!1)).push([t.i,"#comparison-container[data-v-d5831ade]{padding-top:102.5px;width:100%}#vs-icon[data-v-d5831ade]{border-radius:50%;width:45px;height:45px;margin-left:50px;margin-right:50px}#vs-padding[data-v-d5831ade]{display:none}.topic-comparison-side[data-v-d5831ade]{width:45%;min-width:140px}@media only screen and (max-width:768px){#comparison-container[data-v-d5831ade]{padding-top:35px}#vs-icon[data-v-d5831ade]{display:none}#vs-padding[data-v-d5831ade]{display:flex;width:10px}.topic-comparison-side[data-v-d5831ade]{width:50%}}",""]),t.exports=e},324:function(t,e,n){"use strict";n(290)},325:function(t,e,n){(e=n(38)(!1)).push([t.i,".opinions-container[data-v-b2ea5296]{flex-direction:column;padding-bottom:157px}.opinion-container[data-v-b2ea5296]{padding-top:124px;padding-bottom:60px;margin-left:auto;margin-right:auto;max-width:750px;width:85%}.opinion-image[data-v-b2ea5296]{border-radius:50%;width:80px;height:80px}.opinion-credentials-left[data-v-b2ea5296]{flex-direction:column;margin-left:30px}.opinion-credentials-right[data-v-b2ea5296]{flex-direction:column;margin-right:30px;text-align:right}.opinion-content[data-v-b2ea5296]{text-align:center;margin-top:80px;width:100%}@media only screen and (max-width:768px){.opinions-container[data-v-b2ea5296]{padding-bottom:28px}.opinion-container[data-v-b2ea5296]{padding-top:49px;padding-bottom:0;margin-left:20px;margin-right:20px}.opinion-image[data-v-b2ea5296]{width:60px;height:60px}.opinion-credentials-left[data-v-b2ea5296]{margin-left:15px}.opinion-credentials-right[data-v-b2ea5296]{margin-right:15px}.opinion-content[data-v-b2ea5296]{margin-top:20px}}",""]),t.exports=e},327:function(t,e,n){"use strict";n(291)},328:function(t,e,n){(e=n(38)(!1)).push([t.i,"#related-container[data-v-638fc227]{overflow:hidden}#related-title[data-v-638fc227]{margin-top:50px;margin-bottom:50px}#related-topics[data-v-638fc227]{margin-bottom:96.5px;max-width:90%}@media only screen and (max-width:768px){#related-container[data-v-638fc227]{overflow:hidden}#related-topics[data-v-638fc227]{margin-bottom:30px;margin-left:5%;width:90%}}",""]),t.exports=e},329:function(t,e,n){"use strict";n(292)},330:function(t,e,n){(e=n(38)(!1)).push([t.i,"#header-tab[data-v-3477f4f2]{padding-top:16px;padding-bottom:15px}#header-tab-arrow[data-v-3477f4f2]{margin-left:35px;position:absolute}#header-tab-arrow-img[data-v-3477f4f2]{width:31px}#header-tab-text[data-v-3477f4f2]{width:100%}#title[data-v-3477f4f2]{padding-top:95px}#topic-panel[data-v-3477f4f2]{padding-top:52px}#social-sharer[data-v-3477f4f2]{margin-top:60px;margin-bottom:60px}#hr-end[data-v-3477f4f2]{border:0;height:1px;background-color:#929191;margin:1px 85px;outline:none}@media only screen and (max-width:768px){#header-tab[data-v-3477f4f2]{padding-top:8px;padding-bottom:8px}#header-tab-arrow[data-v-3477f4f2]{margin-left:10px}#header-tab-arrow-img[data-v-3477f4f2]{width:22px}#title[data-v-3477f4f2]{padding-top:29px}#topic-panel[data-v-3477f4f2]{padding-top:25px}#social-sharer[data-v-3477f4f2]{margin-top:25px;margin-bottom:25px}#hr-end[data-v-3477f4f2]{margin-left:20px;margin-right:20px}}",""]),t.exports=e},981:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(319),l=n.n(r);n(320);o.default.component("Multiselect",l.a);var c=o.default.extend({components:{Multiselect:l.a},props:{versions:Array,sideL:{type:Boolean,default:!1}},data:function(){return{version:null}},methods:{selectVersion:function(t){this.$emit("select-version",t)}}}),d=n(3),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comparison-select"},[n("multiselect",{staticClass:"text-black shadow-none outline-none",style:t.sideL?"margin-left: auto; margin-right: 0;":"margin-left: 0; margin-right: auto;",attrs:{placeholder:"เลือกฉบับรัฐธรรมนูญ","track-by":"name",label:"name",options:t.versions,searchable:!1,"allow-empty":!1,"select-label":"","deselect-label":""},on:{select:t.selectVersion},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}})],1)}),[],!1,null,"137f0863",null);e.default=component.exports},989:function(t,e,n){"use strict";n.r(e);n(41),n(17),n(43),n(54);var o=n(51),r=(n(27),n(5)),l=n(1),c=n(297),d=n(298),f=n(299),A=n(300),m=n(296),x=n(262),h=n(109),v=n(273),y=l.default.extend({components:{TopicPanel:c.default,TopicSummary:d.default,TopicComparison:f.default,TopicOpinions:A.default,SocialSharer:x.default,TopicRelatedPanel:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d,f,A,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.params,r=n.category_id,l=n.topic_id,!(null==(c=t.payload)?void 0:c.topic)||!(null==c?void 0:c.category)){e.next=5;break}return e.abrupt("return",c);case 5:return e.next=7,Promise.all([Object(h.c)(l),Object(h.b)(r)]);case 7:return d=e.sent,f=Object(o.a)(d,2),A=f[0],m=f[1],e.abrupt("return",{topic:A,category:m});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{topic:null,category:null}},head:function(){var t=this.topic,e=t.name,n=t.og_image;return Object(v.a)({title:e,image:n})},mounted:function(){this.onClickPanel(0)},methods:{onClickPanel:function(t){var summary=document.getElementById("topic-summary");summary&&(summary.style.display=0===t?"flex":"none");var e=document.getElementById("topic-comparison");e&&(e.style.display=1===t?"flex":"none");var n=document.getElementById("topic-opinions");n&&(n.style.display=2===t?"flex":"none")}}}),L=(n(329),n(3)),component=Object(L.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"flex flex-row bg-black text-white",style:{backgroundColor:t.category.color},attrs:{id:"header-tab"}},[o("div",{attrs:{id:"header-tab-arrow"}},[o("NuxtLink",{staticClass:"curser-pointer float-left",attrs:{to:"/categories/"+t.category.category_id}},[o("img",{attrs:{id:"header-tab-arrow-img",src:n(306)}})])],1),t._v(" "),o("div",{staticClass:"flex justify-center",attrs:{id:"header-tab-text"}},[o("Heading3",{staticClass:"text-center font-black"},[t._v("\n        "+t._s(t.topic.category_name)+"\n      ")])],1)]),t._v(" "),o("div",{staticClass:"flex flex-row bg-white text-black justify-center",attrs:{id:"title"}},[o("Heading1",{staticClass:"text-center font-black"},[t._v("\n      "+t._s(t.topic.name)+"\n    ")])],1),t._v(" "),o("TopicPanel",{attrs:{id:"topic-panel","bg-color":t.category.color},on:{clicked:t.onClickPanel}}),t._v(" "),o("TopicSummary",{attrs:{id:"topic-summary",summary:t.topic.summary}}),t._v(" "),o("TopicComparison",{staticStyle:{display:"none"},attrs:{id:"topic-comparison",versions:t.topic.constitutions,"bg-color":t.category.color}}),t._v(" "),o("TopicOpinions",{staticStyle:{display:"none"},attrs:{id:"topic-opinions",opinions:t.topic.opinions}}),t._v(" "),o("SocialSharer",{attrs:{id:"social-sharer"}}),t._v(" "),o("hr",{attrs:{id:"hr-end"}}),t._v(" "),o("TopicRelatedPanel",{attrs:{id:"related-panel","category-id":t.topic.category_id,"subcategory-id":t.topic.subcategory_id,subcategories:t.category.sub_categories}})],1)}),[],!1,null,"3477f4f2",null);e.default=component.exports;installComponents(component,{Heading3:n(272).default,Heading1:n(269).default,TopicPanel:n(297).default,TopicSummary:n(298).default,TopicComparison:n(299).default,TopicOpinions:n(300).default,SocialSharer:n(262).default,TopicRelatedPanel:n(296).default})}}]);