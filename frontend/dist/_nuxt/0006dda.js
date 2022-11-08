(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,8,18],{614:function(t,e,r){"use strict";r.r(e);var n={name:"WarningMessage"},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert alert-warning border d-flex align-items-center mb-0",attrs:{role:"alert"}},[e("div",{staticClass:"mr-3"},[e("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"danger","font-scale":"1.5"}})],1),t._v(" "),e("div",[t._t("default")],2)])}),[],!1,null,"1db0f313",null);e.default=component.exports},615:function(t,e,r){"use strict";var n=r(11);r(10),r(53),r(59),r(79),r(58);e.a={mounted:function(){this.refreshPeriodically()},beforeDestroy:function(){this.resetPeriodically()},methods:{fetchData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},resetPeriodically:function(){clearTimeout(this.timeout)},refreshPeriodically:function(){var t=this;Promise.all([this.fetchData()]).then((function(){t.timeout=setTimeout((function(){t.refreshPeriodically()}),t.refreshTimeout||5e3)}))}}}},624:function(t,e,r){"use strict";r.r(e);var n,c=r(46),o=(r(10),r(17),r(48),r(59),r(67));function l(t,e,r,c){t(e,r),void 0!==c&&c.emit(n.ChartRendered)}function h(t,e){t.destroy(),void 0!==e&&e.emit(n.ChartDestroyed)}function d(t,e,r){const n=[];t.datasets=e.datasets.map((e=>{const c=t.datasets.find((t=>t[r]===e[r]));return c&&e.data&&!n.includes(c)?(n.push(c),Object.assign(c,e),c):{...e}}))}!function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"}(n||(n={}));function f(t,e,r){let c={};return{props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data:()=>({_chart:null,_id:Math.random().toString(36).substring(2)}),computed:{hasAnnotationPlugin(){var t,e;return void 0!==(null===(t=this.chartOptions)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.annotation)}},created(){o.e.register(r)},mounted(){c[this.$data._id]=null,"datasets"in this.chartData&&this.chartData.datasets.length>0&&(l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))},watch:{chartData:{handler:function(t,e){this.chartDataHandler(t,e)},deep:!0},chartOptions:{handler:function(t){this.chartOptionsHandler(t)},deep:!0}},methods:{renderChart(data,t){const r=this.getCurrentChart();if(null!==r&&(h(r),this.$emit(n.ChartDestroyed)),!this.$refs.canvas)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");{const r=function(data,t){const e={labels:void 0===data.labels?[]:[...data.labels],datasets:[]};return d(e,{...data},t),e}(data,this.datasetIdKey),n=this.$refs.canvas.getContext("2d");null!==n&&this.setCurrentChart(new o.e(n,{type:e,data:r,options:t,plugins:this.plugins}))}},chartDataHandler(t,e){const r={...t},c={...e},o=this.getCurrentChart();if(Object.keys(c).length>0){const t=function(t,e){const r=t.datasets.map((t=>t.label)),n=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&r.every(((t,e)=>t===n[e]))}(r,c);t&&null!==o?(d(o.data,r,this.datasetIdKey),void 0!==r.labels&&(!function(t,e,r){t.data.labels=e,void 0!==r&&r.emit(n.LabelsUpdated)}(o,r.labels),this.$emit(n.LabelsUpdated)),this.updateChart(),this.$emit(n.ChartUpdated)):(null!==o&&(h(o),this.$emit(n.ChartDestroyed)),l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))}else null!==o&&(h(o),this.$emit(n.ChartDestroyed)),l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered)},chartOptionsHandler(t){const e=this.getCurrentChart();null!==e?(!function(t,e){t.options={...e}}(e,t),this.updateChart()):l(this.renderChart,this.chartData,this.chartOptions)},updateChart(){!function(t,e){t.update(),void 0!==e&&e.emit(n.ChartUpdated)}(this.getCurrentChart())},getCurrentChart(){return this.hasAnnotationPlugin?c[this.$data._id]:this.$data._chart},setCurrentChart(t){this.hasAnnotationPlugin?c[this.$data._id]=t:this.$data._chart=t}},beforeDestroy(){const t=this.getCurrentChart();null!==t&&(h(t),this.$emit(n.ChartDestroyed))},render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])}}}o.a,o.f;const m=f("line-chart","line",o.h);o.k,o.m,o.n,o.c,o.o;var v={components:{LineChart:m},props:{units:{type:String,default:null},metrics:Array,height:{type:String,default:"80vh"}},computed:{chartData:function(){var t=this,e=[];return this.metrics.forEach((function(r){var n={label:r.name,data:[],borderWidth:1,borderColor:["rgba(75, 192, 192, 1)","rgba(255, 206, 86, 1)","rgba(54, 162, 235, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"]};r.range.values.forEach((function(e){var r=Object(c.a)(e,2),o=r[0],l=r[1];n.data.push({x:t.$moment.unix(o).format("HH:mm:ss"),y:l})})),e.push(n)})),{datasets:e}},chartOptions:function(){return{responsive:!0,animation:!1,elements:{point:{radius:0}}}}}},y=r(45),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("LineChart",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":"line-chart",height:t.height}})],1)}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,r){"use strict";r.r(e);r(54),r(10),r(75),r(53),r(22),r(28),r(80),r(81),r(59);var n=r(11);r(58),r(48);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,h=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){h=!0,c=t},f:function(){try{l||null==r.return||r.return()}finally{if(h)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={mixins:[r(615).a],props:{server:String,metric:Object},data:function(){return{m:[]}},watch:{"metric.metrics":function(){this.fetchData()},server:function(){this.fetchData()}},methods:{disable:function(){this.$store.commit("metrics/disable",this.metric)},fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,h,d,f,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],n=c(t.metric.metrics),e.prev=2,n.s();case 4:if((o=n.n()).done){e.next=15;break}l=o.value,h={},d=c(l.tags);try{for(d.s();!(f=d.n()).done;)m=f.value,h[m.name]=m.value}catch(t){d.e(t)}finally{d.f()}return e.next=11,t.$api.metrics.getByKey(t.server,l.name,h);case 11:v=e.sent,r.push(v);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:t.m=r;case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23]])})))()}},computed:{hasMetrics:function(){return this.m.length>0}}},h=r(45),component=Object(h.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-fill"},[t.hasMetrics?e("div",{staticClass:"card shadow-sm position-relative"},[e("button",{staticClass:"btn btn-light-outline btn-sm position-absolute",staticStyle:{top:"0",right:"0"},on:{click:t.disable}},[e("b-icon",{attrs:{icon:"x"}})],1),t._v(" "),e("div",{staticClass:"py-2 pl-2"},[e("ChartsLine",{attrs:{metrics:t.m}})],1)]):e("UIWarningMessage",[t._v("\n    There is no metric.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChartsLine:r(624).default,UIWarningMessage:r(614).default})},634:function(t,e,r){"use strict";r.r(e);r(48),r(19),r(10),r(82),r(133);var n={props:{server:String},data:function(){return{selected:{id:null,metrics:[]},selectedIds:[]}},mounted:function(){this.clear()},methods:{create:function(){this.$store.commit("metrics/enable",this.selected),this.clear()},clear:function(){var t=new Date;this.selected={id:t.getMilliseconds(),metrics:[]},this.selectedIds=[]},toggle:function(t){this.enabled(t)?(this.selected.metrics=this.selected.metrics.filter((function(e){return e.id!==t.id})),this.selectedIds=this.selectedIds.filter((function(e){return e!==t.id}))):(this.selected.metrics.push(t),this.selectedIds.push(t.id))},enabled:function(t){return this.selectedIds.includes(t.id)}},computed:{metrics:function(){return this.$store.getters["metrics/getMetrics"]},hasSelected:function(){return this.selected.metrics.length>0}}},c=r(45),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[e("h6",{staticClass:"mb-0"},[t._v("New metric")]),t._v(" "),t.hasSelected?e("div",[e("button",{staticClass:"btn btn-primary bt-sm",on:{click:t.create}},[e("b-icon",{attrs:{icon:"plus"}}),t._v("\n        Create\n      ")],1),t._v(" "),e("button",{staticClass:"btn border btn-light btn-sm ml-4",on:{click:t.clear}},[e("b-icon",{attrs:{icon:"x"}}),t._v("\n        Clear\n      ")],1)]):t._e()]),t._v(" "),e("div",{staticClass:"card-body p-2",staticStyle:{"max-height":"100px","overflow-y":"auto"}},t._l(t.metrics,(function(r){return e("small",{staticClass:"badge border",class:{"badge-primary":t.enabled(r),"badge-light":!t.enabled(r)},staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toggle(r)}}},[t._v("\n      "+t._s(r.name)+"\n      "),t._l(r.tags,(function(r){return e("small",[t._v("\n        "+t._s(r.name)+"="+t._s(r.value)+"\n      ")])}))],2)})),0),t._v(" "),t.hasSelected?e("MetricsItem",{attrs:{server:t.server,metric:t.selected}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MetricsItem:r(629).default})}}]);