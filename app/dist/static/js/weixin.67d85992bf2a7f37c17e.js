webpackJsonp([6],{109:function(t,e,n){function i(t){n(110)}var o=n(0)(n(111),n(120),i,"data-v-7dc0490d",null);t.exports=o.exports},110:function(t,e){},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(67),o=n.n(i),a=n(112),s=n.n(a),c=n(116),r=n.n(c);e.default={name:"content-main",props:{mounted:Boolean,respond:Boolean,offline:Boolean,noscroll:Boolean},data:function(){return{data:null}},methods:{scroll:function(t){console.log(t)}},computed:{show:function(){return!this.respond||this.mounted}},created:function(){this.probeType=1,this.listenScroll=!1},mounted:function(){var t=this;this.$nextTick(function(){t.data=[],t.$emit("data",!0)})},components:{Spinner:o.a,Offline:s.a,Scroll:r.a}}},112:function(t,e,n){function i(t){n(113)}var o=n(0)(n(114),n(115),i,"data-v-7278da21",null);t.exports=o.exports},113:function(t,e){},114:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(48),o=n.n(i);e.default={components:{VcButton:o.a}}},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-offline"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"ol-refresh"},[n("vc-button",{attrs:{color:"vc-btn-primary-light"},on:{click:function(e){t.$emit("refresh")}}},[t._v("重新加载")])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ol-img"},[n("i",{staticClass:"icon-discover"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ol-desc"},[n("span",[t._v("页面加载失败了")]),t._v(" "),n("ins",[t._v("别紧张，轻触按钮重新加载页面")])])}]}},116:function(t,e,n){function i(t){n(117)}var o=n(0)(n(118),n(119),i,"data-v-1935758e",null);t.exports=o.exports},117:function(t,e){},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(148);e.default={name:"scroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{bype:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new i.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollbar:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/,className:/(^|\s)vc-li-item(\s|$)/}}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y===t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}},components:{BScroll:i.a}}},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-wrapper"},[t.show?n("div",{staticClass:"vc-main"},[t.offline?n("Offline",{on:{refresh:function(e){t.$emit("data",!0)}}}):t.noscroll?n("div",{staticClass:"g-container"},[t._t("default")],2):n("scroll",{ref:"mainList",staticClass:"main-list",attrs:{data:t.data,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[n("div",{staticClass:"g-container"},[t._t("default")],2)])],1):n("div",{staticClass:"vc-loading"},[n("spinner",{attrs:{indeterminate:""}})],1)])},staticRenderFns:[]}},13:function(t,e,n){function i(t){n(26)}var o=n(0)(n(27),n(28),i,"data-v-afe59830",null);t.exports=o.exports},14:function(t,e,n){function i(t){n(34)}var o=n(0)(n(35),n(36),i,null,null);t.exports=o.exports},17:function(t,e,n){"use strict";function i(t,e){return B.test(t)?k()(t).format(e):t}function o(t){return i(t,"YYYY-MM-DD")}function a(t){return i(t,"YYYY-MM-DD HH:mm")}function s(t){var e="YYYY-MM-DD",n=" HH:mm",o=i(t,e+n);return B.test(o)?k()(o).calendar(null,{sameDay:"[今天]"+n,nextDay:"[明天]"+n,nextWeek:e+n,lastDay:"[昨天]"+n,lastWeek:e+n,sameElse:e+n}):o}function c(t){return"number"!=typeof t&&(t=parseInt(t,10)),t.toString().length<8&&(t+=6e7),t.toString()}function r(t,e,n){var i=t.split(""),o=0;return i.forEach(function(t,a){a>=e&&o<n&&(i[a]="*",o++)}),i.join("")}var l={};n.d(l,"fullDateFormat",function(){return o}),n.d(l,"datetimeToMin",function(){return a}),n.d(l,"datetimeToMinOpt",function(){return s}),n.d(l,"fillZero",function(){return c}),n.d(l,"maskText",function(){return r});var u=(n(55),n(19),n(5)),d=n(20),f=n.n(d),p=void 0,v={install:function(t,e){if(!p){var n=t.extend(f.a);p=(new n).$mount(),document.body.appendChild(p.$el)}var i={show:function(t){p.msg=t,p.show()},close:function(){p.hide()},open:function(t){t.title&&(p.title=t.title),t.msg&&(p.msg=t.msg),t.cancel&&(p.cancel=t.cancel),t.confirm&&(p.confirm=t.confirm),p.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},m=n(6),h=n.n(m),w=void 0,g=void 0,b={install:function(t,e){if(!w){var n=t.extend(h.a);w=(new n).$mount(),document.body.appendChild(w.$el)}var i={loading:function(t){w.position="middle",w.title=t,w.icon="load",w.show()},open:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show()},close:function(){w.hide()},autoClose:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show(),t.autoClose&&(g&&clearTimeout(g),g=setTimeout(function(){w.hide()},1e3*t.sec))},error:function(t){w.position="bottom",w.icon=null,w.title=t,w.show(),g&&clearTimeout(g),g=setTimeout(function(){w.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},_=n(30),y=n.n(_),x=void 0,C={install:function(t,e){if(!x){var n=t.extend(y.a);x=(new n).$mount(),document.body.appendChild(x.$el)}var i={init:function(t){x.btns=t},show:function(){x.show()},close:function(){x.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}},T=n(62),$=n.n(T),S=n(63),j=n.n(S),O=n(54),k=n.n(O),B=/\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;u.a.use(v),u.a.use(b),u.a.use(C),$.a.config("https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621").addPlugin(j.a,u.a).install();for(var E in l)u.a.filter(E,l[E])},19:function(t,e){},2:function(t,e,n){"use strict";function i(){return j.a?new S.a(function(t,e){window.apiready=function(){w("light"),t()}}):S.a.resolve()}function o(t){t=T()({},t,{overScrollMode:"scrolls",slidBackEnabled:!0,slidBackType:"edge",historyGestureEnabled:!0,hideHomeIndicator:!0}),window.api?(window.api.openWin(t),b()):(t.pageParam&&Object(j.f)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){var e=t.url,n=t.name,i=t.rect,o=void 0===i?{x:0,y:0,w:"auto",h:"auto"}:i,a=t.pageParam,s=void 0===a?{}:a,c=t.bounces,r=window.document.documentElement,l=parseInt(r.getAttribute("data-dpr"),10),u={url:e,name:n,rect:o,pageParam:s,bounces:c,useWKWebView:!0,progress:{type:"page",color:"#45C01A"},hScrollBarEnabled:!1,overScrollMode:"scrolls"};"number"==typeof u.rect.x&&(u.rect.x/=l),"number"==typeof u.rect.y&&(u.rect.y/=l),"number"==typeof u.rect.w&&(u.rect.w/=l),"number"==typeof u.rect.h&&(u.rect.h/=l),window.api&&window.api.openFrame(u)}function s(t){window.api?window.api.historyBack({frameName:t},function(t,e){f("portrait_up"),!t.status&&window.api.closeWin()}):window.history.go(-1)}function c(t){window.api&&window.api.closeToWin({name:t})}function r(){return window.api?window.api.pageParam:window.$api.getStorage("pageparams","object")}function l(){var t=void 0,e="再按一次退出"+window.api.appName;p("keyback").then(function(n){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:e,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))}).catch(function(t){alert(t)})}function u(){var t={bgColor:"#f2f2f2",textColor:"#999",textDown:"下拉刷新...",textUp:"松开刷新..."};if(window.api)return new S.a(function(e,n){window.api.setRefreshHeaderInfo(t,function(t,i){console.log("ret:"+x()(t)),console.log("err:"+i),i?n(i):e(t)})});console.log("api is not be found in setRefreshHeader")}function d(t){window.api?window.api.setFullScreen({fullScreen:t}):console.log("api is not be found in setFullScreen")}function f(t){window.api?window.api.setScreenOrientation({orientation:t}):console.log("api is not be found in setScreen")}function p(t){return window.api?new S.a(function(e,n){window.api.addEventListener({name:t},function(t,i){var o=t&&t.value||{};i&&i.msg&&n(i.msg),e(o)})}):(console.warn("api is not be found in addEvent"),S.a.resolve())}function v(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:e}):console.warn("api is not be found in sendEvent")}function h(t){var e=t.winName,n=t.frmName,i=t.jsfun;window.api?e?n?window.api.execScript({name:e,frameName:n,script:i}):window.api.execScript({name:e,script:i}):window.api.execScript({frameName:n,script:i}):console.warn("api is not be found in execScript")}function w(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function g(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function b(){window.api?(Object(O.b)("加载中"),p("removePage").then(function(t){Object(O.c)(),v("removePage")}).catch(function(t){alert(t)}),p("viewdisappear").then(function(t){return m("removePage")}).catch(function(t){alert(t)})):console.warn("api is not be found in openPage")}function _(t){return t=T()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new S.a(function(e,n){window.api.getPicture(t,function(n,i){if(n){var o="base64"===t.destinationType?n.base64Data:n.data;e(o)}else i&&i.msg&&Object(O.a)(i.msg)})}):S.a.resolve()}e.b=i,e.i=o,e.j=a,e.c=s,e.d=c,e.g=r,e.e=l,e.n=u,e.m=d,e.o=f,e.a=p,e.l=m,e.f=h,e.k=g,e.h=_;var y=n(16),x=n.n(y),C=n(3),T=n.n(C),$=n(37),S=n.n($),j=n(4),O=n(9)},20:function(t,e,n){function i(t){n(21)}var o=n(0)(n(22),n(23),i,"data-v-136ae367",null);t.exports=o.exports},21:function(t,e){},22:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i);e.default={name:"vc-dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},23:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"dialog-fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"dialog-wrapper"},[n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),n("div",{staticClass:"operate g-row"},[n("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),n("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},24:function(t,e){},25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),o=n.n(i);e.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},26:function(t,e){},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},29:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?n("div",{staticClass:"vc-toast-icon"},[n("p",["load"===t.icon?n("loader-rack"):n("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?n("div",{staticClass:"vc-toast-title"},[n("p",[n("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?n("div",[n("p",[n("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},30:function(t,e,n){function i(t){n(31)}var o=n(0)(n(32),n(33),i,"data-v-73609114",null);t.exports=o.exports},31:function(t,e){},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"as-slide",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[n("div",{staticClass:"vc-as-menu"},[n("ul",t._l(t.btns,function(e){return n("li",{staticClass:"vc-as-btn"},[n("div",{staticClass:"vc-li-item",on:{click:e.handle}},[n("span",{domProps:{innerHTML:t._s(e.name)}})])])}))]),t._v(" "),n("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},34:function(t,e){},35:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,e=this.$refs.top.offsetHeight,n=this.$refs.foot.offsetHeight,i=t-e-n;this.$emit("position",{top:e,foot:n,content:i}),this.$refs.content.style.height=i+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})}}},36:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"page",staticClass:"vc-page"},[n("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),n("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),n("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},38:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return a}),n.d(e,"c",function(){return s});var i=0,o=110,a="WAPMAN",s="http://localhost:5000"},4:function(t,e,n){"use strict";function i(t){var e=!(!t||1!==t.nodeType);return e||console.warn("This function need el param, el param must be DOM Element"),e}function o(t,e){if(i(t))return t.className.indexOf(e)>-1}function a(t,e){if(i(t)&&!o(t,e)){if("classList"in t)t.classList.add(e);else{var n=t.className,a=n+" "+e;t.className=a}return t}}function s(t,e){var n=window.localStorage;n&&2===arguments.length&&("object"===(void 0===e?"undefined":v()(e))?(e=f()(e),e="obj-"+e):e="str-"+e,n.setItem(t,e))}function c(t){var e=window.localStorage;if(e){var n=e.getItem(t);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}}function r(){var t=window.localStorage;t&&t.clear()}function l(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w&&g>=5&&(t.style.paddingTop="0.53334rem")}function u(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w?l(t):h&&g>=4.4&&(t.style.paddingTop="0.66667rem")}n.d(e,"a",function(){return m}),e.b=a,e.f=s,e.e=c,e.c=r,e.d=u;var d=n(16),f=n.n(d),p=n(66),v=n.n(p),m=/file/gi.test(location.protocol),h=/android/gi.test(navigator.appVersion),w=/iPhone|iPad/gi.test(navigator.appVersion),g=parseFloat(navigator.appVersion)},42:function(t,e,n){function i(t){n(43)}var o=n(0)(n(44),n(45),i,"data-v-649a4d91",null);t.exports=o.exports},43:function(t,e){},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),a=n(2),s=n(4);e.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(a.c)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){s.a&&Object(s.d)(this.$refs.bar)}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},45:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bar",staticClass:"c-bar"},[n("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[n("i",{class:t.left.icon})]),t._v(" "),n("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?n("div",[n("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),n("i",{class:t.titleBtn.icon})]):n("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),n("div",{staticClass:"c-bar-right c-square"},[t._l(t.right,function(e){return n("div",{staticClass:"c-right-item",on:{click:e.handle}},[e.icon?n("i",{class:e.icon}):n("span",[t._v(t._s(e.text))])])}),t._v(" "),t._t("baright")],2),t._v(" "),n("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},46:function(t,e,n){"use strict";function i(t){return new s.a(function(e,n){setTimeout(e,t)})}function o(t){return r.a.AES.encrypt(t.toString(),l.d).toString()}e.b=i,e.a=o;var a=n(37),s=n.n(a),c=n(88),r=n.n(c),l=n(38)},48:function(t,e,n){function i(t){n(51)}var o=n(0)(n(52),n(53),i,"data-v-3d98de8a",null);t.exports=o.exports},51:function(t,e){},52:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{btn:Object,disabled:Boolean,color:String},computed:{classes:function(){return this.color||"vc-btn-primary"}}}},53:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-btn"},[n("button",{class:t.classes,attrs:{disabled:t.disabled}},[t._t("default")],2)])},staticRenderFns:[]}},6:function(t,e,n){function i(t){n(24)}var o=n(0)(n(25),n(29),i,"data-v-525e81a9",null);t.exports=o.exports},64:function(t,e,n){function i(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./zh-cn":15,"./zh-cn.js":15};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=64},661:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(17),n(5)),o=n(662),a=n.n(o),s=n(2);Object(s.b)().then(function(){new i.a({el:"#app",render:function(t){return t(a.a)}})})},662:function(t,e,n){function i(t){n(663)}var o=n(0)(n(664),n(665),i,"data-v-71bc22f8",null);t.exports=o.exports},663:function(t,e){},664:function(t,e,n){"use strict";function i(t){var e=0;window.api||e>40?t({status:Boolean(window.api)}):(e++,Object(x.b)(50).then(function(){i(t)}))}function o(){return new y.a(function(t,e){$.auth({apiKey:""},function(e,n){if(n.code)return n.code=1===n.code&&2,n.code=2===n.code&&4,n.code=3===n.code&&100,void Object(C.a)(T[n.code]);e&&(e.status?t(e.code):Object(C.a)(T[99]))})})}function a(t,e){$.getToken({apiKey:"",apiSecret:"",code:t},function(t,n){if(n.code)return void Object(C.a)(T[n.code]);t&&(t.status?e(t):Object(C.a)(T[98]))})}function s(){return new y.a(function(t,e){$.isInstalled(function(e,n){if(n.code)return void Object(C.a)(T[n.code]);e&&(e.installed?t():Object(C.a)(T[100]))})})}function c(t){$.shareWebpage(b()({},{apiKey:"",scene:"session"},t),function(t,e){return e.code?void Object(C.a)(T[e.code]):t&&t.status})}function r(t){$.shareImage(b()({},{apiKey:"",scene:"session"},t),function(t,e){return e.code?void Object(C.a)(T[e.code]):t&&t.status})}function l(t){$.shareVideo(b()({},{apiKey:"",scene:"timeline"},t),function(t,e){return e.code?void Object(C.a)(T[e.code]):t&&t.status})}Object.defineProperty(e,"__esModule",{value:!0});var u=n(14),d=n.n(u),f=n(42),p=n.n(f),v=n(109),m=n.n(v),h=n(48),w=n.n(h),g=n(3),b=n.n(g),_=n(37),y=n.n(_),x=n(46),C=n(9),T={"-1":"未知错误",1:"apiKey非法",2:"用户取消",3:"发送失败",4:"授权拒绝",5:"微信服务器返回的不支持错误",7:"注册SDK失败",12:"refreshToken值为空",13:"refreshToken非法",14:"网络超时",15:"刷新 accessToken失败",98:"获取授权 accessToken失败",99:"登录授权失败",100:"您未安装微信客户端"},$=void 0;(function(t){return new y.a(function(e,n){i(function(i){i&&i.status?e(window.api.require(t)):n(t)})})})("wx").then(function(t){$=t},function(t){Object(C.a)(t+"模块加载失败")});e.default={data:function(){return{}},methods:{getToken:function(){o().then(function(t){a(t,function(t){console.log(t),window.api.alert({msg:t})})})},sharePage:function(){s().then(function(){c({title:"这是一个title内容",contentUrl:"http://api.pjpiao.com"})})},shareImage:function(){s().then(function(){r({thumb:"widget://dist/static/img/user.a50845f.jpg",contentUrl:"widget://dist/static/img/user.a50845f.jpg"})})},shareVideo:function(){s().then(function(){l()})}},components:{Page:d.a,TopBar:p.a,ContentMain:m.a,VcButton:w.a}}},665:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("top-bar",{attrs:{title:"微信功能demo"}}),t._v(" "),n("content-main",[n("div",{staticClass:"g-box"},[n("div",{staticClass:"m-button"},[n("vc-button",{on:{click:t.getToken}},[t._v("获取授权")])],1),t._v(" "),n("div",{staticClass:"m-button"},[n("vc-button",{on:{click:t.sharePage}},[t._v("分享网页")])],1),t._v(" "),n("div",{staticClass:"m-button"},[n("vc-button",{on:{click:t.shareImage}},[t._v("分享图片")])],1),t._v(" "),n("div",{staticClass:"m-button"},[n("vc-button",{on:{click:t.shareVideo}},[t._v("分享视频")])],1)])])],1)},staticRenderFns:[]}},67:function(t,e,n){function i(t){n(68)}var o=n(0)(n(69),n(70),i,"data-v-d6c7eda0",null);t.exports=o.exports},68:function(t,e){},69:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner",props:{size:{type:Number,default:1.067},stroke:{type:Number,default:3.5},indeterminate:Boolean,progress:{type:Number,default:0}},computed:{classes:function(){return{"vc-indeterminate":this.indeterminate}},styles:function(){var t=this.size+"rem";return{width:t,height:t}},dashProgress:function(){var t=125*this.progress/100;return!this.indeterminate&&(t>=125&&(t=130),t+", 200")}}}},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vc-spinner",appear:""}},[n("div",{staticClass:"vc-spinner",class:t.classes,style:t.styles},[n("svg",{staticClass:"vc-spinner-draw",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"vc-spinner-path",attrs:{cx:"50",cy:"50",r:"20","stroke-width":t.stroke,"stroke-dasharray":t.dashProgress}})])])])},staticRenderFns:[]}},9:function(t,e,n){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),l&&clearTimeout(l),l=setTimeout(function(){d.hide()},3e3)}e.b=i,e.c=o,e.a=a;var s=n(5),c=n(6),r=n.n(c),l=null,u=s.a.extend(r.a),d=(new u).$mount();document.body.appendChild(d.$el)}},[661]);