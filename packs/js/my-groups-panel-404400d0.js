import{ko as p,a as t}from"../index-8e73ebc4.js";import{W as l}from"./widget-c17249f3.js";import{G as c}from"./group-list-item-78acc9d9.js";import{P as m}from"./placeholder-group-search-24534e80.js";import"./arrow-right-b75290c7.js";var v=function(){var r=p(),i=r.groups,o=r.isFetching,s=r.isFetched,a=r.isError,n=s&&i.length===0||a;return n?null:t(l,{title:"My Groups"},void 0,o?new Array(3).fill(0).map(function(e,u){return t(m,{withJoinAction:!1},u)}):i.slice(0,3).map(function(e){return t(c,{group:e,withJoinAction:!1},e.id)}))};export{v as default};