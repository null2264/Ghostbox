import{a as t}from"../index-7b6dea3f.js";import{u as p}from"./useSuggestedGroups-63bb62c0.js";import{W as m}from"./widget-b4e9d217.js";import{G as g}from"./group-list-item-582767be.js";import{P as l}from"./placeholder-group-search-40dac029.js";import"./arrow-right-b75290c7.js";var w=function(){var e=p(),i=e.groups,o=e.isFetching,s=e.isFetched,u=e.isError,a=s&&i.length===0||u;return a?null:t(m,{title:"Suggested Groups"},void 0,o?new Array(3).fill(0).map(function(r,n){return t(l,{withJoinAction:!1},n)}):i.slice(0,3).map(function(r){return t(g,{group:r,withJoinAction:!1},r.id)}))};export{w as default};