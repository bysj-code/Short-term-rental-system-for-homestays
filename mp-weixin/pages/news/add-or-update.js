(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/add-or-update"],{"0f7e":function(e,t,r){"use strict";(function(e){r("3168");n(r("66fd"));var t=n(r("75c8"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"1c93":function(e,t,r){},3332:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void r(s)}o.done?t(i):Promise.resolve(i).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function o(e){u(c,n,a,o,i,"next",e)}function i(e){u(c,n,a,o,i,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("7440"))}.bind(null,r)).catch(r.oe)},i={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var r=this;return c(n.default.mark((function a(){var u,c,o,i;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(c=a.sent,r.user=c.data,r.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(r.ruleForm.refid=t.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return r.ruleForm.id=t.id,a.next=11,r.$api.info("news",r.ruleForm.id);case 11:c=a.sent,r.ruleForm=c.data;case 13:if(r.cross=t.cross,!t.cross){a.next=37;break}o=e.getStorageSync("crossObj"),a.t0=n.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=37;break}if(i=a.t1.value,"title"!=i){a.next=23;break}return r.ruleForm.title=o[i],r.ro.title=!0,a.abrupt("continue",17);case 23:if("introduction"!=i){a.next=27;break}return r.ruleForm.introduction=o[i],r.ro.introduction=!0,a.abrupt("continue",17);case 27:if("picture"!=i){a.next=31;break}return r.ruleForm.picture=o[i],r.ro.picture=!0,a.abrupt("continue",17);case 31:if("content"!=i){a.next=35;break}return r.ruleForm.content=o[i],r.ro.content=!0,a.abrupt("continue",17);case 35:a.next=17;break;case 37:r.styleChange();case 38:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return c(n.default.mark((function r(){var a,u,c,o,i,s,l,f,d,p;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.ruleForm.title){r.next=3;break}return t.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(t.ruleForm.picture){r.next=6;break}return t.$utils.msg("图片不能为空"),r.abrupt("return");case 6:if(t.ruleForm.content){r.next=9;break}return t.$utils.msg("内容不能为空"),r.abrupt("return");case 9:if(!t.cross){r.next=25;break}if(o=e.getStorageSync("statusColumnName"),i=e.getStorageSync("statusColumnValue"),""==o){r.next=25;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=21;break}for(l in s)l==o&&(s[l]=i);return f=e.getStorageSync("crossTable"),r.next=19,t.$api.update("".concat(f),s);case 19:r.next=25;break;case 21:a=Number(e.getStorageSync("userid")),u=s["id"],c=e.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 25:if(!u||!a){r.next=47;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=u,d={page:1,limit:10,crossuserid:a,crossrefid:u},r.next=31,t.$api.list("news",d);case 31:if(p=r.sent,!(p.data.total>=c)){r.next=37;break}return t.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 37:if(!t.ruleForm.id){r.next=42;break}return r.next=40,t.$api.update("news",t.ruleForm);case 40:r.next=44;break;case 42:return r.next=44,t.$api.add("news",t.ruleForm);case 44:t.$utils.msgBack("提交成功");case 45:r.next=55;break;case 47:if(!t.ruleForm.id){r.next=52;break}return r.next=50,t.$api.update("news",t.ruleForm);case 50:r.next=54;break;case 52:return r.next=54,t.$api.add("news",t.ruleForm);case 54:t.$utils.msgBack("提交成功");case 55:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(r,"-").concat(n,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=i}).call(this,r("543d")["default"])},"5b85":function(e,t,r){"use strict";var n=r("1c93"),a=r.n(n);a.a},"75c8":function(e,t,r){"use strict";r.r(t);var n=r("c990"),a=r("dffc");for(var u in a)"default"!==u&&function(e){r.d(t,e,(function(){return a[e]}))}(u);r("5b85");var c,o=r("f0c5"),i=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"21d3e161",null,!1,n["a"],c);t["default"]=i.exports},c990:function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},dffc:function(e,t,r){"use strict";r.r(t);var n=r("3332"),a=r.n(n);for(var u in n)"default"!==u&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t["default"]=a.a}},[["0f7e","common/runtime","common/vendor"]]]);