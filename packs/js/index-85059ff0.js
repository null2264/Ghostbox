import{a4 as M,a7 as h,a8 as _,N as P,a9 as S,d as T,f as w,q as I,r as $,aa as p,R as v,a as t,X as b,H as N,ab as g,a6 as q,y as A,F as f,a2 as E,ac as F,ad as L}from"../index-8f099bc3.js";import{T as z}from"./timeline-02bec359.js";import{P as B}from"./pinned-hosts-picker-12291d6d.js";import"./scroll-top-button-5f8701ea.js";import"./status-list-0f19bd7b.js";import"./scrollable-list-8e3d5c29.js";import"./index-98c72e22.js";import"./load-more-ee034a21.js";import"./status-container-2d4e1fd3.js";import"./pending-status-cdd47344.js";import"./poll-preview-3c541069.js";import"./noop-6da3d1eb.js";function D({instance:n,onlyMedia:a}){return M(`remote${a?":media":""}:${n}`,`public:remote${a?":media":""}&instance=${n}`)}const H=n=>P(n).getIn(["remote_timeline","pinnedHosts"]),K=n=>(a,s)=>{const o=s(),i=H(o);return a(h(["remote_timeline","pinnedHosts"],_(i).add(n)))},O=n=>(a,s)=>{const o=s(),i=H(o);return a(h(["remote_timeline","pinnedHosts"],_(i).remove(n)))};var ne=function(a){var s=a.params,o=S(),i=T(),e=s==null?void 0:s.instance,c=w(),u="remote",r=!!c.getIn(["remote","other","onlyMedia"]),y=I(function(m){var l;return(l=m.timelines.get("remote"))===null||l===void 0?void 0:l.next}),d=c.getIn(["remote_timeline","pinnedHosts"]).includes(e),R=function(){o.push("/timeline/fediverse")},x=function(l){i(p(e,{url:y,maxId:l,onlyMedia:r}))};D({instance:e,onlyMedia:r}),$.useEffect(function(){i(p(e,{onlyMedia:r,maxId:void 0}))},[r]);var k=function(){i(d?O(e):K(e))},C=function(){return t(g,{size:18,src:d?F:L,onClick:k})};return v.createElement(v.Fragment,null,e&&t(B,{host:e}),t(E,{variant:"rounded",pad:!1,className:"p-4"},void 0,t(b,{label:e,transparent:!0,action:C()},void 0,!d&&t(N,{className:"rounded-lg bg-white p-2 text-gray-900 shadow dark:bg-primary-800 dark:text-gray-100 dark:shadow-none",space:2},void 0,t(g,{iconClassName:"h-5 w-5",src:q,onClick:R}),t(A,{},void 0,t(f,{id:"remote_timeline.filter_message",defaultMessage:"You are viewing the timeline of {instance}.",values:{instance:e}}))),t(z,{scrollKey:"".concat(u,"_").concat(e,"_timeline"),timelineId:"".concat(u).concat(r?":media":"",":").concat(e),onLoadMore:x,emptyMessage:t(f,{id:"empty_column.remote",defaultMessage:"There is nothing here! Manually follow users from {instance} to fill it up.",values:{instance:e}}),className:"px-2"}))))};export{ne as default};
