import{v as g}from"./message-2-2f21ce66.js";import{d as c,ea as v,r as f,kE as s,a as e,a3 as T,A as y,y as h,F as G,X as I}from"../index-621b10ea.js";import{u as M}from"./useGroupTag-92613ba5.js";import{T as _}from"./timeline-c57b55ee.js";import"./scroll-top-button-017dd3bf.js";import"./status-list-f3269d9d.js";import"./scrollable-list-80826970.js";import"./index-9cba5655.js";import"./load-more-ebdd9211.js";import"./status-container-6d12c92a.js";import"./pending-status-dc3e950a.js";import"./poll-preview-f41da687.js";import"./noop-7a918bee.js";var P=function(r){var t=c(),o=r.params.groupId,n=r.params.tagId,m=v(o),p=m.group,i=M(n),a=i.tag,u=i.isLoading,d=function(l){t(s(o,a==null?void 0:a.name,{maxId:l}))};return f.useEffect(function(){a!=null&&a.name&&t(s(o,a==null?void 0:a.name))},[o,a]),u||!a||!p?null:e(I,{label:"#".concat(a.name)},void 0,e(_,{scrollKey:"group_timeline",timelineId:"group:tags:".concat(o,":").concat(a.name),onLoadMore:d,divideType:"border",showGroup:!1,emptyMessageCard:!1,emptyMessage:e(T,{space:4,className:"py-6",justifyContent:"center",alignItems:"center"},void 0,e("div",{className:"rounded-full bg-gray-200 p-4 dark:bg-gray-800"},void 0,e(y,{src:g,className:"h-6 w-6 text-gray-600"})),e(h,{theme:"muted"},void 0,e(G,{id:"empty_column.group",defaultMessage:"There are no posts in this group yet."})))}))};export{P as default};