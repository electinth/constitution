(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1178:function(e,t,n){"use strict";n.r(t);var o=n(1),l=n(313),r=o.default.extend({props:{constitution:{type:Object,required:!0},categoriesMap:{type:Object,required:!0},isExpanded:{type:Boolean,default:!0},showPageLabel:{type:Boolean,default:!1}},data:function(){return{hoveringPageIndex:null,selectedPageIndex:null}},methods:{isLargeOrMore:l.a}}),c=n(41),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex flex-col space-y-4"},[o("div",{staticClass:"flex flex-col bg-gray-2 hover:bg-gray-1 cursor-pointer p-2 pb-1 lg:p-1 lg:pb-0 w-full space-y-2 lg:space-y-1",on:{click:function(t){return e.$emit("header-click")}}},[o("CoupIndicator",{attrs:{coup:e.constitution.isInvolvedWithCoup}}),e._v(" "),o("div",{staticClass:"flex flex-row"},[o("div",{staticClass:"flex-1 lg:text-center"},[o("h3",{staticClass:"font-heading font-black text-21 lg:text-16 leading-1.2"},[e._v("\n          "+e._s(e.constitution.year)+"\n        ")]),e._v(" "),o("p",{class:"font-button text-12 lg:text-10 "+(e.constitution.isInterim?"":"opacity-0")},[e._v("\n          ชั่วคราว\n        ")])]),e._v(" "),o("div",{staticClass:"lg:hidden -mt-1"},[o("Label1",[e._v(e._s(e.constitution.pageCount)+" หน้า")])],1)])],1),e._v(" "),o("Label2",{staticClass:"hidden lg:block text-center"},[e._v(e._s(e.constitution.pageCount)+e._s(e.showPageLabel?" หน้า":""))]),e._v(" "),o("div",{staticClass:"flex flex-row lg:flex-col flex-wrap relative"},e._l(e.constitution.pages,(function(t,l){return o("div",{key:l,staticClass:"flex flex-row"},[o("div",{staticClass:"`flex flex-col w-6 mr-2 lg:mx-auto transition-size-spacing duration-500 ease-in-out cursor-pointer",class:[e.hoveringPageIndex===l?"border-white":"border-dark",e.isExpanded?"h-8 mb-3 lg:mb-1 border":"h-1"],on:{mouseover:function(t){e.isLargeOrMore()&&(e.hoveringPageIndex=l)},mouseleave:function(t){e.isLargeOrMore()&&(e.hoveringPageIndex=null)},click:function(t){e.isLargeOrMore()&&(e.selectedPageIndex=l)}}},e._l(t,(function(t,n){var l=t.categoryId,r=t.pageRatio;return o("div",{key:n,style:{height:Math.round(100*r)+"%",backgroundColor:e.categoriesMap[l].color}})})),0),e._v(" "),e.hoveringPageIndex===l?o("div",{staticClass:"relative"},[o("div",{staticClass:"absolute z-10 top-0 left-0 bg-white shadow-md"},[o("img",{staticClass:"w-24 h-auto max-w-none max-h-none",attrs:{src:n(348)("./"+e.constitution.id+"/"+(l+1)+".png"),alt:e.constitution.name+" หน้า "+l}})])]):e._e()])})),0),e._v(" "),null!==e.selectedPageIndex?o("ConstitutionPageDialog",{attrs:{constitution:e.constitution,"page-index":e.selectedPageIndex},on:{close:function(t){e.selectedPageIndex=null},change:function(t){return e.selectedPageIndex=t}}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},313:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return l})),function(e){e[e.md=768]="md",e[e.lg=1024]="lg"}(o||(o={}));var l=function(){return window.innerWidth>o.lg}}}]);