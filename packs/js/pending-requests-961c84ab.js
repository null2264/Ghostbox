import{u as p,kn as u,a as e,L as g,X as m,o as c,a3 as o,y as r,F as i}from"../index-8e73ebc4.js";import{G as f}from"./group-card-67c9d830.js";import{S as v}from"./scrollable-list-1105defa.js";import{P as b}from"./placeholder-group-card-e1724147.js";import"./group-header-image-46514e59.js";import"./index-4ae6cef5.js";import"./load-more-7c38aeef.js";var h=c({label:{id:"groups.pending.label",defaultMessage:"Pending Requests"}});const P=function(){var l=p(),a=u(),t=a.groups,n=a.isLoading,d=function(){return e(o,{space:4,alignItems:"center",justifyContent:"center",className:"py-6","data-testid":"pending-requests-blankslate"},void 0,e(o,{space:2,className:"max-w-sm"},void 0,e(r,{size:"2xl",weight:"bold",tag:"h2",align:"center"},void 0,e(i,{id:"groups.pending.empty.title",defaultMessage:"No pending requests"})),e(r,{size:"sm",theme:"muted",align:"center"},void 0,e(i,{id:"groups.pending.empty.subtitle",defaultMessage:"You have no pending requests at this time."}))))};return e(m,{label:l.formatMessage(h.label)},void 0,e(v,{emptyMessage:d(),emptyMessageCard:!1,isLoading:n,itemClassName:"pb-4 last:pb-0",placeholderComponent:b,placeholderCount:3,scrollKey:"pending-group-requests",showLoading:n&&t.length===0},void 0,t.map(function(s){return e(g,{to:"/group/".concat(s.slug)},s.id,e(f,{group:s}))})))};export{P as default};