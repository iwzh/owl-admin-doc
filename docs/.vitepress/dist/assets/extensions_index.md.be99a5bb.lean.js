import{r as h,o as m,c as d,a as t,t as n,n as p,b as y,d as s}from"./app.d3e52db8.js";const g={class:"extension-card"},w={class:"extension-card-info"},v={class:"extension-card-description"},x={class:"extension-card-install"},i={__name:"index",props:{name:{type:String,default:""},homePage:{type:String,default:""},author:{type:String,default:""},authorHomePage:{type:String,default:""},description:{type:String,default:""},zip:{type:String,default:""},composer:{type:String,default:""}},setup(o){const r=l=>{window.open(l)},a=h("复制命令"),u=l=>{const e=document.createElement("input");e.setAttribute("readonly","readonly"),e.setAttribute("value",l),document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),a.value="已复制",setTimeout(()=>{a.value="复制命令"},1e3)),document.body.removeChild(e)};return(l,e)=>(m(),d("div",g,[t("div",w,[t("div",{class:"extension-card-name cursor-pointer",title:"打开扩展主页",onClick:e[0]||(e[0]=c=>r(o.homePage))},n(o.name),1),t("div",{class:"extension-card-author cursor-pointer",title:"打开作者主页",onClick:e[1]||(e[1]=c=>r(o.authorHomePage))},n(o.author),1)]),t("div",v,n(o.description),1),t("div",x,[t("div",{class:p(["extension-card-zip cursor-pointer",{"hide-box":!o.zip}]),onClick:e[2]||(e[2]=c=>r(o.zip))}," zip下载 ",2),y("   "),t("div",{class:p(["extension-card-composer cursor-pointer",{"hide-box":!o.composer}]),onClick:e[3]||(e[3]=c=>u(o.composer))},n(a.value),3)])]))}},C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"extensions/index.md","lastUpdated":1678154501000}'),f={name:"extensions/index.md"},S=Object.assign(f,{setup(o){return(r,a)=>(m(),d("div",null,[t("div",null,[s(i,{name:"登录保护","home-page":"https://gitee.com/slowlyo/owl-login-guard",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"登录保护，防止暴力破解密码",composer:"composer require slowlyo/owl-login-guard",zip:"https://gitee.com/slowlyo/owl-login-guard/repository/archive/master.zip"}),s(i,{name:"后台功能-通知公告管理","home-page":"https://gitee.com/slowlyo/owl-module-notice",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"增加通知公告管理",composer:"composer require slowlyo/owl-notice",zip:"https://gitee.com/slowlyo/owl-module-notice/repository/archive/master.zip"}),s(i,{name:"数据字典","home-page":"https://gitee.com/slowlyo/owl-dict",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"增加数据字典功能",composer:"composer require slowlyo/owl-dict",zip:"https://gitee.com/slowlyo/owl-dict/repository/archive/master.zip"}),s(i,{name:"amis json 解析","home-page":"https://gitee.com/slowlyo/owl-amis-json-parse",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"将 amis json schema 转换成 php 代码",composer:"composer require slowlyo/owl-amis-json-parse",zip:"https://gitee.com/slowlyo/owl-amis-json-parse/repository/archive/master.zip"}),s(i,{name:"微信用户管理","home-page":"https://gitee.com/slowlyo/owl-wechat-user",author:"slowlyo","author-home-page":"https://gitee.com/slowlyo",description:"基础会员管理, 分表 (含微信小程序授权登录)",composer:"composer require slowlyo/owl-wechat-user",zip:"https://gitee.com/slowlyo/owl-wechat-user/repository/archive/master.zip"})])]))}});export{C as __pageData,S as default};