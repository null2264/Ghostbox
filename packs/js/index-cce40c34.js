import{a4 as p,u as f,d as v,f as y,q as g,r as h,af as o,a,X as M,F as T,a2 as x,o as C}from"../index-7b3b4f0a.js";import{P as R}from"./pull-to-refresh-5189fc41.js";import{T as b}from"./timeline-db163c3e.js";import"./scroll-top-button-c8a14e87.js";import"./status-list-ad391867.js";import"./scrollable-list-3cc1b07c.js";import"./index-b173c9ba.js";import"./load-more-975232dd.js";import"./status-container-06c35566.js";import"./pending-status-48c49ded.js";import"./poll-preview-5e023175.js";import"./noop-c2da1a45.js";function I({onlyMedia:i}={}){return p(`community${i?":media":""}`,`public:local${i?":media":""}`)}var L=C({title:{id:"column.community",defaultMessage:"Local timeline"}}),W=function(){var r=f(),m=v(),l=y(),e=!!l.getIn(["community","other","onlyMedia"],!1),u=g(function(n){var t;return(t=n.timelines.get("community"))===null||t===void 0?void 0:t.next}),s="community",c=function(t){m(o({url:u,maxId:t,onlyMedia:e}))},d=function(){return m(o({onlyMedia:e}))};return I({onlyMedia:e}),h.useEffect(function(){m(o({onlyMedia:e}))},[e]),a(x,{variant:"rounded",pad:!1,className:"p-4"},void 0,a(M,{className:"-mt-3 sm:mt-0",label:r.formatMessage(L.title),transparent:!0},void 0,a(R,{onRefresh:d},void 0,a(b,{scrollKey:"".concat(s,"_timeline"),timelineId:"".concat(s).concat(e?":media":""),prefix:"home",onLoadMore:c,emptyMessage:a(T,{id:"empty_column.community",defaultMessage:"The local timeline is empty. Write something publicly to get the ball rolling!"}),className:"px-2"}))))};export{W as default};