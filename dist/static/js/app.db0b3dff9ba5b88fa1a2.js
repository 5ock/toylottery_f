webpackJsonp([1],{"2Dy3":function(t,a){},Gv6V:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App",components:{}},s,!1,function(t){e("XF8Z")},null,null).exports,r=e("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Login"},[e("form",{staticClass:"form-signin"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign in")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""}}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("Copyright © 2020 by 5ockdart")])])])}]};var l=e("VU/8")({name:"Login",data:function(){return{}}},o,!1,function(t){e("2Dy3")},"data-v-5fb5108e",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"LoginCreate"},[e("form",{staticClass:"form-signin"},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign up")]),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"validatecode"}},[t._v("Validate Code")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"validatecode",placeholder:"validate code",required:""}}),t._v(" "),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""}}),t._v(" "),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Done")]),t._v(" "),e("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("Copyright © 2020 by 5ockdart")])])])}]};var c=e("VU/8")({name:"LoginCreate",data:function(){return{}}},d,!1,function(t){e("Gv6V")},"data-v-398b0d9b",null).exports,v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"toysLottery"},[e("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[e("button",{staticClass:"navbar-toggler carzy_toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(a){t.isShow_m_navbar=!t.isShow_m_navbar}}},[e("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Toys Lotterys System")]),t._v(" "),t._m(0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow_m_navbar,expression:"isShow_m_navbar"}],staticClass:"navbar-collapse carzy_navbar"},[e("ul",{staticClass:"navbar-nav mt-2"},[e("li",{staticClass:"nav-item",staticStyle:{"padding-left":"20px"}},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/lottery/add"},nativeOn:{click:function(a){t.isShow_m_navbar=!t.isShow_m_navbar}}},[t._v("Add Lotterys")])],1),t._v(" "),e("li",{staticClass:"nav-item",staticStyle:{"padding-left":"20px"}},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/lottery"},nativeOn:{click:function(a){t.isShow_m_navbar=!t.isShow_m_navbar}}},[t._v("Information")])],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[e("div",{staticClass:"sidebar-sticky"},[e("ul",{staticClass:"nav flex-column"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/lottery/add"}},[t._v("Add Lotterys")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/lottery"}},[t._v("Information")])],1)])])]),t._v(" "),e("main",{staticClass:"col-md-9 col-lg-9 main",attrs:{role:"main"}},[e("router-view",{staticClass:"my-4 w-100"})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"navbar-nav px-2"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Sign out")])])])}]};var _=e("VU/8")({name:"toysLottery",data:function(){return{isShow_m_navbar:!1}},methods:{}},v,!1,function(t){e("v+4Y")},"data-v-db4d2f18",null).exports,m={name:"toysLottery_add",data:function(){return{data_remarks:"",data_url:"",data_price:"",data_item:"",data_isLottery:1,data_notification:1,data_month:"99",data_day:"99",data_hour:"99",data_min:"99",month:[1,2,3,4,5,6,7,8,9,10,11,12],hour:new Array(24),min:new Array(60)}},mounted:function(){this.resetData()},methods:{resetData:function(){this.data_remarks="",this.data_url="",this.data_price="",this.data_item="",this.data_month="99",this.data_day="99",this.data_hour="99",this.data_min="99",this.data_isLottery=1,this.data_notification=1},addZero:function(t){return parseInt(t)<10&&(t="0"+t),t},setData:function(){var t=this;"99"!=t.data_month&&"99"!=t.data_day&&"99"!=t.data_min&&"99"!=t.data_hour||alert("請輸入月, 日, 時, 分");var a={item:this.data_item,data:this.addZero(t.data_month)+this.addZero(t.data_day),time:this.addZero(t.data_hour)+this.addZero(t.data_min),price:this.data_price,url:this.data_url,isLottery:this.data_isLottery,notification:this.data_notification,remarks:this.data_remarks};console.log(a)}},computed:{days:function(){return"2"==this.data_month?new Array(28):"4"==this.data_month||"6"==this.data_month||"9"==this.data_month||"12"==this.data_month?new Array(30):new Array(31)}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"toysLottery_add"},[e("h1",{staticClass:"h2"},[t._v("Add Item")]),t._v(" "),e("form",{staticClass:"form_lotteryAdd"},[e("div",{staticClass:"form-group t-maxWidth"},[e("label",[t._v("商品名稱 :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_item,expression:"data_item"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ex: headlockstudio"},domProps:{value:t.data_item},on:{input:function(a){a.target.composing||(t.data_item=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",[t._v("日期 :")]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{"max-width":"150px",flex:"1","margin-right":"75px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data_month,expression:"data_month"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data_month=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"99"}},[t._v("Month")]),t._v(" "),t._l(t.month,function(a){return e("option",{domProps:{value:a}},[t._v(t._s(a))])})],2)]),t._v(" "),e("div",{staticStyle:{"max-width":"150px",flex:"1"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data_day,expression:"data_day"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data_day=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"99"}},[t._v("Day")]),t._v(" "),t._l(t.days,function(a,i){return e("option",{domProps:{value:i+1}},[t._v(t._s(i+1))])})],2)])])]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",[t._v("時間 :")]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("div",{staticStyle:{"max-width":"150px",flex:"1","margin-right":"75px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data_hour,expression:"data_hour"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data_hour=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"99"}},[t._v("Hour")]),t._v(" "),t._l(t.hour,function(a,i){return e("option",{domProps:{value:i}},[t._v(t._s(i))])})],2)]),t._v(" "),e("div",{staticStyle:{"max-width":"150px",flex:"1"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data_min,expression:"data_min"}],staticClass:"custom-select",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data_min=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"99"}},[t._v("Min")]),t._v(" "),t._l(t.min,function(a,i){return e("option",{domProps:{value:i}},[t._v(t._s(i))])})],2)])])]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",[t._v("價格 :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_price,expression:"data_price"}],staticClass:"form-control",attrs:{type:"text",placeholder:"ex: 2000台幣"},domProps:{value:t.data_price},on:{input:function(a){a.target.composing||(t.data_price=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",[t._v("網址 :")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_url,expression:"data_url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.data_url},on:{input:function(a){a.target.composing||(t.data_url=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",{staticStyle:{width:"110px"}},[t._v("抽選 or 直購 :")]),t._v(" "),e("label",{staticClass:"radioStyle",class:{isSelect:1==t.data_isLottery},attrs:{for:"Lottery"}},[t._v("抽選")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_isLottery,expression:"data_isLottery"}],staticStyle:{display:"none"},attrs:{id:"Lottery",type:"radio",value:"1"},domProps:{checked:t._q(t.data_isLottery,"1")},on:{change:function(a){t.data_isLottery="1"}}}),t._v(" "),e("label",{staticClass:"radioStyle",class:{isSelect:0==t.data_isLottery},attrs:{for:"purchase"}},[t._v("直購")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_isLottery,expression:"data_isLottery"}],staticStyle:{display:"none"},attrs:{id:"purchase",type:"radio",value:"0"},domProps:{checked:t._q(t.data_isLottery,"0")},on:{change:function(a){t.data_isLottery="0"}}})]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",{staticStyle:{width:"110px"}},[t._v("是否通知 :")]),t._v(" "),e("label",{staticClass:"radioStyle",class:{isSelect:"1"==t.data_notification},attrs:{for:"Yes"}},[t._v("要")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_notification,expression:"data_notification"}],staticStyle:{display:"none"},attrs:{id:"Yes",type:"radio",value:"1"},domProps:{checked:t._q(t.data_notification,"1")},on:{change:function(a){t.data_notification="1"}}}),t._v(" "),e("label",{staticClass:"radioStyle",class:{isSelect:"0"==t.data_notification},attrs:{for:"No"}},[t._v("不要")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data_notification,expression:"data_notification"}],staticStyle:{display:"none"},attrs:{id:"No",type:"radio",value:"0"},domProps:{checked:t._q(t.data_notification,"0")},on:{change:function(a){t.data_notification="0"}}})]),t._v(" "),e("div",{staticClass:"form-group t-maxWidth"},[e("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("備註:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data_remarks,expression:"data_remarks"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.data_remarks},on:{input:function(a){a.target.composing||(t.data_remarks=a.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.setData}},[t._v("儲存")])])])},staticRenderFns:[]};var p=e("VU/8")(m,u,!1,function(t){e("hix9")},"data-v-2223649c",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"toysLottery_add"},[a("h1",{staticClass:"h2"},[this._v("information")])])}]};var f=e("VU/8")({name:"toysLottery_add",data:function(){return{}}},h,!1,function(t){e("pqi0")},"data-v-b5e0199e",null).exports;i.a.use(r.a);var y=new r.a({routes:[{name:"login",path:"/login",component:l},{name:"LoginCreate",path:"/logincreate",component:c},{path:"/lottery",component:_,children:[{name:"lottery",path:"",component:f},{path:"add",name:"add",component:p}]},{name:"test",path:"/test",component:p}]}),g=e("mtWM"),b=e.n(g),C=e("Rf8U"),x=e.n(C);i.a.use(x.a,b.a),i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:n},template:"<App/>",router:y})},XF8Z:function(t,a){},hix9:function(t,a){},pqi0:function(t,a){},"v+4Y":function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.db0b3dff9ba5b88fa1a2.js.map