import{Q as u,k_ as f,u as g,d as m,r as c,k$ as p,q as o,a as e,X as h,o as w,F as v}from"../index-7b6dea3f.js";import{H as M}from"./hashtag-9471a569.js";import{S as _}from"./scrollable-list-41d623e7.js";import{P as F}from"./placeholder-hashtag-53ab98c4.js";import"./index-eb1d5dbf.js";import"./load-more-3d2f8230.js";var L=w({heading:{id:"column.followed_tags",defaultMessage:"Followed hashtags"}}),y=u(function(s){s(f())},300,{leading:!0}),k=function(){var l=g(),t=m();c.useEffect(function(){t(p())},[]);var r=o(function(a){return a.followed_tags.items}),n=o(function(a){return a.followed_tags.isLoading}),d=o(function(a){return!!a.followed_tags.next}),i=e(v,{id:"empty_column.followed_tags",defaultMessage:"You haven't followed any hashtag yet."});return e(h,{label:l.formatMessage(L.heading)},void 0,e(_,{scrollKey:"followed_tags",emptyMessage:i,isLoading:n,hasMore:d,onLoadMore:function(){return y(t)},placeholderComponent:F,placeholderCount:5,itemClassName:"pb-3"},void 0,r.map(function(a){return e(M,{hashtag:a},a.name)})))};export{k as default};