(()=>{"use strict";var e,t={123:(e,t,o)=>{const r=Vue;var n={key:0,class:"py-3 text-90 font-normal text-2xl text-left pl-4"},a={key:1,class:"bg-20 rounded-b-lg flex justify-between"},l=function(e){return(0,r.pushScopeId)("data-v-ea22ce76"),e=e(),(0,r.popScopeId)(),e}((function(){return(0,r.createElementVNode)("div",null,null,-1)})),i=["href"];function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var s={key:0,class:"bg-gray-50 dark:bg-gray-800"},u=["id"],d={key:0};const h={name:"TableHeader",props:{fields:{type:Array},shouldShowColumnBorders:Boolean,hasViewColumn:Boolean}};var f=o(744);const m=(0,f.Z)(h,[["render",function(e,t,o,n,a,l){return o.fields&&o.fields.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("thead",s,[(0,r.createElementVNode)("tr",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.fields,(function(e,t){var n;return(0,r.openBlock)(),(0,r.createElementBlock)("th",{key:t,id:e.id,class:(0,r.normalizeClass)([(n={},c(n,"".concat(e.class),!0),c(n,"border-r border-gray-200 dark:border-gray-600",o.shouldShowColumnBorders),c(n,"px-2",!0),c(n,"whitespace-nowrap",!0),n),"text-gray-500 text-xxs tracking-wide py-2"])},[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.data),1)],10,u)})),128)),o.hasViewColumn?((0,r.openBlock)(),(0,r.createElementBlock)("th",d)):(0,r.createCommentVNode)("",!0)])])):(0,r.createCommentVNode)("",!0)}]]);function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var v=["id","innerHTML"],b={key:0,class:"td-fit text-right pr-6"},w={key:0};const g={name:"TableRow",props:{row:{type:Object},tableStyle:String,shouldShowTight:Boolean,shouldShowColumnBorders:Boolean,hasViewColumn:Boolean}},y={props:["card"],components:{TableRow:(0,f.Z)(g,[["render",function(e,t,o,n,a,l){var i=(0,r.resolveComponent)("icon"),c=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{class:(0,r.normalizeClass)([o.row.class,"group"])},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.row.columns,(function(e,t){var n;return(0,r.openBlock)(),(0,r.createElementBlock)("td",{key:t,id:e.id,innerHTML:e.data,class:(0,r.normalizeClass)([(n={},p(n,"".concat(e.class),!0),p(n,"px-2",!0),p(n,"py-2",!o.shouldShowTight),p(n,"border-r border-t border-gray-100 dark:border-gray-700",o.shouldShowColumnBorders),p(n,"whitespace-nowrap",!0),n),"dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"])},null,10,v)})),128)),o.hasViewColumn?((0,r.openBlock)(),(0,r.createElementBlock)("td",b,[o.row.view?((0,r.openBlock)(),(0,r.createElementBlock)("span",w,[(0,r.createVNode)(c,{class:"cursor-pointer text-70 hover:text-primary mr-3",to:o.row.view,title:e.__("View")},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(i,{type:"view",width:"22",height:"18","view-box":"0 0 22 16"})]})),_:1},8,["to","title"])])):(0,r.createCommentVNode)("",!0)])):(0,r.createCommentVNode)("",!0)],2)}]]),TableHeader:m},computed:{hasViewColumn:function(){return this.rows.find((function(e){return e.view}))},shouldShowTight:function(){return"table-tight"===this.card.style},shouldShowColumnBorders:function(){return this.card.showBorders}},data:function(){return{rows:[],header:[],title:"",viewAll:!1}},mounted:function(){this.fillTableData(this.card),this.$refs.table.parentNode.classList.remove("min-h-40")},methods:{fillTableData:function(e){this.rows=e.rows,this.header=e.header,this.title=e.title,this.viewAll=e.viewAll}},watch:{card:function(e){this.fillTableData(e)}}};var k=o(379),B=o.n(k),C=o(820),x={insert:"head",singleton:!1};B()(C.Z,x);C.Z.locals;const S=(0,f.Z)(y,[["render",function(e,t,o,c,s,u){var d=(0,r.resolveComponent)("TableHeader"),h=(0,r.resolveComponent)("TableRow"),f=(0,r.resolveComponent)("card",!0);return(0,r.openBlock)(),(0,r.createBlock)(f,{id:"custom-table",class:"flex flex-col h-auto overflow-x-auto"},{default:(0,r.withCtx)((function(){return[s.title?((0,r.openBlock)(),(0,r.createElementBlock)("h1",n,(0,r.toDisplayString)(s.title),1)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("table",{class:(0,r.normalizeClass)(["w-full",o.card.style]),"data-testid":"resource-table",ref:"table"},[(0,r.createVNode)(d,{fields:s.header,"should-show-column-borders":u.shouldShowColumnBorders,"has-view-column":u.hasViewColumn},null,8,["fields","should-show-column-borders","has-view-column"]),(0,r.createElementVNode)("tbody",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(s.rows,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(h,{key:t,row:e,"should-show-tight":u.shouldShowTight,"should-show-column-borders":u.shouldShowColumnBorders,"has-view-column":u.hasViewColumn},null,8,["row","should-show-tight","should-show-column-borders","has-view-column"])})),128))])],2),s.viewAll&&s.viewAll.label?((0,r.openBlock)(),(0,r.createElementBlock)("div",a,[l,(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("a",{class:"btn btn-link py-3 px-4 text-80",href:s.viewAll.link},(0,r.toDisplayString)(s.viewAll.label),9,i)])])):(0,r.createCommentVNode)("",!0)]})),_:1})}],["__scopeId","data-v-ea22ce76"]]);Nova.booting((function(e,t){e.component("nova-custom-table-card",S)}))},820:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(645),n=o.n(r)()((function(e){return e[1]}));n.push([e.id,"#custom-table[data-v-ea22ce76]::-webkit-scrollbar{border-radius:4px;height:8px}#custom-table[data-v-ea22ce76]::-webkit-scrollbar-thumb{background:#cacaca}",""]);const a=n},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);r&&n[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},962:()=>{},379:(e,t,o)=>{var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),l=[];function i(e){for(var t=-1,o=0;o<l.length;o++)if(l[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},r=[],n=0;n<e.length;n++){var a=e[n],c=t.base?a[0]+t.base:a[0],s=o[c]||0,u="".concat(c," ").concat(s);o[c]=s+1;var d=i(u),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(l[d].references++,l[d].updater(h)):l.push({identifier:u,updater:v(h,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var n=o.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,o,r){var n=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,n);else{var a=document.createTextNode(n),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function f(e,t,o){var r=o.css,n=o.media,a=o.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,p=0;function v(e,t){var o,r,n;if(t.singleton){var a=p++;o=m||(m=s(t)),r=h.bind(null,o,a,!1),n=h.bind(null,o,a,!0)}else o=s(t),r=f.bind(null,o,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<o.length;r++){var n=i(o[r]);l[n].references--}for(var a=c(e,t),s=0;s<o.length;s++){var u=i(o[s]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}o=a}}}},744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,r]of t)o[e]=r;return o}}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={id:e,exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],i=!0,c=0;c<o.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={440:0,458:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,i,c]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var u=c(r)}for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self.webpackChunkm_a_k_o_nova_custom_table_card=self.webpackChunkm_a_k_o_nova_custom_table_card||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0,r.O(void 0,[458],(()=>r(123)));var n=r.O(void 0,[458],(()=>r(962)));n=r.O(n)})();