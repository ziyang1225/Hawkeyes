webpackJsonp([8],{Xfok:function(t,e){},dfM2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("18Nq");var s=function(t){i("Xfok")},a=Object(n.a)({data:function(){return{enable:!1,inputVisible:!1,inputValue:"",noticeMails:[]}},methods:{showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(e){t.$refs.saveTagInput.$refs.input.focus()})},handleInputNoticeConfirm:function(){var t=this;this.inputValue&&(this.noticeMails.push({keyword:this.inputValue}),this.axios.post(this.GLOBAL.settingNotice,{keyword:this.inputValue}).then(function(e){t.$message.success(e.data.msg),t.noticeMails=e.data.result}).catch(function(e){t.$message.error(e.toString())})),this.inputVisible=!1,this.inputValue=""},handleDeleteNotice:function(t){var e=this;this.noticeMails.splice(this.noticeMails.indexOf(t),1),this.axios.delete(this.GLOBAL.settingNotice+"?keyword="+t.keyword).then(function(t){e.$message.success(t.data.msg),e.inputVisible=!1,e.noticeMails=t.data.result}).catch(function(t){e.$message.error(t.toString()),e.inputVisible=!1})},fetchNoticeMails:function(){var t=this;this.axios.get(this.GLOBAL.settingNotice).then(function(e){t.noticeMails=e.data.result}).catch(function(e){t.$message.error(e.toString())})}},mounted:function(){this.fetchNoticeMails(),this.$nextTick(function(){})}},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{staticClass:"item",attrs:{shadow:"never"}},[i("el-tooltip",{attrs:{content:"邮箱格式：username@domain.com",placement:"bottom-end"}},[i("svg",{staticClass:"icon",staticStyle:{"font-size":"20px"},attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-tip"}})])]),t._v(" "),t._l(t.noticeMails,function(e){return i("el-tag",{key:e.keyword,attrs:{closable:!0,"close-transition":!0},on:{close:function(i){t.handleDeleteNotice(e)}}},[t._v("\n      "+t._s(e.keyword)+"\n    ")])}),t._v(" "),t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{slot:"header",size:"mini"},on:{blur:t.handleInputNoticeConfirm},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleInputNoticeConfirm(e):null}},slot:"header",model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):i("el-button",{attrs:{slot:"header",size:"small"},on:{click:t.showInput},slot:"header"},[t._v("\n          \n          添加")])],2)},[],!1,s,"data-v-8f25dda2",null);e.default=a.exports}});