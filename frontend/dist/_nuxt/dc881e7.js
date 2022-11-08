(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13,15,17,18],{613:function(t,e,n){"use strict";n.r(e);var r={name:"WarningMessage"},o=n(44),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert alert-warning border d-flex align-items-center mb-0",attrs:{role:"alert"}},[e("div",{staticClass:"mr-3"},[e("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"danger","font-scale":"1.5"}})],1),t._v(" "),e("div",[t._t("default")],2)])}),[],!1,null,"1db0f313",null);e.default=component.exports},614:function(t,e,n){"use strict";var r=n(11);n(10),n(53),n(59),n(79),n(58);e.a={mounted:function(){this.refreshPeriodically()},beforeDestroy:function(){this.resetPeriodically()},methods:{fetchData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},resetPeriodically:function(){clearTimeout(this.timeout)},refreshPeriodically:function(){var t=this;Promise.all([this.fetchData()]).then((function(){t.timeout=setTimeout((function(){t.refreshPeriodically()}),t.refreshTimeout||5e3)}))}}}},615:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(298);var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e?1e3:1024;if(Math.abs(t)<r)return t+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,c=Math.pow(10,n);do{t/=r,++u}while(Math.round(Math.abs(t)*c)/c>=r&&u<o.length-1);return t.toFixed(n)+" "+o[u]},o=function(t){return t.toFixed(3)+"%"}},617:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:c},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,n,a),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),c=Object.assign({},i,r);return Object.keys(c).map((function(t){s.$slots[t]=c[t]})),s}}};i(0),u.install=function(t){var e=l(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{});t.$loading=e,t.prototype.$loading=e},e.default=u}]).default},621:function(t,e,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("4eee6e6d",content,!0,{sourceMap:!1})},622:function(t,e,n){var r=n(90)(!1);r.push([t.i,".vld-overlay,.vld-shown{overflow:hidden}.vld-overlay{bottom:0;left:0;position:absolute;right:0;top:0;align-items:center;display:none;justify-content:center;z-index:9999}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{z-index:9999;position:fixed}.vld-overlay .vld-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#fff;opacity:.5}.vld-overlay .vld-icon,.vld-parent{position:relative}",""]),t.exports=r},625:function(t,e,n){"use strict";n.r(e);var r=n(617),o=n.n(r),c=(n(621),{components:{Loading:o.a},props:{active:Boolean}}),l=n(44),component=Object(l.a)(c,(function(){return(0,this._self._c)("Loading",{attrs:{active:this.active,height:30,"is-full-page":!1}})}),[],!1,null,null,null);e.default=component.exports},626:function(t,e,n){"use strict";n.r(e);var r=n(615),o={props:{service:Object},computed:{classStr:function(){return this.failed?"bg-warning":"bg-success"},cpuUsage:function(){return Object(r.a)(this.service.cpu_percent)},memoryUsage:function(){return Object(r.b)(this.service.memory_usage)},failed:function(){return null!==this.service.error}}},c=n(44),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-group-item",class:{"border-warning":t.failed,"border-success":!t.failed}},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rounded-circle worker-status mr-3",class:t.classStr,attrs:{role:"status"}}),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("PID #"+t._s(t.service.pid))]),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("CPU - "+t._s(t.cpuUsage))]),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("Memory - "+t._s(t.memoryUsage))])]),t._v(" "),t.failed?e("span",{staticClass:"text-danger"},[e("b-icon",{attrs:{icon:"exclamation-circle","font-scale":"1.3"}})],1):t._e()]),t._v(" "),t.failed?e("UIWarningMessage",{staticClass:"mt-3"},[t._v("\n    "+t._s(t.service.error.message)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UIWarningMessage:n(613).default})},630:function(t,e,n){"use strict";n.r(e);n(48);var r=n(11),o=(n(58),n(45),n(617)),c=n.n(o),l=n(614),d={components:{Loading:c.a},mixins:[l.a],props:{server:String,name:String},data:function(){return{loading:!1,statuses:[]}},watch:{server:function(){this.fetchData(),this.listenEvents()}},mounted:function(){this.listenEvents()},beforeDestroy:function(){this.$ws.serverChannel(this.server).stopListening("service.restarted")},methods:{listenEvents:function(){var t=this;this.$ws.serverChannel(this.server).listen("service.restarted",(function(data){data.service===t.name&&(data.status?t.$toast.success("".concat(data.service," processes on server ").concat(data.server," were restarted.")):t.$toast.error("Something went wrong."),t.$emit("restarted"),t.fetchData())}))},restart:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$api.services.restart(t.server,t.name);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t.$toast.error(e.t0.message);case 9:t.loading=!1;case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))()},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$api.services.status(t.server,t.name);case 3:t.statuses=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()}},computed:{hasStatuses:function(){return this.statuses.length>0},command:function(){return this.statuses[0]?this.statuses[0].command:""}}},f=n(44),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("UILoading",{attrs:{active:t.loading}}),t._v(" "),e("div",{staticClass:"card-header"},[e("div",{staticClass:"d-flex justify-content-between align-items-start"},[e("div",[e("h6",{staticClass:"d-flex align-items-center"},[e("b-icon",{staticClass:"mr-3",attrs:{icon:"hdd-network","font-scale":"1.5"}}),t._v(" "),e("strong",[t._v(t._s(t.name))])],1),t._v(" "),t.command?e("span",{staticClass:"badge border bg-light mt-2"},[t._v("Command: "),e("strong",[t._v(t._s(t.command))])]):t._e()])])]),t._v(" "),t.hasStatuses?e("div",{staticClass:"list-group list-group-flush"},t._l(t.statuses,(function(t){return e("ServicesStatus",{key:t.pid,attrs:{service:t}})})),1):t._e(),t._v(" "),e("div",{staticClass:"card-footer p-2"},[e("button",{staticClass:"btn btn-sm btn-danger ml-2",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.restart.apply(null,arguments)}}},[e("b-icon",{attrs:{icon:"arrow-clockwise"}}),t._v("\n      Restart\n    ")],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UILoading:n(625).default,ServicesStatus:n(626).default})},636:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(58),n(299),n(208),{mixins:[n(614).a],props:{server:String,refreshTimeout:{type:Number,default:2e3}},data:function(){return{services:[]}},watch:{server:function(){this.fetchData()}},methods:{fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.services.list(t.server);case 2:t.services=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},computed:{hasServices:function(){return this.services.length>0},sortedServices:function(){return this.services.sort((function(a,b){return a.substr(1)>b.substr(1)?-1:b.substr(1)>a.substr(1)?1:0}))}}}),c=n(44),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.hasServices?e("div",{staticClass:"list-group"},t._l(t.sortedServices,(function(n){return e("ServicesItem",{key:n,staticClass:"mb-4 shadow-sm",attrs:{name:n,server:t.server}})})),1):e("UIWarningMessage",[t._v("\n    There are no available services on "),e("strong",[t._v(t._s(t.server))]),t._v(" server.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ServicesItem:n(630).default,UIWarningMessage:n(613).default})}}]);