import{I as p,f as d,_ as v}from"./app-e31af5f8.js";import{c,r as n,y as f,h as m,o as y,j as a}from"./framework-b5ea9e64.js";const g=e=>d({},{showCompileOutput:!1,clearConsole:!1,ssr:!1},JSON.parse(decodeURIComponent(e)));var R=c({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const o=n(!0),t=f(),l=n(),s=m(()=>g(e.settings)),r=async()=>{const{ReplStore:u,Repl:i}=await v(()=>import("./vue-repl-f75b8650.js"),["assets/vue-repl-f75b8650.js","assets/app-e31af5f8.js","assets/framework-b5ea9e64.js"]);t.value=i,l.value=new u({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return y(async()=>{await r(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(p,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{R as default};
