(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,18],{613:function(e,t,n){"use strict";n.r(t);var r={name:"WarningMessage"},o=n(44),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"alert alert-warning border d-flex align-items-center mb-0",attrs:{role:"alert"}},[t("div",{staticClass:"mr-3"},[t("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"danger","font-scale":"1.5"}})],1),e._v(" "),t("div",[e._t("default")],2)])}),[],!1,null,"1db0f313",null);t.default=component.exports},614:function(e,t,n){"use strict";var r=n(11);n(10),n(53),n(59),n(79),n(58);t.a={mounted:function(){this.refreshPeriodically()},beforeDestroy:function(){this.resetPeriodically()},methods:{fetchData:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},resetPeriodically:function(){clearTimeout(this.timeout)},refreshPeriodically:function(){var e=this;Promise.all([this.fetchData()]).then((function(){e.timeout=setTimeout((function(){e.refreshPeriodically()}),e.refreshTimeout||5e3)}))}}}},629:function(e,t,n){"use strict";n.r(t);n(48);var r=n(11),o=(n(58),{props:{server:String,pipeline:Object},data:function(){return{loading:!1}},methods:{pause:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.jobs.pause(e.server,e.pipeline.name);case 3:e.loading=!1,e.$emit("paused");case 5:case"end":return t.stop()}}),t)})))()},resume:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$api.jobs.resume(e.server,e.pipeline.name);case 3:e.loading=!1,e.$emit("resumed");case 5:case"end":return t.stop()}}),t)})))()}}}),c=n(44),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card",class:{"border-success":e.pipeline.ready}},[t("div",{staticClass:"card-header"},[t("div",{staticClass:"d-flex justify-content-between align-items-start"},[t("h5",[t("strong",[e._v(e._s(e.pipeline.name))]),e._v(" "),e.pipeline.ready?t("span",{staticClass:"badge badge-success border ml-2"},[e._v("Consuming")]):t("span",{staticClass:"badge badge-warning border ml-2"},[e._v("Paused")])]),e._v(" "),e.pipeline.ready?t("div",{staticClass:"spinner-border text-primary"}):e._e()])]),e._v(" "),t("div",{staticClass:"card-body"},[t("span",{staticClass:"badge badge-light border mr-2"},[e._v("Driver - "+e._s(e.pipeline.driver))]),e._v(" "),t("span",{staticClass:"badge badge-light border mr-2"},[e._v("Priority - "+e._s(e.pipeline.priority))]),e._v(" "),t("span",{staticClass:"badge badge-light border mr-2"},[e._v("Active jobs - "+e._s(e.pipeline.active))]),e._v(" "),t("span",{staticClass:"badge badge-light border mr-2"},[e._v("Delayed jobs - "+e._s(e.pipeline.delayed))]),e._v(" "),t("span",{staticClass:"badge badge-light border mr-2"},[e._v("Reserved jobs - "+e._s(e.pipeline.reserved))])]),e._v(" "),t("div",{staticClass:"card-footer"},[e.pipeline.ready?t("button",{staticClass:"btn btn-sm btn-warning ml-2",attrs:{type:"button"},on:{click:function(t){return e.pause()}}},[t("b-icon",{attrs:{icon:"pause-circle"}}),e._v(" Pause\n    ")],1):t("button",{staticClass:"btn btn-sm btn-success ml-2",attrs:{type:"button"},on:{click:function(t){return e.resume()}}},[t("b-icon",{attrs:{icon:"power"}}),e._v(" Consume\n    ")],1)])])}),[],!1,null,null,null);t.default=component.exports},635:function(e,t,n){"use strict";n.r(t);n(48);var r=n(11),o=(n(208),n(58),n(614)),c={props:{server:String},mixins:[o.a],data:function(){return{pipelines:[],loading:!1}},watch:{server:function(){this.fetchData()}},methods:{onPause:function(){this.fetchData()},onResume:function(){this.fetchData()},fetchData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$api.jobs.pipelines(e.server);case 3:e.pipelines=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.pipelines=[];case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}},computed:{hasPipelines:function(){return this.pipelines.length>0},sortedPipelines:function(){return this.pipelines.sort((function(a,b){return a.name.substr(1)>b.name.substr(1)?-1:b.name.substr(1)>a.name.substr(1)?1:0}))}}},l=n(44),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.hasPipelines?t("div",{staticClass:"list-group"},[t("h4",{staticClass:"mb-4"},[e._v("Pipelines")]),e._v(" "),e._l(e.sortedPipelines,(function(n){return t("JobsPipeline",{key:n.name,attrs:{pipeline:n,server:e.server},on:{paused:e.onPause,resumed:e.onResume}})}))],2):t("UIWarningMessage",[e._v("\n    There are no available Jobs pipelines on "),t("strong",[e._v(e._s(e.server))]),e._v(" server.\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{JobsPipeline:n(629).default,UIWarningMessage:n(613).default})}}]);