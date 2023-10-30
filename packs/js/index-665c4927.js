import{u as _,d as R,g as T,t as x,r as s,q as l,Z as b,$ as w,a0 as u,a1 as A,a as t,a2 as $,a3 as P,y as m,F as c,L as k,X as E,o as F}from"../index-8e73ebc4.js";import{P as H}from"./pull-to-refresh-11073e4c.js";import{T as L}from"./timeline-d3bbcdbd.js";import"./scroll-top-button-4bd86b7c.js";import"./status-list-073bb22c.js";import"./scrollable-list-1105defa.js";import"./index-4ae6cef5.js";import"./load-more-7c38aeef.js";import"./status-container-0c7afc67.js";import"./pending-status-b9b27b30.js";import"./poll-preview-5d0879f8.js";import"./noop-677c6381.js";var N=F({title:{id:"column.home",defaultMessage:"Home"}}),J=function(){var p=_(),a=R(),h=T(),d=x(),o=s.useRef(null),f=l(function(i){var e;return((e=i.timelines.get("home"))===null||e===void 0?void 0:e.isPartial)===!0}),n=l(function(i){var e;return(e=i.timelines.get("home"))===null||e===void 0?void 0:e.feedAccountId}),r=l(function(i){return n?i.relationships.get(n):null}),g=l(function(i){var e;return(e=i.timelines.get("home"))===null||e===void 0?void 0:e.next}),y=function(e){a(u({url:g,maxId:e,accountId:n}))},I=function(){f?o.current=setInterval(function(){a(u())},3e3):v()},v=function(){o.current&&(clearInterval(o.current),o.current=null)},M=function(){return a(u({accountId:n}))};return s.useEffect(function(){return I(),function(){v()}},[f]),s.useEffect(function(){n&&a(b([n]))},[]),s.useEffect(function(){r&&!(r!=null&&r.following)&&(a(w()),a(u({},function(){a(A())})))},[n]),t(E,{label:p.formatMessage(N.title),transparent:!0,withHeader:!1},void 0,t(H,{onRefresh:M},void 0,t($,{variant:"rounded",pad:!1,className:"px-6"},void 0,t(L,{scrollKey:"home_timeline",onLoadMore:y,timelineId:"home",divideType:"border",showAds:!0,emptyMessage:t(P,{space:1},void 0,t(m,{size:"xl",weight:"medium",align:"center"},void 0,t(c,{id:"empty_column.home.title",defaultMessage:"You're not following anyone yet"})),t(m,{theme:"muted",align:"center"},void 0,t(c,{id:"empty_column.home.subtitle",defaultMessage:"{siteTitle} gets more interesting once you follow other users.",values:{siteTitle:d.title}})),h.federating&&t(m,{theme:"muted",align:"center"},void 0,t(c,{id:"empty_column.home",defaultMessage:"Or you can visit {public} to get started and meet other users.",values:{public:t(k,{to:"/timeline/local",className:"text-primary-600 hover:underline dark:text-primary-400"},void 0,t(c,{id:"empty_column.home.local_tab",defaultMessage:"the {site_title} tab",values:{site_title:d.title}}))}})))}))))};export{J as default};