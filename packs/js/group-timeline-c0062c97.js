import{v as M}from"./message-2-2f21ce66.js";import{a4 as D,aX as A,u as N,bb as R,d as E,r as c,e9 as L,q as g,e7 as $,ea as O,kE as v,kF as z,kG as q,a as e,R as H,H as f,W as V,L as j,c8 as K,e8 as P,y as h,F as b,al as W,a3 as y,A as X,ec as B}from"../index-7b6dea3f.js";import{T as J}from"./timeline-2ba17a80.js";import"./scroll-top-button-1d0cab5b.js";import"./status-list-51b3fd4f.js";import"./scrollable-list-41d623e7.js";import"./index-eb1d5dbf.js";import"./load-more-3d2f8230.js";import"./status-container-dc310321.js";import"./pending-status-4c474364.js";import"./poll-preview-902144d0.js";import"./noop-495afcb0.js";function Q(n){return D(`group:${n}`,`group&group=${n}`)}var U=A(),pe=function(T){var u,_=N(),G=R(),l=G.account,s=E(),p=c.useRef(null),a=T.params.groupId,k=L(a),r=k.group,t="group:".concat(a),I=!!l&&(r==null||(u=r.relationship)===null||u===void 0?void 0:u.member),d=g(function(o){var i;return!!((i=o.compose.get(t))!==null&&i!==void 0&&i.group_timeline_visible)}),C=g(function(o){return U(o,{type:"group:".concat(r==null?void 0:r.id,":pinned")})}),m=$(p,function(o){s(O(t,o,_))}),S=m.isDragging,x=m.isDraggedOver,F=function(i){s(v(a,{maxId:i}))},w=function(){s(B(t,!d))};return Q(a),c.useEffect(function(){s(v(a)),s(z(a)),s(q(t,a))},[a]),r?e(y,{space:2},void 0,I&&e("div",{className:"border-b border-solid border-gray-200 py-6 dark:border-gray-800"},void 0,H.createElement(f,{ref:p,alignItems:"start",space:4,className:V("relative rounded-xl transition",{"border-2 border-primary-600 border-dashed z-[99] p-4":S,"ring-2 ring-offset-2 ring-primary-600":x})},e(j,{to:"/@".concat(l.acct)},void 0,e(K,{src:l.avatar,size:46})),e(P,{id:t,shouldCondense:!0,autoFocus:!1,group:a,extra:!r.locked&&e(f,{alignItems:"center",space:4},void 0,e("label",{className:"ml-auto cursor-pointer",htmlFor:"group-timeline-visible"},void 0,e(h,{theme:"muted"},void 0,e(b,{id:"compose_group.share_to_followers",defaultMessage:"Share with my followers"}))),e(W,{id:"group-timeline-visible",checked:d,onChange:w,size:"sm"}))}))),e(J,{scrollKey:"group_timeline",timelineId:t,onLoadMore:F,emptyMessage:e(y,{space:4,className:"py-6",justifyContent:"center",alignItems:"center"},void 0,e("div",{className:"rounded-full bg-gray-200 p-4 dark:bg-gray-800"},void 0,e(X,{src:M,className:"h-6 w-6 text-gray-600"})),e(h,{theme:"muted"},void 0,e(b,{id:"empty_column.group",defaultMessage:"There are no posts in this group yet."}))),emptyMessageCard:!1,divideType:"border",showGroup:!1,featuredStatusIds:C})):null};export{pe as default};