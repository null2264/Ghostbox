import{jC as h,d as v,u as M,aC as q,q as r,a8 as R,R as y,jD as c,a as n,X as I,o as L,F as _,aT as S}from"../index-7b6dea3f.js";import{l as b}from"./lodash-906abca8.js";import{S as w}from"./status-list-51b3fd4f.js";import"./scrollable-list-41d623e7.js";import"./index-eb1d5dbf.js";import"./load-more-3d2f8230.js";import"./status-container-dc310321.js";import"./pending-status-4c474364.js";import"./poll-preview-902144d0.js";import"./noop-495afcb0.js";var Q=L({heading:{id:"column.quotes",defaultMessage:"Post quotes"}}),T=b.debounce(function(o,a){return a(h(o))},300,{leading:!0}),O=function(){var a=v(),d=M(),p=q(),e=p.statusId,l=r(function(t){return t.status_lists.getIn(["quotes:".concat(e),"items"],R())}),u=r(function(t){return t.status_lists.getIn(["quotes:".concat(e),"isLoading"],!0)}),m=r(function(t){return!!t.status_lists.getIn(["quotes:".concat(e),"next"])});y.useEffect(function(){a(c(e))},[e]);var f=function(){var t=S(regeneratorRuntime.mark(function i(){return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,a(c(e));case 2:case"end":return s.stop()}},i)}));return function(){return t.apply(this,arguments)}}(),g=n(_,{id:"empty_column.quotes",defaultMessage:"This post has not been quoted yet."});return n(I,{label:d.formatMessage(Q.heading),transparent:!0},void 0,n(w,{statusIds:l,scrollKey:"quotes:".concat(e),hasMore:m,isLoading:typeof u=="boolean"?u:!0,onLoadMore:function(){return T(e,a)},onRefresh:f,emptyMessage:g,divideType:"space"}))};export{O as default};