import{a4 as v,g as w,d as T,q as h,r as g,ag as r,ah as H,ai as M,a as t,aj as F,ak as x,F as m,al as y,X as L,am as E,an as _}from"../index-621b10ea.js";import{T as $}from"./timeline-c57b55ee.js";import"./scroll-top-button-017dd3bf.js";import"./status-list-f3269d9d.js";import"./scrollable-list-80826970.js";import"./index-9cba5655.js";import"./load-more-ebdd9211.js";import"./status-container-6d12c92a.js";import"./pending-status-dc3e950a.js";import"./poll-preview-f41da687.js";import"./noop-7a918bee.js";function S(n){return v(`hashtag:${n}`,`hashtag&tag=${n}`)}var z=function(u){var l=u.params,a=(l==null?void 0:l.id)||"",d=w(),e=T(),s=h(function(o){return o.tags.get(a)}),c=h(function(o){var i;return(i=o.timelines.get("hashtag:".concat(a)))===null||i===void 0?void 0:i.next}),p=function(i){e(r(a,{url:c,maxId:i}))},f=function(){s!=null&&s.following?e(E(a)):e(_(a))};return S(a),g.useEffect(function(){e(r(a)),e(H(a))},[a]),g.useEffect(function(){e(M("hashtag:".concat(a))),e(r(a))},[a]),t(L,{label:"#".concat(a),transparent:!0},void 0,d.followHashtags&&t(F,{},void 0,t(x,{label:t(m,{id:"hashtag.follow",defaultMessage:"Follow hashtag"})},void 0,t(y,{checked:s==null?void 0:s.following,onChange:f}))),t($,{scrollKey:"hashtag_timeline",timelineId:"hashtag:".concat(a),onLoadMore:p,emptyMessage:t(m,{id:"empty_column.hashtag",defaultMessage:"There is nothing in this hashtag yet."}),divideType:"space"}))};export{z as HashtagTimeline,z as default};