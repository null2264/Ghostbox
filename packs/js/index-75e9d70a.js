import{as as g,a4 as L,d as T,az as M,q as o,r as _,aA as y,aB as l,a as e,aC as E,X as d,aD as b,F as m,ab as C,aE as I}from"../index-851c1ca9.js";import{T as k}from"./timeline-37ddfbcb.js";import"./scroll-top-button-b40cec8a.js";import"./status-list-e19cc00d.js";import"./scrollable-list-8dc2d15a.js";import"./index-4bff7452.js";import"./load-more-80d9b775.js";import"./status-container-02d49abd.js";import"./pending-status-3d425eee.js";import"./poll-preview-c4159b92.js";import"./noop-e59e95dd.js";function x(r){const{isLoggedIn:i}=g();return L(`list:${r}`,`list&list=${r}`,null,null,{enabled:i})}var K=function(){var i=T(),p=M(),t=p.id,n=o(function(a){return a.lists.get(t)}),u=o(function(a){var s;return(s=a.timelines.get("list:".concat(t)))===null||s===void 0?void 0:s.next});x(t),_.useEffect(function(){i(y(t)),i(l(t))},[t]);var c=function(s){i(l(t,{url:u,maxId:s}))},f=function(){i(I("LIST_EDITOR",{listId:t}))},v=n?n.title:t;if(typeof n>"u")return e(d,{},void 0,e("div",{},void 0,e(E,{})));if(n===!1)return e(b,{});var h=e("div",{},void 0,e(m,{id:"empty_column.list",defaultMessage:"There is nothing in this list yet. When members of this list create new posts, they will appear here."}),e("br",{}),e("br",{}),e(C,{onClick:f},void 0,e(m,{id:"list.click_to_add",defaultMessage:"Click here to add people"})));return e(d,{label:v,transparent:!0},void 0,e(k,{scrollKey:"list_timeline",timelineId:"list:".concat(t),onLoadMore:c,emptyMessage:h,divideType:"space"}))};export{K as default};
