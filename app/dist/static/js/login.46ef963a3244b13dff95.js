webpackJsonp([5],{100:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(141),o=e.n(i);n.default={name:"scroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{bype:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new o.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollbar:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/,className:/(^|\s)vc-li-item(\s|$)/}}),this.listenScroll){var n=this;this.scroll.on("scroll",function(t){n.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y===t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}},components:{BScroll:o.a}}},101:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},102:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"g-wrapper"},[t.show?e("div",{staticClass:"vc-main"},[t.offline?e("Offline",{on:{refresh:function(n){t.$emit("data",!0)}}}):e("scroll",{ref:"mainList",staticClass:"main-list",attrs:{data:t.data,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"g-container"},[t._t("default")],2)])],1):e("div",{staticClass:"vc-loading"},[e("spinner",{attrs:{indeterminate:""}})],1)])},staticRenderFns:[]}},13:function(t,n,e){function i(t){e(39)}var o=e(1)(e(40),e(44),i,"data-v-525e81a9",null);t.exports=o.exports},14:function(t,n,e){"use strict";function i(t){window.apiready?window.apiready=function(){t()}:t()}function o(t){t=v()({},t,{slidBackEnabled:!1,useWKWebView:!0,historyGestureEnabled:!0}),window.api?(window.api.openWin(t),p()):(t.pageParam&&Object(h.c)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function s(t){window.api?window.api.historyBack({frameName:t},function(t,n){!t.status&&window.api.closeWin()}):window.history.go(-1)}function a(t,n){window.api&&window.api.addEventListener({name:t},function(t,e){n(t,e)})}function c(t){window.api&&window.api.removeEventListener({name:t})}function r(t,n){window.api&&window.api.sendEvent({name:t,extra:n})}function l(t){window.api&&window.api.setStatusBarStyle({style:t})}function u(t){window.api&&window.api.addEventListener({name:"viewdisappear"},function(n,e){t(n,e)})}function d(){a("removePage",function(t,n){Object(m.c)()})}function p(){window.api&&(Object(m.b)("加载中"),d(),u(function(t,n){r("removePage",null),c("removePage")}))}n.a=i,n.c=o,n.b=s,n.d=l;var f=e(11),v=e.n(f),h=e(16),m=e(24)},16:function(t,n,e){"use strict";function i(t){return!(!t||1!==t.nodeType)}function o(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":d()(n))?(n=l()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function s(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function a(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");f&&v>=5&&(t.style.paddingTop="0.53334rem")}function c(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");f?a(t):p&&v>=4.4&&(t.style.paddingTop="0.66667rem")}n.c=o,n.b=s,n.a=c;var r=e(110),l=e.n(r),u=e(86),d=e.n(u),p=/android/gi.test(navigator.appVersion),f=/iPhone|iPad/gi.test(navigator.appVersion),v=parseFloat(navigator.appVersion)},24:function(t,n,e){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function s(t){d.position="bottom",d.icon=null,d.title=t,d.show(),Object(l.a)(3e3).then(function(){d.hide()})}n.b=i,n.c=o,n.a=s;var a=e(12),c=e(13),r=e.n(c),l=e(28),u=a.a.extend(r.a),d=(new u).$mount();document.body.appendChild(d.$el)},27:function(t,n,e){function i(t){e(41)}var o=e(1)(e(42),e(43),i,"data-v-afe59830",null);t.exports=o.exports},28:function(t,n,e){"use strict";function i(t){return new s.a(function(n,e){setTimeout(n,t)})}n.a=i;var o=e(62),s=e.n(o)},30:function(t,n,e){"use strict";var i=(e(103),e(34),e(12)),o=e(108),s=e.n(o),a=e(35),c=e.n(a),r=void 0,l={install:function(t,n){if(!r){var e=t.extend(c.a);r=(new e).$mount(),document.body.appendChild(r.$el)}var i={show:function(t){r.msg=t,r.show()},close:function(){r.hide()},open:function(t){t.title&&(r.title=t.title),t.msg&&(r.msg=t.msg),t.cancel&&(r.cancel=t.cancel),t.confirm&&(r.confirm=t.confirm),r.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},u=e(13),d=e.n(u),p=void 0,f=void 0,v={install:function(t,n){if(!p){var e=t.extend(d.a);p=(new e).$mount(),document.body.appendChild(p.$el)}var i={loading:function(t){p.position="middle",p.title=t,p.icon="load",p.show()},open:function(t){p.position=t.position,p.title=t.title,p.text=t.text,p.icon=t.icon,p.show()},close:function(){p.hide()},autoClose:function(t){p.position=t.position,p.title=t.title,p.text=t.text,p.icon=t.icon,p.show(),t.autoClose&&(f&&clearTimeout(f),f=setTimeout(function(){p.hide()},1e3*t.sec))},error:function(t){p.position="bottom",p.icon=null,p.title=t,p.show(),f&&clearTimeout(f),f=setTimeout(function(){p.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}};i.a.use(l),i.a.use(v),s.a.attach(document.body)},34:function(t,n){},35:function(t,n,e){function i(t){e(36)}var o=e(1)(e(37),e(38),i,"data-v-136ae367",null);t.exports=o.exports},36:function(t,n){},37:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(11),o=e.n(i);n.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},38:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},39:function(t,n){},40:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(27),o=e.n(i);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},41:function(t,n){},42:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},43:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},44:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},52:function(t,n,e){function i(t){e(94)}var o=e(1)(e(95),e(96),i,"data-v-3d98de8a",null);t.exports=o.exports},538:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(30),e(12)),o=e(539),s=e.n(o),a=e(14);Object(a.a)(function(){console.log(navigator.appVersion),new i.a({el:"#app",render:function(t){return t(s.a)}})})},539:function(t,n,e){function i(t){e(540)}var o=e(1)(e(541),e(546),i,"data-v-3358d14a",null);t.exports=o.exports},540:function(t,n){},541:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(542),o=e.n(i),s=e(52),a=e.n(s),c=e(88),r=e.n(c);n.default={data:function(){return{code:{text:"获取验证码",handle:function(){console.log("请求验证码")}},sign:!1}},methods:{login:function(){this.sign=!0,console.log("login")},a:function(){console.log("a")}},components:{InputGroup:o.a,VcButton:a.a,ContentMain:r.a}}},542:function(t,n,e){function i(t){e(543)}var o=e(1)(e(544),e(545),i,"data-v-1543c03e",null);t.exports=o.exports},543:function(t,n){},544:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"input",props:{addon:{type:String},btn:{type:Object},placeholder:{type:String},group:{type:String,default:"input-group"},type:{type:String},size:{type:Number}}}},545:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-input",class:t.group},[t.addon?e("span",{staticClass:"vc-input-addon",domProps:{innerHTML:t._s(t.addon)}}):t._e(),t._v(" "),e("input",{staticClass:"vc-form-control",attrs:{type:t.type,placeholder:t.placeholder}}),t._v(" "),t.btn?e("span",{staticClass:"vc-input-btn",domProps:{innerHTML:t._s(t.btn.text)},on:{click:t.btn.handle}}):t._e()])},staticRenderFns:[]}},546:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"g-container"},[e("h2",[t._v("用户中心")]),t._v(" "),e("a",{attrs:{href:"/"}},[t._v("跳转到首页")]),t._v(" "),e("h4",[t._v("用户登陆")]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-form"},[e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"tel",addon:"手机号",placeholder:"请输入手机号"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"password",addon:"验证码",placeholder:"请输入验证码",btn:t.code}})],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-button"},[e("div",{staticClass:"g-col"},[t.sign?e("vc-button",[t._v("登录"),e("ins",[t._v("...")])]):e("vc-button",{on:{click:t.login}},[t._v("登录")])],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-form"},[e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"tel",placeholder:"请输入手机号码"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"password",placeholder:"请输入验证码",btn:t.code}})],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-button"},[e("div",{staticClass:"g-col"},[e("vc-button",{on:{click:t.login}},[t._v("登录")])],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-form"},[e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"text",placeholder:"请输入用户名"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"password",placeholder:"请输入密码"}})],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-button"},[e("div",{staticClass:"g-col"},[e("vc-button",{on:{click:t.login}},[t._v("登录")])],1)])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"g-row g-list-padding list"},[e("div",{staticClass:"g-col-4"},[e("label",[t._v("\n          我是个人中心页\n        ")])]),t._v(" "),e("div",{staticClass:"g-col-4"},[e("label",{attrs:{for:""}},[t._v("\n          wddd\n        ")])])])}]}},55:function(t,n,e){function i(t){e(56)}var o=e(1)(e(57),e(58),i,"data-v-d6c7eda0",null);t.exports=o.exports},56:function(t,n){},57:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"spinner",props:{size:{type:Number,default:1.067},stroke:{type:Number,default:3.5},indeterminate:Boolean,progress:{type:Number,default:0}},computed:{classes:function(){return{"vc-indeterminate":this.indeterminate}},styles:function(){var t=this.size+"rem";return{width:t,height:t}},dashProgress:function(){var t=125*this.progress/100;return!this.indeterminate&&(t>=125&&(t=130),t+", 200")}}}},58:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"vc-spinner",appear:""}},[e("div",{staticClass:"vc-spinner",class:t.classes,style:t.styles},[e("svg",{staticClass:"vc-spinner-draw",attrs:{viewBox:"25 25 50 50"}},[e("circle",{staticClass:"vc-spinner-path",attrs:{cx:"50",cy:"50",r:"20","stroke-width":t.stroke,"stroke-dasharray":t.dashProgress}})])])])},staticRenderFns:[]}},88:function(t,n,e){function i(t){e(89)}var o=e(1)(e(90),e(102),i,"data-v-7dc0490d",null);t.exports=o.exports},89:function(t,n){},90:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(55),o=e.n(i),s=e(91),a=e.n(s),c=e(98),r=e.n(c);n.default={name:"content-main",props:{mounted:Boolean,respond:Boolean,offline:Boolean},data:function(){return{data:null}},methods:{scroll:function(t){console.log(t)}},computed:{show:function(){return!this.respond||this.mounted}},created:function(){this.probeType=1,this.listenScroll=!1},mounted:function(){var t=this;this.$nextTick(function(){t.data=[],t.$emit("data",!0)})},components:{Spinner:o.a,Offline:a.a,Scroll:r.a}}},91:function(t,n,e){function i(t){e(92)}var o=e(1)(e(93),e(97),i,"data-v-7278da21",null);t.exports=o.exports},92:function(t,n){},93:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(52),o=e.n(i);n.default={components:{VcButton:o.a}}},94:function(t,n){},95:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{btn:Object,disabled:Boolean,color:String},computed:{classes:function(){return this.color||"vc-btn-primary"}}}},96:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-btn"},[e("button",{class:t.classes,attrs:{disabled:t.disabled},on:{click:function(n){t.$emit("click",n)}}},[t._t("default")],2)])},staticRenderFns:[]}},97:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-offline"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",{staticClass:"ol-refresh"},[e("vc-button",{attrs:{color:"vc-btn-primary-light"},on:{click:function(n){t.$emit("refresh")}}},[t._v("重新加载")])],1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"ol-img"},[e("i",{staticClass:"icon-discover"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"ol-desc"},[e("span",[t._v("页面加载失败了")]),t._v(" "),e("ins",[t._v("别紧张，轻触按钮重新加载页面")])])}]}},98:function(t,n,e){function i(t){e(99)}var o=e(1)(e(100),e(101),i,"data-v-1935758e",null);t.exports=o.exports},99:function(t,n){}},[538]);